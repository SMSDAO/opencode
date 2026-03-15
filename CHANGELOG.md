# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-03-15

### Added

- **Enterprise Dashboards** — User, Admin, and Developer dashboards with Neo-Glow design system in `packages/enterprise`
- **Navigation shell** — Tab-based responsive navigation (Home, Dashboard, Admin, Developer, Docs) with keyboard and mobile support
- **User Dashboard** — Account overview, activity metrics, notifications, metered usage panel, billing summary
- **Admin Dashboard** — System overview, user management table, RBAC role/permission matrix, billing controls with seat and token metering, API monitoring KPIs, audit log viewer
- **Developer Dashboard** — API monitoring KPIs, live log viewer, environment variable management, integration health checks, deployment diagnostics table
- **Metered usage UI** — Token quota, API request, and storage meter bars for users and aggregate platform view for admins
- **Billing controls** — Per-user billing summary and admin-level MRR / seat / overage controls
- **RBAC role matrix** — Visual permission matrix for Admin, Developer, User, Auditor roles
- **CHANGELOG.md** — This file; using Keep a Changelog format with semantic versioning
- **`/docs` directory** — Architecture, deployment, environment variables, and user/admin/developer guides
- **`/.env.example` update** — Added enterprise and auth environment variable templates
- **Homepage route** (`/`) — Platform status overview and quick navigation cards

### Changed

- `packages/enterprise/src/app.css` — Imports enterprise Neo-Glow component stylesheet
- `packages/enterprise/src/routes/[...404].tsx` — Cleaned up default SolidJS placeholder text
- `README.md` — Added UI Preview section with user-dashboard and admin-dashboard screenshots

### Fixed

- Enterprise app now has a root `/` index route (previously resulted in 404)
- Navigation between dashboard sections is now consistent and keyboard-accessible

### Security

- No hardcoded secrets; all credentials remain environment-variable driven
- RBAC role matrix documents permission boundaries for all four roles

[Unreleased]: https://github.com/SMSDAO/opencode/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/SMSDAO/opencode/releases/tag/v1.0.0
