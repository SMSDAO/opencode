# Architecture

## Monorepo Overview

OpenCode is a Bun + Turborepo monorepo organised under `packages/`.

```
opencode/
├── packages/
│   ├── console/      Terminal UI shell (split into sub-packages)
│   ├── desktop/      Tauri-based desktop app wrapper
│   ├── enterprise/   SolidStart web app — share viewer + enterprise dashboards
│   ├── extensions/   IDE extension helpers
│   ├── function/     Serverless function handlers (SST/AWS Lambda)
│   ├── identity/     Brand assets (logos, avatars)
│   ├── opencode/     Core CLI & agent runtime (main package)
│   ├── plugin/       Plugin system
│   ├── script/       Shared build/release scripts
│   ├── sdk/          Generated TypeScript SDK + OpenAPI spec
│   ├── slack/        Slack integration
│   ├── ui/           Shared SolidJS component library (Neo-Glow design system)
│   ├── util/         Shared utility functions
│   └── web/          Astro marketing + docs site
├── infra/            SST infrastructure definitions (AWS + Cloudflare)
├── github/           GitHub Action wrapper
├── script/           Root-level release and publish scripts
└── .github/workflows CI/CD pipeline definitions
```

## Package Dependency Graph

```
opencode (core CLI)
  └── @opencode-ai/sdk
  └── @opencode-ai/util

enterprise (web app)
  └── @opencode-ai/ui
  └── @opencode-ai/util
  └── @opencode-ai/sdk

ui (component library)
  └── @opencode-ai/sdk
  └── @opencode-ai/util

web (docs + marketing)
  └── opencode (devDep — for type generation)

function (serverless handlers)
  └── @opencode-ai/sdk
```

## Key Technologies

| Layer     | Technology                             |
| --------- | -------------------------------------- |
| Runtime   | Bun 1.3+                               |
| Build     | Turborepo 2, Vite 7                    |
| Core CLI  | TypeScript + Bun APIs                  |
| Web app   | SolidStart + SolidJS + TailwindCSS v4  |
| Docs site | Astro + Starlight                      |
| Infra     | SST v3 (AWS Lambda + Cloudflare R2/D1) |
| Auth      | OpenAuth JS (JWT + refresh tokens)     |
| Storage   | AWS S3 or Cloudflare R2 (env-driven)   |

## Enterprise Dashboard Architecture

The enterprise app (`packages/enterprise`) is a SolidStart application deployed as a Cloudflare Worker or Node.js server. It uses **file-based routing** under `src/routes/`:

```
src/routes/
├── index.tsx          Home / platform status
├── dashboard/
│   └── index.tsx      User dashboard (activity, metered usage, billing)
├── admin/
│   └── index.tsx      Admin dashboard (users, RBAC, billing controls, audit log)
├── developer/
│   └── index.tsx      Developer dashboard (logs, env, deployments)
├── share/
│   └── [shareID].tsx  Public session share viewer
├── share.tsx          Share layout
├── api/
│   └── [...path].ts   API proxy / passthrough
└── [...404].tsx       404 fallback
```

### Neo-Glow Design System

All enterprise UI components use a dark-mode-first design system defined in `src/components/enterprise.css`. Colours and effects are applied via plain CSS classes (no Tailwind utility sprawl in JSX). Key tokens:

| Token   | Value                             | Usage                      |
| ------- | --------------------------------- | -------------------------- |
| Purple  | `#a78bfa` / `rgba(167,139,250,…)` | Primary accent, glows      |
| Green   | `#34d399`                         | Success, health indicators |
| Amber   | `#fbbf24`                         | Warnings                   |
| Red     | `#f87171`                         | Errors, suspended state    |
| Surface | `rgba(255,255,255,0.03)`          | Card backgrounds           |
| Border  | `rgba(255,255,255,0.07)`          | Card borders               |

## RBAC Roles

| Role      | Capabilities                                                |
| --------- | ----------------------------------------------------------- |
| Admin     | Full access: user mgmt, role assignment, billing, audit log |
| Developer | API logs, env management, deploy configs                    |
| User      | Own dashboard, metered usage, account settings              |
| Auditor   | Read-only: API logs, audit log                              |
