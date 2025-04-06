![PaceMaker Logo](./public/pacemakerLogo.png)
# PaceMaker Web
Desktop version of the PaceMaker productivity timer. Tracks work time by categorized tasks, has a break "banking" system, and stores everything locally.
---

## 📃 Features

- ⏱ Track task sessions that can be categorized
- 🧠 Customizable break banking system (e.g., 45 mins work = 15 mins break)
- 📂 Basic persistence with `localStorage`
- 🗃 Export/import data via JSON
- 🧱 Built with Next.js, Tailwind, and shadcn/ui
- 📊 Useful stats

---

## 🏧 Break Banking System

- Work X minutes → Earn X/3 minutes of break (the ratio can be changed)
  - Include a longer amount after longer times -> +20min after 2.5 hours
- Take a break too early or too long → You can go into **break debt**
- Work back-to-back sessions → Stack break time
- You manage it. The app doesn’t stop you, but it keeps score

It's flexible. You decide how strict to be.

---

## 💾 Data Persistence

- Uses `localStorage`
- Survives refreshes and restarts
  - If you clear your browser cache, you will lose your data, hence...
- You can export and import your data as a JSON file for backup.

---
## 🚘 Roadmap

### 🔧 Phase 1: Core Mechanics
> The bare minimum for a usable and functional productivity pacing system.

- [ ] 🗂 Category management
  - [ ] Add, rename, delete categories
- [ ] 📝 Task system (per category)
  - [ ] Add named tasks under a category
  - [ ] Track time per task
- [ ] ⏱ Timer control
  - [ ] Start/stop work sessions
- [ ] 📟 Active session display
  - [ ] Show current task in progress
  - [ ] Real-time session timer
- [ ] 🧠 Break banking logic
  - [ ] Earn break time (default: work ÷ 3)
  - [ ] Accumulate break debt if breaks are abused
- [ ] 🧮 Break UI
  - [ ] Visual countdown for break time
  - [ ] Show debt/overflow clearly

---

### ⚙️ Phase 2: Data & Settings
> Control over how time data is earned, stored, and visualized.

- [ ] ⚖️ Custom break ratios
  - [ ] Override default work:break ratio per task
- [ ] 💾 Local data persistence
  - [ ] Save state in `localStorage`
  - [ ] Auto-load data on startup
  - [ ] Manual time adjustments
- [ ] 📁 JSON backup support
  - [ ] Export full state to `.json`
  - [ ] Import from file (merge or overwrite)
- [ ] 📊 Stats dashboard
  - [ ] Time tracked per task/category
  - [ ] Toggle views: daily, weekly, all-time
- [ ] 🌙 Light/Dark theme toggle
  - [ ] Manual toggle
  - [ ] Optionally follow OS setting

---

### 🌀 Phase 4: Future Ideas
> Features that aren't essential but could give the app extra depth, flexibility, or novelty.

- [ ] 🎯 Long-term goals
  - [ ] Weekly targets per task or category (e.g. 10 hrs/week)
  - [ ] Light reminders (not annoying)
- [ ] 💻 PWA Support
  - [ ] Add to desktop from browser
  - [ ] Works offline after install
- [ ] 🧩 Modular presets
  - [ ] Quick switch between setups (e.g., “Work Day”, “Weekend Studio”, “Burnout Mode”)
- [ ] 🎚 Custom time blocks
  - [ ] Choose fixed-length session timers (not just start/stop)
- [ ] 🧘 Soft focus mode
  - [ ] Option to temporarily disable distractions or UI noise
- [ ] 🛰 Offline-first + sync layer (optional)
  - [ ] Still local-first, but add option to sync across devices using a local network or Dropbox-style service

---



Created by Kent Campbell. April 6, 2025.
