import { A } from "@solidjs/router"
import { Nav } from "~/components/nav"
import "~/components/enterprise.css"

export default function NotFound() {
  return (
    <div class="dashboard">
      <Nav />
      <main class="dashboard__main" style="text-align:center;padding-top:6rem">
        <div class="page-header__eyebrow" style="display:inline-block">
          404
        </div>
        <h1 class="page-header__title" style="font-size:3rem;margin:1rem 0">
          Page Not Found
        </h1>
        <p class="page-header__subtitle">The page you're looking for doesn't exist.</p>
        <div style="margin-top:2rem">
          <A
            href="/"
            style="font-size:0.9rem;color:#a78bfa;text-decoration:none;padding:0.625rem 1.25rem;border:1px solid rgba(167,139,250,0.3);border-radius:8px;display:inline-block"
          >
            ← Back to Home
          </A>
        </div>
      </main>
    </div>
  )
}
