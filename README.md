<div align="center">

# AdminAI — AI-Powered Internal Admin Operations Platform

**A modern, enterprise-grade internal tooling dashboard for managing users, approvals, workflows, data, and AI-assisted operational decisions — all from a single console.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Zustand](https://img.shields.io/badge/State-Zustand-443E38)](https://github.com/pmndrs/zustand)
[![Recharts](https://img.shields.io/badge/Charts-Recharts-22B5BF)](https://recharts.org)
[![License](https://img.shields.io/badge/License-MIT-3DA639)](#license)
[![Status](https://img.shields.io/badge/Status-Reference_Implementation-4F46E5)](#project-status)

</div>

---

> **Project status.** This repository ships a **high-fidelity, production-shaped frontend reference implementation** of an internal admin platform. The UI is fully interactive and is built against a typed **mock data & service layer** (`src/data/mockData.js`) that mirrors the contracts of a real backend. Sections describing the API, database, and service tier below document the **target reference architecture the interface is designed to plug into** — clearly labeled as *current* vs *target* so reviewers know exactly what runs today. This is intentional: it lets the product surface, information architecture, and UX be validated *before* committing backend infrastructure.

---

## Live Walkthrough

A full video walkthrough of the platform is available on Loom:

**[Watch the AdminAI walkthrough on Loom](https://www.loom.com/share/5edf6e52455744d9909bd23a3f670138)**

---

## Screenshots

### Operations Dashboard
KPI tiles, time-series admin-action and ticket-volume charts, AI insights, pending approvals, and recent activity.

![Operations Dashboard](src/Images/Screenshot%202026-06-09%20011101.png)

### User Management
Searchable, filterable user directory with status, risk scoring, and per-row actions.

![User Management](src/Images/Screenshot%202026-06-09%20011120.png)

### Roles & Permissions
Visual RBAC matrix across six roles and eight privileged capabilities.

![Roles and Permissions](src/Images/Screenshot%202026-06-09%20011140.png)

### Workflows
Automation monitoring with triggers, run history, success rates, and run/pause controls.

![Workflows](src/Images/Screenshot%202026-06-09%20011154.png)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [System Design](#system-design)
- [Domain Model & Database Schema](#domain-model--database-schema)
- [API Documentation (Target Contract)](#api-documentation-target-contract)
- [Project Structure](#project-structure)
- [Key Workflows](#key-workflows)
- [Screens & Modules](#screens--modules)
- [Security](#security)
- [Performance Optimizations](#performance-optimizations)
- [Scalability](#scalability)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Why This Project Stands Out](#why-this-project-stands-out)

---

## Overview

### The Problem

Fast-growing companies accumulate a sprawl of internal tools: a refund console here, a user-admin script there, a spreadsheet for approvals, a Slack channel for alerts, and tribal knowledge for everything else. This creates **operational drag, inconsistent governance, and audit gaps**. Support agents wait on engineers for one-off database edits; finance approves refunds without risk context; security learns about suspicious logins after the fact.

**AdminAI** consolidates these internal operations into a single, opinionated control plane — and layers **AI assistance** on top so operators can query records in natural language, get risk-aware approval recommendations, and summarize incidents without writing SQL.

### Business Value

| Outcome | How AdminAI delivers it |
| --- | --- |
| **Faster operations** | One console for users, approvals, data, workflows, and alerts — no tool-switching. |
| **Governance & compliance** | Every privileged action is captured in an immutable audit log with actor, resource, IP, and status. |
| **AI leverage** | Natural-language data queries, AI approval recommendations, and automated record summaries reduce manual triage. |
| **Revenue protection** | Risk-scored approval queue surfaces high-impact refunds and discounts before they're rubber-stamped. |
| **Vendor consolidation** | Integration hub replaces a patchwork of point tools (warehouse, payments, support, CRM). |

### Target Users

- **Operations & RevOps teams** managing day-to-day account, refund, and discount decisions.
- **Support leads** handling escalations, SLA risks, and account actions.
- **Finance & compliance** reviewing high-value approvals and exports.
- **Security teams** monitoring suspicious activity and audit trails.
- **Platform/admin owners** managing roles, permissions, and integrations.

### Key Differentiators

- **AI-native, not AI-bolted-on** — every module exposes contextual AI (summaries, recommendations, NL to SQL).
- **Retool/Superblocks-class UX** without the per-seat lock-in — owned, themeable, and extensible.
- **Audit-first design** — observability and accountability are first-class, not an afterthought.
- **Environment-aware** — Production / Staging / Sandbox switching is built into the shell.

---

## Features

### Core Features

- **Operations Dashboard** — KPI cards (users, pending approvals, failed jobs, revenue impact), time-series admin-action and ticket-volume charts, pending-approval snapshot, live activity timeline, and a consolidated system-alerts feed.
- **User Management** — searchable, filterable user directory with create-user modal and a detail drawer supporting password reset, suspension, and impersonation flows.
- **Data Explorer** — Retool-style multi-entity browser (Customers, Orders, Payments, Tickets, Events, Logs) with tabbed navigation, column-aware tables, record drawers, and CSV export.
- **Approval Queue** — unified review surface for refunds, discounts, data exports, and account actions with reviewer comments and approve / reject / request-info actions.
- **Workflows** — monitoring for automation flows: triggers, run history, success rates, step counts, and run/pause controls.
- **Alerts & Incidents** — severity-ranked operational warnings (failed jobs, API issues, SLA risks, suspicious activity) with incident creation.
- **Audit Logs** — chronological record of every privileged action with actor, resource, IP, status, and date filtering.
- **Integrations Hub** — connector cards for databases, warehouses, payments, CRM, and support tools with live connection status and sync health.

### Advanced Features

- **Environment switcher** (Production / Staging / Sandbox) wired into global state via the topbar.
- **Composable UI primitives** — reusable `DataTable`, `Modal`, `Drawer`, `Badge`, and `PageHeader` components drive a consistent design language across every screen.
- **Semantic status tokens** — a single `toneFor()` mapper turns domain values (risk, severity, status) into consistent color semantics platform-wide.
- **Global command-style search** bar in the application shell.
- **Non-blocking toast notifications** via `sonner` for action feedback.

### AI Features

- **AI Copilot** — conversational assistant for internal ops: query records, summarize failed jobs, cross-reference customers with overdue invoices, and **draft approval/rejection notes**, with **generated SQL preview** so operators see exactly what would run.
- **AI Insights on the Dashboard** — anomaly callouts (e.g. "refund requests 42% above baseline") with prioritized, revenue-aware recommendations.
- **AI Record Summaries** — one-click natural-language summaries of users and customer accounts in detail drawers.
- **AI Approval Recommendations** — risk-aware guidance ("manual review before approval") attached to high-impact requests.
- **AI governance controls** — toggles to require human approval for AI actions, enable summaries, and enable anomaly detection.

### Admin Features

- **Roles & Permissions matrix** — visual permission grid across six roles (Super Admin to Viewer) and granular capabilities (view/edit/delete users, approve requests, view audit logs, manage integrations, export data, use AI Copilot).
- **Organization settings** — org name, default timezone, and theming.
- **API key management** — masked keys with rotation.
- **Data retention controls** — configurable audit-log retention.
- **Theme controls** — Light Enterprise / Dark Console / System Default.

### Analytics Features

- **Time-series visualizations** — area chart for admin actions over time, bar chart for ticket volume by category (Recharts, responsive).
- **KPI tiles** with trend deltas and directional context.
- **Customer health scoring** surfaced in the Data Explorer.
- **Workflow success-rate analytics** per automation flow.

### Security Features

- **Immutable audit trail** capturing actor, action, resource, IP address, status, and timestamp.
- **Risk scoring** on users and approval requests (Low / Medium / High).
- **Suspicious-activity alerting** (e.g. unusual admin login detection).
- **Human-in-the-loop AI** — explicit setting to require human approval for AI-initiated actions.
- **Authenticated route guarding** — all application routes are gated behind authentication.

---

## Architecture

### High-Level

AdminAI is a **single-page application (SPA)** built on React 18 and Vite, organized around a **layered, separation-of-concerns architecture**: a presentation layer of composable components, a centralized client state store, a routing/navigation layer with auth guards, and a **data/service abstraction** that today resolves against typed mock data and is designed to swap to live HTTP/GraphQL services with no UI changes.

```
┌─────────────────────────────────────────────────────────┐
│                     Presentation Layer                    │
│   Pages (12)  ·  Layout Shell  ·  Reusable UI Primitives  │
├─────────────────────────────────────────────────────────┤
│              Routing & Navigation (React Router)          │
│        Auth-guarded routes  ·  Nested layout outlet       │
├─────────────────────────────────────────────────────────┤
│              Client State (Zustand store)                 │
│      auth · current user · active environment             │
├─────────────────────────────────────────────────────────┤
│         Data / Service Layer (swappable adapter)          │
│   CURRENT: typed mock data    TARGET: REST/GraphQL API    │
└─────────────────────────────────────────────────────────┘
```

### Frontend Architecture

- **Component model:** Function components + hooks throughout. Local UI state (`useState`) for ephemeral concerns (open drawer, selected row, chat messages); global state via Zustand for cross-cutting concerns (auth, user, environment).
- **Routing:** `react-router-dom` with a protected parent route — unauthenticated users are redirected to `/login`; an authenticated `MainLayout` renders the sidebar/topbar shell and an `<Outlet/>` for the active page.
- **Design system:** A small set of primitives (`PageHeader`, `DataTable`, `Modal`, `Drawer`, `Badge`) compose every page, enforcing visual and behavioral consistency. Styling is a single themeable CSS layer driven by **CSS custom properties** (design tokens) with a glassmorphism-inspired enterprise aesthetic and full responsive breakpoints.
- **Iconography & charts:** `lucide-react` for icons, `recharts` for responsive data visualization.

### Backend Architecture *(Target Reference)*

The UI is intentionally backend-agnostic. The reference backend is a **stateless API tier** (Node/Express, NestJS, or equivalent) exposing REST/GraphQL resources for users, approvals, workflows, audit logs, integrations, and AI endpoints, fronted by an API gateway handling authN/Z, rate limiting, and request shaping. The current mock service layer mirrors these resource shapes 1:1, so adoption is a matter of replacing the data adapter.

### Database Architecture *(Target Reference)*

A relational store (PostgreSQL) is the system of record for transactional entities (users, approvals, workflows, audit logs), complemented by an analytics warehouse (Snowflake / BigQuery) for reporting and an event/log store for high-volume audit and activity streams. Entity shapes are derived directly from the mock data contracts documented below.

### Service Layer Architecture

The client never talks to data sources directly — it talks to a **service abstraction**. Today that abstraction returns deterministic mock data; in production it becomes typed API clients with caching, retries, and error normalization. This single seam is what makes the frontend portable across backends.

---

## Technology Stack

| Layer | Technology | Notes |
| --- | --- | --- |
| **Frontend** | React 18, JSX, CSS custom properties | Function components + hooks, token-driven theming |
| **Build / Tooling** | Vite (`@vitejs/plugin-react`) | Lightning-fast HMR, ESM-native, optimized production bundles |
| **Routing** | React Router 6 | Nested routes, auth-guarded layout, programmatic navigation |
| **State Management** | Zustand | Minimal, hook-based global store (auth, user, environment) |
| **Data Visualization** | Recharts | Responsive area & bar charts |
| **Icons** | lucide-react | Consistent, tree-shakeable icon set |
| **Animation** | Framer Motion | Declarative UI transitions |
| **Notifications** | Sonner | Rich toast notifications |
| **Dates** | date-fns | Lightweight date utilities |
| **Backend** *(target)* | Node.js (Express / NestJS) | Stateless REST/GraphQL API tier |
| **Database** *(target)* | PostgreSQL | System of record for transactional data |
| **Data Warehouse** *(target)* | Snowflake / BigQuery | Analytics & reporting |
| **Authentication** *(target)* | OIDC / JWT + RBAC | SSO-ready, role-based access control |
| **AI Services** *(target)* | Claude (Anthropic) | NL to SQL, summaries, approval recommendations |
| **Cloud Services** *(target)* | Stripe, HubSpot, Zendesk, Slack | Payments, CRM, support, alerting connectors |
| **DevOps** *(target)* | Docker, GitHub Actions, Vercel/Netlify/S3+CDN | CI/CD and static hosting |
| **Monitoring** *(target)* | Audit log pipeline, anomaly detection, alerting | Built-in audit + alerts modules |

> Dependency manifest (`package.json`): `react`, `react-dom`, `react-router-dom`, `zustand`, `recharts`, `lucide-react`, `framer-motion`, `sonner`, `date-fns`, `vite`, `@vitejs/plugin-react`.

---

## System Design

```
        ┌──────────┐
        │   User   │   Operator / Admin / Support / Finance / Security
        └────┬─────┘
             │  interacts with browser SPA
             ▼
        ┌─────────────────────────────────────────────┐
        │              Frontend (React SPA)             │
        │  Auth guard → MainLayout shell → Page view    │
        │  Local UI state + Zustand global state        │
        └────┬──────────────────────────────────────────┘
             │  service-layer calls (typed)
             ▼
        ┌─────────────────────────────────────────────┐
        │           API Layer  (target)                 │
        │  Gateway: authN/Z · rate limit · validation   │
        └────┬──────────────────────────────────────────┘
             │
             ▼
        ┌─────────────────────────────────────────────┐
        │         Business Logic  (target)              │
        │  Approval rules · risk scoring · workflow      │
        │  engine · AI orchestration · audit emitters    │
        └────┬──────────────────────────────────────────┘
             │
             ▼
        ┌─────────────────────────────────────────────┐
        │             Data Stores  (target)             │
        │  PostgreSQL · Warehouse · Event/Log store      │
        └─────────────────────────────────────────────┘
```

**Layer responsibilities:**

1. **User** — initiates every action through an authenticated, role-scoped session.
2. **Frontend** — guards routes, renders the shell + active module, manages client state, and calls the service layer. Owns all presentation and interaction logic.
3. **API Layer** *(target)* — authenticates and authorizes requests, validates input, applies rate limits, and routes to business logic.
4. **Business Logic** *(target)* — enforces approval policies, computes risk scores, runs workflow automations, orchestrates AI calls, and emits audit events for every privileged operation.
5. **Database** *(target)* — persists the system of record, feeds the analytics warehouse, and retains the immutable audit/event stream.

---

## Domain Model & Database Schema

The following entities are derived directly from the application's data contracts (`src/data/mockData.js`). They define the target persistence schema.

### Entities

**User** — internal admin/operator account
| Field | Type | Example |
| --- | --- | --- |
| `id` | PK (string) | `USR-1001` |
| `name`, `email` | string | `Sarah Lee`, `sarah@adminai.io` |
| `role` | FK → Role | `Super Admin` |
| `department` | string | `Operations` |
| `status` | enum | `Active` · `Pending` · `Suspended` |
| `lastLogin` | timestamp | `12 minutes ago` |
| `risk` | enum | `Low` · `Medium` · `High` |
| `created` | date | `Jan 12, 2026` |

**Customer** — managed customer account
| Field | Type | Example |
| --- | --- | --- |
| `id` | PK | `CUST-1001` |
| `name`, `email` | string | `Acme Health` |
| `plan` | enum | `Enterprise` · `Business` · `Starter` |
| `status` | enum | `Active` · `At Risk` · `Trial` |
| `mrr` | money | `$42,000` |
| `health` | int (0–100) | `82` |

**Approval** — request requiring review
| Field | Type | Example |
| --- | --- | --- |
| `id` | PK | `APR-4421` |
| `type` | enum | `Refund` · `Discount` · `Data Export` · `Account Suspension` |
| `requestedBy` | FK → User | `Omar Khan` |
| `customer` | FK → Customer | `Acme Health` |
| `amount` | string/money | `$12,400` |
| `risk` | enum | `Low` · `Medium` · `High` |
| `status` | enum | `Pending` · `Approved` · `Rejected` |
| `owner` | FK → User | `Sarah Lee` |

**Workflow** — automation flow
| `name` · `status` (Running/Paused) · `trigger` · `owner` · `lastRun` · `success` (%) · `steps` (int) |

**AuditLog** — immutable privileged-action record
| `time` · `actor` (FK→User) · `action` · `resource` · `ip` · `status` (Success/Review/Failed) |

**Alert** — operational warning
| `title` · `severity` (Critical/High/Medium) · `source` · `status` (Open/Investigating) · `created` · `owner` |

**Integration** — external connector
| `name` · `status` (Connected/Error) · `lastSync` · `errors` (int) |

**Role / Permission** — RBAC primitives (6 roles × 8 permissions matrix)

### Relationships

```
User (1) ──< (N) Approval            User (1) ──< (N) AuditLog
Customer (1) ──< (N) Approval        Workflow (1) ──< (N) AuditLog (via runs)
Role (1) ──< (N) User                Role (M) ──< (N) Permission   [matrix]
Integration (1) ──< (N) Alert        Customer (1) ──< (N) Alert
```

---

## API Documentation (Target Contract)

> The UI is built against these resource contracts. The current build resolves them from the mock service layer; production swaps in live endpoints with identical shapes.

| Resource | Method & Path | Description |
| --- | --- | --- |
| **Auth** | `POST /api/auth/login` | Authenticate operator, issue session/JWT |
| | `POST /api/auth/logout` | Invalidate session |
| **Users** | `GET /api/users` | List/filter users |
| | `POST /api/users` | Create internal user |
| | `PATCH /api/users/:id` | Update / suspend / reset password |
| **Roles** | `GET /api/roles` · `PUT /api/roles/:id/permissions` | RBAC matrix management |
| **Data** | `GET /api/data/:entity` | Browse customers/orders/payments/tickets/events/logs |
| | `GET /api/data/:entity/export` | CSV export |
| **Approvals** | `GET /api/approvals` | List approval queue |
| | `POST /api/approvals/:id/decision` | Approve / reject / request info |
| **Workflows** | `GET /api/workflows` · `POST /api/workflows/:id/run` · `POST /api/workflows/:id/pause` | Automation control |
| **Alerts** | `GET /api/alerts` · `POST /api/incidents` | Alerts & incident creation |
| **Audit** | `GET /api/audit-logs` · `GET /api/audit-logs/export` | Immutable action history |
| **Integrations** | `GET /api/integrations` · `POST /api/integrations` | Connector management |
| **AI** | `POST /api/ai/query` | NL query → SQL preview + results |
| | `POST /api/ai/summarize` | Record/incident summary |
| | `POST /api/ai/recommend` | Approval recommendation |

**Example — AI query response shape:**
```json
{
  "answer": "I found 4 matching records. Highest priority: APR-4421 (Acme Health).",
  "sql": "SELECT customer, amount, risk FROM approvals WHERE risk = 'High' ORDER BY created_at DESC;",
  "results": [{ "id": "APR-4421", "customer": "Acme Health", "amount": "$12,400", "risk": "High" }]
}
```

---

## Project Structure

```
ai-internal-admin-dashboard/
├── index.html                     # Vite entry HTML
├── package.json                   # Dependencies & scripts (dev/build/preview)
├── README.md
└── src/
    ├── main.jsx                   # App bootstrap: Router + Toaster + StrictMode
    ├── App.jsx                    # Route table + auth guard
    ├── styles.css                 # Token-driven design system (themeable)
    ├── store/
    │   └── useAppStore.js         # Zustand global store (auth, user, environment)
    ├── data/
    │   └── mockData.js            # Typed mock data / service contracts
    ├── Images/                    # Product screenshots used in this README
    ├── components/
    │   ├── layout/
    │   │   └── MainLayout.jsx     # Sidebar + topbar shell, env switcher, nav
    │   └── common/                # Reusable UI primitives
    │       ├── PageHeader.jsx     # Title/subtitle/actions header
    │       ├── DataTable.jsx      # Generic table w/ badge-aware cells
    │       ├── Modal.jsx          # Centered dialog
    │       ├── Drawer.jsx         # Right-side detail drawer
    │       └── Badge.jsx          # Semantic status badge + toneFor() mapper
    ├── pages/                     # 12 feature screens
    │   ├── Login.jsx              ├── Workflows.jsx
    │   ├── Dashboard.jsx          ├── AICopilot.jsx
    │   ├── Users.jsx              ├── Alerts.jsx
    │   ├── Roles.jsx              ├── AuditLogs.jsx
    │   ├── DataExplorer.jsx       ├── Integrations.jsx
    │   ├── Approvals.jsx          └── Settings.jsx
    └── scripts/
        └── backfill-history.mjs   # Repo automation utility (git history tooling)
```

**Responsibilities:** `store/` owns global state; `data/` owns the swappable service contract; `components/common/` owns the reusable design system; `components/layout/` owns the app shell; `pages/` owns feature surfaces; `scripts/` holds operational tooling.

---

## Key Workflows

### Authentication Flow
```
/login → submit credentials → store.login() sets isAuthenticated
   → redirect to "/" → MainLayout renders (shell + nav)
   → unauthenticated access to any route → <Navigate to="/login">
```
A demo login is provided for instant preview. All twelve application routes sit behind the authenticated parent route.

### Main Business Workflow — Approval Review
```
Operator opens Approval Queue
   → risk-scored requests rendered in DataTable
   → click request → Modal with full context + AI recommendation
   → reviewer adds comment → Approve / Reject / Request More Info
   → (target) decision persisted + audit event emitted
```

### Data Processing Workflow — Data Explorer
```
Select entity tab (Customers/Orders/Payments/Tickets/Events/Logs)
   → filter & search → DataTable renders records
   → click row → Drawer with details + AI record summary + related activity
   → Export CSV / Generate AI Summary
```

### Admin Workflow — Users & Roles
```
User Management → Add User (Modal) → row inserted optimistically
   → click user → Drawer (reset password / suspend / AI summary)
Roles & Permissions → toggle capability per role in the permission matrix
```

### AI Workflow — Copilot
```
Operator selects a suggested prompt or types a question
   → message appended → AI responds with answer + SQL preview
   → operator can act on surfaced records
Governance: "Require human approval for AI actions" gates execution
```

---

## Screens & Modules

| Module | Route | What it does |
| --- | --- | --- |
| **Login** | `/login` | Branded sign-in with feature highlights and demo login |
| **Operations Dashboard** | `/` | KPIs, action/ticket charts, AI insights, approvals & alerts snapshot |
| **User Management** | `/users` | Directory, create-user modal, detail drawer, suspend/reset |
| **Roles & Permissions** | `/roles` | 6×8 RBAC permission matrix |
| **Data Explorer** | `/data` | Multi-entity browser with AI summaries & CSV export |
| **Approval Queue** | `/approvals` | Risk-scored review with AI recommendations |
| **Workflows** | `/workflows` | Automation monitoring, triggers, run/pause |
| **AI Copilot** | `/copilot` | Conversational ops assistant + SQL preview |
| **Alerts** | `/alerts` | Severity-ranked operational alerts & incidents |
| **Audit Logs** | `/audit-logs` | Immutable action history with filters & export |
| **Integrations** | `/integrations` | Connector status & sync health |
| **Settings** | `/settings` | Org, AI/security toggles, API keys, retention, theme |

---

## Security

- **Authentication** — session-based auth guard; all functional routes require an authenticated session; unauthenticated requests redirect to `/login`. *(Target: OIDC/SSO + JWT.)*
- **Authorization** — role-based access control via a six-role permission matrix governing eight privileged capabilities.
- **Input validation** — structured forms with typed fields. *(Target: server-side schema validation at the API gateway.)*
- **Data protection** — masked secrets (API keys shown as `sk_live_…••••`), key rotation, configurable audit-log retention.
- **Secure API design** *(target)* — gateway-enforced authN/Z, rate limiting, least-privilege scopes, and request validation.
- **Accountability** — immutable audit log records actor, action, resource, IP, status, and timestamp for every privileged operation.
- **AI safety** — human-in-the-loop toggle requires human approval for AI-initiated actions; anomaly detection flags suspicious logins.

---

## Performance Optimizations

- **Code splitting & lazy loading** — Vite's ESM-native build enables route-level splitting; heavy modules can be lazily imported per route.
- **Tree-shaking** — `lucide-react` and modular imports keep the bundle lean.
- **Responsive charts** — `ResponsiveContainer` avoids layout thrash and re-renders only on resize.
- **Minimal global state** — Zustand selectors subscribe components to only the slices they use, preventing unnecessary re-renders.
- **Token-driven CSS** — a single custom-property-based stylesheet avoids runtime CSS-in-JS overhead.
- **Caching & query optimization** *(target)* — HTTP caching, indexed queries, and warehouse offload for analytics.
- **Background jobs & async processing** *(target)* — workflow automations and AI calls run asynchronously off the request path.

---

## Scalability

| Scale | Strategy |
| --- | --- |
| **To 10,000 users** | Static SPA on CDN + horizontally scalable stateless API; single primary PostgreSQL with read replicas; basic caching. |
| **To 100,000 users** | API autoscaling behind a gateway; connection pooling; Redis caching; analytics offloaded to the warehouse; audit/events to a dedicated log store; CDN edge caching of static assets. |
| **Enterprise workloads** | Multi-region deployment, database sharding/partitioning by tenant, event-driven workflow engine, queue-based AI orchestration with rate limiting, SSO/SCIM provisioning, per-tenant data isolation, and full observability (metrics, traces, audit pipeline). |

The frontend is **stateless and CDN-deployable** today, which means horizontal scaling of the UI is essentially free — the scaling story lives almost entirely in the (swappable) backend tier.

---

## Installation

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone
git clone https://github.com/hasnatmoham-ux/Ai-Admin-Dashboard.git
cd ai-internal-admin-dashboard

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173**. Use the **demo login** (prefilled credentials) to enter the dashboard.

---

## Environment Variables

The current build runs entirely client-side and requires **no environment variables**. The variables below document the configuration surface for the target backend integration.

| Variable | Description | Example |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Base URL of the backend API | `https://api.adminai.io` |
| `VITE_AUTH_DOMAIN` | OIDC/SSO issuer domain | `auth.adminai.io` |
| `VITE_AI_PROVIDER` | AI provider identifier | `anthropic` |
| `ANTHROPIC_API_KEY` *(server)* | API key for AI services (Claude) | `sk-ant-…` |
| `DATABASE_URL` *(server)* | PostgreSQL connection string | `postgres://…` |
| `WAREHOUSE_URL` *(server)* | Snowflake/BigQuery connection | `snowflake://…` |
| `STRIPE_API_KEY` *(server)* | Payments connector | `sk_live_…` |
| `SLACK_WEBHOOK_URL` *(server)* | Alert delivery | `https://hooks.slack.com/…` |

> Vite exposes only variables prefixed with `VITE_` to the client; server-only secrets must never be `VITE_`-prefixed.

---

## Local Development

| Task | Command |
| --- | --- |
| **Install** | `npm install` |
| **Develop** (HMR, host `0.0.0.0`) | `npm run dev` |
| **Build** (production bundle) | `npm run build` |
| **Preview** (serve the build) | `npm run preview` |
| **Production** | Serve the `dist/` output from any static host/CDN |

> Testing is not yet wired up. The recommended stack is **Vitest + React Testing Library** for unit/component tests and **Playwright** for end-to-end flows (see [Future Enhancements](#future-enhancements)).

---

## Deployment

The application builds to a **static, framework-free bundle**, making it trivially deployable:

```bash
npm run build      # → dist/
```

1. **Static hosts (recommended):** Deploy `dist/` to **Vercel**, **Netlify**, **Cloudflare Pages**, or **S3 + CloudFront**. Configure an SPA rewrite (all paths → `index.html`) so client-side routing works on refresh.
2. **Containerized:** Multi-stage Docker build (Node build stage → Nginx serve stage) for self-hosted/Kubernetes environments.
3. **CI/CD:** GitHub Actions pipeline — install → lint/test → build → deploy on push to `main`.

---

## Future Enhancements

1. **Live backend integration** — replace the mock service layer with REST/GraphQL clients (typed, with caching & retries).
2. **Enterprise SSO** — OIDC/SAML with SCIM user provisioning and JIT roles.
3. **Production AI orchestration** — wire the Copilot to Claude with guardrails, NL-to-SQL execution sandboxing, and cost controls.
4. **Test suite** — Vitest + React Testing Library + Playwright with CI gates and coverage thresholds.
5. **True theming** — implement the Dark Console theme and persist user preference.
6. **Workflow builder** — drag-and-drop automation designer with versioning and dry-run mode.
7. **Advanced analytics** — cohort analysis, customer-health prediction, and anomaly forecasting.
8. **Field-level authorization** — column/row-level permissions in the Data Explorer.
9. **Multi-tenancy & data isolation** — per-tenant schemas, region pinning, and tenant-scoped audit.
10. **Full observability** — OpenTelemetry traces, metrics dashboards, and an alerting pipeline feeding the Alerts module.

---

## Why This Project Stands Out

- **Production-shaped architecture from day one.** The swappable data/service seam, auth-guarded routing, centralized state, and reusable design system are the same patterns that scale to real backends — the project is structured for production, not just for a demo.
- **Separation of concerns done right.** State, services, design system, layout, and feature pages are cleanly partitioned. Every page is composed from the same primitives, so the codebase stays DRY and consistent as it grows.
- **AI-native product thinking.** AI isn't a gimmick tab — it's woven contextually into dashboards, approvals, data records, and a Copilot with SQL transparency and human-in-the-loop governance. This reflects how modern internal tooling is actually evolving.
- **Governance and accountability as first-class concerns.** Audit logging, RBAC, risk scoring, and AI-action gating show an engineer who understands that internal tools live or die on trust and compliance.
- **Pragmatic, honest engineering.** Building a high-fidelity frontend against typed contracts *before* committing backend infrastructure is a deliberate, senior-level decision: it de-risks UX, accelerates stakeholder feedback, and keeps the backend swappable.
- **Polish that signals craft.** A token-driven design system, responsive layouts, semantic status theming, and a coherent information architecture across twelve modules demonstrate attention to detail that recruiters, CTOs, and enterprise clients notice immediately.

> This repository is a demonstration of how a senior engineer scopes, structures, and presents an internal platform — clear architecture, clean abstractions, an AI-native product vision, and an honest, well-documented path from prototype to production.

---

## License

Released under the **MIT License**.

<div align="center">

**Built with React · Vite · Zustand · Recharts**

</div>
