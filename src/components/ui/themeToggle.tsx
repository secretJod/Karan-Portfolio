"use client"

import * as React from "react"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  // This state is to prevent hydration mismatches, ensuring the UI
  // only renders on the client after it knows the current theme.
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const toggleTheme = React.useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    const apply = () => {
      document.documentElement.classList.toggle("dark", next === "dark")
      setTheme(next)
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!document.startViewTransition || !buttonRef.current || reduceMotion) {
      apply()
      return
    }

    // Circular reveal expanding from the toggle button (View Transitions API)
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(() => flushSync(apply))
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })
  }, [resolvedTheme, setTheme])

  if (!mounted) {
    // Render a placeholder or disabled button on the server and during hydration
    return <Button variant="ghost" size="icon" disabled />
  }

  return (
    <Button ref={buttonRef} variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
