import { A, useLocation } from "@solidjs/router"
import { For } from "solid-js"

const TABS = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Admin", href: "/admin" },
  { label: "Developer", href: "/developer" },
  { label: "Docs", href: "https://opencode.ai/docs", external: true },
] as const

export function Nav() {
  const location = useLocation()

  return (
    <nav class="enterprise-nav">
      <div class="enterprise-nav__brand">
        <a href="/" class="enterprise-nav__logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
            <path
              d="M8 12l2.5 2.5L16 9"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>OpenCode</span>
        </a>
      </div>
      <div class="enterprise-nav__tabs" role="tablist" aria-label="Main navigation">
        <For each={TABS}>
          {(tab) =>
            "external" in tab && tab.external ? (
              <a href={tab.href} class="enterprise-nav__tab" target="_blank" rel="noopener noreferrer">
                {tab.label}
              </a>
            ) : (
              <A
                href={tab.href}
                class="enterprise-nav__tab"
                classList={{ "enterprise-nav__tab--active": location.pathname === tab.href }}
                end={tab.href === "/"}
                aria-current={location.pathname === tab.href ? "page" : undefined}
              >
                {tab.label}
              </A>
            )
          }
        </For>
      </div>
    </nav>
  )
}
