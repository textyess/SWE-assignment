# Take‑Home Assignment — **Feedback Collector for SaaS Trial Users**

**Timebox:** 2–3 hours total (hard cap).

**Tech:** Node.js (Express, TypeScript) for backend; React + Next.js (TypeScript) for frontend.

**Repo shape (required):** One GitHub repo with exactly two folders at root:

```
/backend   # Express + TypeScript API
/frontend  # Next.js + TypeScript app
```

**AI tooling (required):** Please use AI coding assistants (e.g., Cursor, Copilot, ChatGPT) to speed up. In your README, add a short note on *where/how* you used AI and any prompts that were especially helpful.

---

## Goal

Build a minimal product to collect structured feedback from trial users and provide a lightweight internal view with a summary. Think of a tiny slice of a system like **TextYess** would use to measure early product fit.

---

## User Stories (MVP)

1. **As a trial user**, I can submit feedback with:

   * Rating (1–5 stars, required)
   * Short comment (required, max 280 chars)
   * Email (optional)
2. **As a teammate**, I can see:

   * A simple dashboard with the **average rating**, **total submissions**, and **rating distribution** (1–5)
   * A **paginated list** of feedback (most recent first), with quick filters (e.g., by min rating)

> Keep it tiny, fast, and shippable within 2–3 hours.

---

## Requirements

### Backend (Express + TypeScript)

* Expose these endpoints (JSON):

  * `POST /api/feedback` &rarr; creates the feedback and returns it

  * `GET /api/feedback` &rarr; returns all the feedbacks with pagination

  * `GET /api/feedback/summary` &rarr; returns summary analytics of feedbacks

    * **Returns**: `{ count: number, avgRating: number, distribution: {1: number,2: number,3: number,4: number,5: number}, lastFeedbackAt?: ISOString }`
* **Validation**: Use any validation approach (e.g., Zod, class-validator, custom) to enforce payload shape & limits.
* **Storage**: To stay within time — you may use **in‑memory** storage or a simple **JSON file**. (Bonus points section has a DB option.)
* **Type safety**: Define a `Feedback` TypeScript interface used by controllers + shared types.



### Frontend (Next.js + TS)

* Pages:

  * `/feedback` — Submit form with client-side validation; on success, show a friendly confirmation (inline or toast).
  * `/dashboard` — Show **summary** (avg, total, distribution) and **list**:

    * Pagination controls (prev/next)
    * Filter: min rating (e.g., dropdown)
* Fetch from the backend endpoints above. (Hardcode the API URL via `.env.local`.)
* Keep UI simple and clean (Tailwind optional). Accessibility basics (labels, button text) appreciated.

**Suggested folder structure:**


## Getting Started (what we’ll run)

### Backend

```bash
cd backend
npm i
npm run dev    # or: npm run start
# default: http://localhost:4000
```

### Frontend

```bash
cd frontend
npm i
npm run dev
# default: http://localhost:3000
```


Include a short **README** at the repo root with:

* How to run both apps
* Notes on trade‑offs & anything unfinished



## Nice-to‑Haves ( not mandatory )

* **Persistence** via SQLite + Prisma (or Mongo) instead of in‑memory/file
* **Minimal admin auth** (e.g., `ADMIN_TOKEN` Bearer for `/dashboard` data)
* **Add sentiment with AI**: Add sentiment analysis on feedback by making a simple tool call to an LLM.


---


Good luck and have fun! 🎯
