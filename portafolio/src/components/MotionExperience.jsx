import { useEffect, useRef } from 'react'

export default function MotionExperience({ children }) {
  const rootRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const progress = progressRef.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    let dispose = () => {}

    const setup = () => {
      dispose()
      if (preference.matches) return

      const cleanups = []
      const hero = root.querySelector('#home')
      if (hero && 'IntersectionObserver' in window) {
        let inView = true
        const pauseScene = () => {
          hero.dataset.scenePaused = String(!inView || document.hidden)
        }
        const sceneObserver = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting
          pauseScene()
        })
        sceneObserver.observe(hero)
        document.addEventListener('visibilitychange', pauseScene)
        cleanups.push(() => {
          sceneObserver.disconnect()
          document.removeEventListener('visibilitychange', pauseScene)
          delete hero.dataset.scenePaused
        })
      }
      const elements = [...root.querySelectorAll('[data-reveal]')]
      if ('IntersectionObserver' in window) {
        root.classList.add('motion-ready')
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          })
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
        elements.forEach(element => {
          element.style.setProperty('--reveal-delay', `${element.dataset.delay || 0}ms`)
          observer.observe(element)
        })
        cleanups.push(() => observer.disconnect())
      }

      let scrollFrame = 0
      const drawProgress = () => {
        const distance = document.documentElement.scrollHeight - window.innerHeight
        progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`
        scrollFrame = 0
      }
      const onScroll = () => {
        if (!scrollFrame) scrollFrame = requestAnimationFrame(drawProgress)
      }
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
      cleanups.push(() => {
        cancelAnimationFrame(scrollFrame)
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      })

      if (finePointer.matches) {
        root.querySelectorAll('[data-spotlight], .motion-button').forEach(element => {
          let frame = 0
          const move = event => {
            cancelAnimationFrame(frame)
            const { clientX, clientY } = event
            frame = requestAnimationFrame(() => {
              const rect = element.getBoundingClientRect()
              const x = clientX - rect.left
              const y = clientY - rect.top
              element.style.setProperty('--pointer-x', `${x}px`)
              element.style.setProperty('--pointer-y', `${y}px`)
              element.dataset.pointerActive = 'true'
              if (element.classList.contains('motion-button')) {
                element.style.setProperty('--magnet-x', `${(x / rect.width - 0.5) * 7}px`)
                element.style.setProperty('--magnet-y', `${(y / rect.height - 0.5) * 7}px`)
              }
            })
          }
          const leave = () => {
            cancelAnimationFrame(frame)
            delete element.dataset.pointerActive
            element.style.removeProperty('--magnet-x')
            element.style.removeProperty('--magnet-y')
          }
          element.addEventListener('pointermove', move, { passive: true })
          element.addEventListener('pointerleave', leave)
          cleanups.push(() => {
            leave()
            element.removeEventListener('pointermove', move)
            element.removeEventListener('pointerleave', leave)
          })
        })
      }

      root.querySelectorAll('[data-spotlight], .motion-button, .hero-emblem').forEach(element => {
        let timer = 0
        const touch = event => {
          if (event.pointerType === 'mouse') return
          clearTimeout(timer)
          const rect = element.getBoundingClientRect()
          element.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
          element.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
          element.dataset.pointerActive = 'true'
          element.dataset.touchActive = 'true'
          if (!element.classList.contains('hero-emblem')) element.classList.add('touch-feedback')
          timer = window.setTimeout(reset, 550)
        }
        const reset = () => {
          delete element.dataset.pointerActive
          delete element.dataset.touchActive
          element.classList.remove('touch-feedback')
        }
        element.addEventListener('pointerdown', touch, { passive: true })
        element.addEventListener('pointercancel', reset)
        cleanups.push(() => {
          clearTimeout(timer)
          reset()
          element.removeEventListener('pointerdown', touch)
          element.removeEventListener('pointercancel', reset)
        })
      })

      dispose = () => {
        cleanups.forEach(cleanup => cleanup())
        root.classList.remove('motion-ready')
        elements.forEach(element => element.classList.remove('is-revealed'))
        progress.style.transform = 'scaleX(0)'
      }
    }

    setup()
    preference.addEventListener('change', setup)
    finePointer.addEventListener('change', setup)
    return () => {
      dispose()
      preference.removeEventListener('change', setup)
      finePointer.removeEventListener('change', setup)
    }
  }, [])

  return (
    <div ref={rootRef} className="motion-experience">
      <div ref={progressRef} className="reading-progress" aria-hidden="true" />
      {children}
    </div>
  )
}
