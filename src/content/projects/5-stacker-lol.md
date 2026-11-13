---
title: "5 Stacker LoL"
summary: "An end-to-end squad coordination platform and performance analytics engine for League of Legends premade teams, featuring automated Discord queue management, Riot API telemetry ingestion, and a responsive Hextech web dashboard."
category: "Software & Systems"
tags: ["League of Legends", "Riot Games API", "Discord Bot", "Data Analytics", "Python", "Hextech Dashboard"]
year: "2026"
status: "Active"
repoUrl: "https://github.com/jgdclima/5-stacker-lol"
demoUrl: "https://github.com/jgdclima/5-stacker-lol"
hasWriteup: true
featured: true
order: 1
---

## Overview

Playing League of Legends as an organized five-player team is an entirely different game compared to Solo/Duo queue. Most players agree that the most engaging way to experience League is alongside friends. However, organizing regular 5-stacks presents persistent logistical hurdles: coordinating conflicting player schedules, balancing multi-role preferences, handling bench substitutes when more than five people want to play, and finding meaningful team analytics that aren't diluted by random solo-queue matches.

**5 Stacker LoL** solves these pain points through a unified two-part platform:
1. **An Intelligent Discord Coordination Bot**: Automates lobby scheduling, 5-player quorum tracking, queue mode detection (Ranked 5s vs. Ranked Flex), and real-time post-game match summaries within a dedicated, noise-free community channel.
2. **An Interactive Hextech Web Dashboard**: A zero-dependency, responsive web application that visualizes squad telemetry, player masteries, holistic performance ratings, and pairwise chemistry leaderboards across the team's match history.

---

## Interactive Project Dashboard

Below is the live embedded project dashboard container. When deployed, it provides an interactive view of live sessions, roster stats, synergy matrices, and performance formulas.

<div class="dashboard-wrapper">
  <div class="dashboard-header">
    <div class="dashboard-status">
      <span class="status-dot"></span>
      <span class="status-label">Live Telemetry · 5 Stacker LoL</span>
    </div>
    <div class="dashboard-actions">
      <!-- Live dashboard URL can be linked here once hosted (e.g. GitHub Pages or custom web server) -->
      <a href="#dashboard-embed" class="dashboard-pill" title="Dashboard View Active">Interactive View</a>
    </div>
  </div>
  <div class="dashboard-frame-container">
    <iframe
      id="dashboard-embed"
      src="about:blank"
      title="5 Stacker LoL Analytics Dashboard"
      class="dashboard-iframe"
      loading="lazy"
      allowfullscreen
    ></iframe>
    <div class="dashboard-placeholder" id="dashboard-fallback">
      <div class="placeholder-content">
        <div class="placeholder-icon">🛡️</div>
        <h3>Hextech Squad Dashboard Preview</h3>
        <p>Interactive dashboard embed area. The companion client generates an offline-ready, responsive single-file dashboard visualizing live session state, pairwise chemistry ratings, and match telemetry directly from the squad's data store.</p>
        <div class="preview-metrics-grid">
          <div class="metric-card">
            <span class="metric-label">Squad Win Rate</span>
            <span class="metric-val text-green">64.7%</span>
            <span class="metric-sub">Ranked Flex & 5s</span>
          </div>
          <div class="metric-card">
            <span class="metric-label">Top Synergy Pair</span>
            <span class="metric-val text-gold">Mid + Jungle</span>
            <span class="metric-sub">81.2 Rating (S-Tier)</span>
          </div>
          <div class="metric-card">
            <span class="metric-label">Objective Control</span>
            <span class="metric-val">73.8%</span>
            <span class="metric-sub">Grubs, Dragons & Barons</span>
          </div>
          <div class="metric-card">
            <span class="metric-label">Avg Squad Grade</span>
            <span class="metric-val text-green">A+ (76.4)</span>
            <span class="metric-sub">Holistic 6-Pillar Model</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Architecture & Core Capabilities

```
┌────────────────────────────────────────────────────────┐
│               Riot Games Developer API                 │
│      ACCOUNT-V1 (PUUID)  │  MATCH-V5 (Telemetry)       │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│             Discord Coordination Bot & Engine          │
│   • Natural Language Scheduling & Queue Window Rules   │
│   • Living Session Cards & Attached Discord Threads    │
│   • Quorum Management & Bench Auto-Promotion           │
│   • Background Match Polling & Deduplication           │
│   • Holistic 6-Pillar Role/Archetype Rating Engine     │
└──────────────┬──────────────────────────┬──────────────┘
               │                          │
               ▼                          ▼
┌───────────────────────────┐  ┌─────────────────────────┐
│     Discord Community     │  │   Hextech Web Dashboard │
│   • In-place Card Updates │  │   • Zero-Dependency UI  │
│   • Living Synergy Threads│  │   • Live Telemetry View │
│   • 15-Min Queue Alerts   │  │   • Formula Visualizer  │
│   • In-App GitHub Feedback│  │   • Web Audio Effects   │
└───────────────────────────┘  └─────────────────────────┘
```

### 1. Frictionless Squad Coordination & Channel Lockdown
- **Strict Channel Lockdown (`#5-stackers`) & Role Scoping (`@LOLers`)**: All bot operations, polls, and notifications are strictly confined to a single dedicated Discord channel and restricted to verified squad members. Commands issued elsewhere are silently caught with ephemeral feedback.
- **Natural Language Scheduling**: Organizers schedule sessions with conversational expressions like `/session "Tonight 8:30pm"` or `"Friday 9pm"`. The system automatically determines whether the target time intersects with Riot's weekend **Ranked 5s** tournament draft windows (Friday–Sunday 8:00 PM – 1:00 AM local time) or seamlessly routes to **Ranked Flex (5-stack)**.
- **Dynamic Quorum & Bench Promotion**: Sessions accommodate groups from 2 to 5+ players. When five starters confirm, the bot dispatches an immediate **Lobby Ready** alert. Additional signups (6th to 10th) enter a priority queue as substitutes. If any starter drops out, the highest-priority substitute is instantly auto-promoted into the active roster.
- **Living Cards & Living Threads**: Rather than flooding the channel with new messages for every RSVP or status change, the bot maintains a single persistent **Living Session Card** edited in-place, paired with an attached **Discord Thread** for time-sensitive notifications (such as the 15-minute countdown reminder and match recaps).

### 2. Automated Riot Games Telemetry Pipeline
- **Immutable Account Resolution**: Players link primary and alternate accounts using `/link-riot GameName#TagLine`. The bot resolves IDs via Riot's `ACCOUNT-V1` endpoint into permanent PUUIDs, allowing stats to persist across summoner name changes.
- **Background Ingestion & Caching**: An asynchronous background poller monitors for recently concluded matches across registered squad members using `MATCH-V5`. Completed games with two or more linked squad members are automatically parsed, verified, and locally cached so historical matches are never re-requested.
- **Strict Developer Policy Adherence**: Built specifically for private community play, the system operates entirely within Riot's non-commercial API rate limits (20 req/sec, 100 req/2 min), strictly respecting competitive integrity without providing in-game overlays or live scouting advantages.

### 3. Holistic 6-Pillar Rating Engine
Traditional post-match analysis tools over-index on raw KDA and total damage, often failing to recognize the high-impact contributions of supportive champions, tanks, or split-pushers. 5 Stacker LoL evaluates players through an adaptable **0–100 scoring engine** distributed across six performance pillars:

1. **Combat & KDA Efficiency**: Role-benchmarked kill participation, survival rates, solo kills, and conversion ratios.
2. **Damage & Carry Output**: DPM benchmarked against champion kit archetypes, alongside team damage share.
3. **Objective & Structural Pressure**: Turret plating, split-push structural damage, neutral monster kills (Dragons, Barons, Voidgrubs), and epic monster steals.
4. **Frontline & Durability**: Self-mitigated damage, damage taken per death, and front-line absorption share.
5. **Utility, CC & Team Enablement**: Crowd control score per minute, effective ally shielding/healing, and teammate life-save events.
6. **Vision, Economy & Lane Dominance**: Role-normalized CS and vision score per minute, laning gold/XP differential, and ward takedowns.

#### Dynamic Role (55%) + Champion Archetype (45%) Weighting
Pillar weights are calculated through a dynamic blend of a player's **Assigned Position** (`Top`, `Jungle`, `Mid`, `Bot`, `Support`) and their **Champion Kit Archetype** (`marksman`, `mage`, `assassin`, `splitpusher`, `bruiser`, `tank`, `enchanter`, `catcher`). 

This dynamic weighting ensures that an Enchanter Support (`1/1/24` with 15k healing and elite vision control) or a Splitpush Toplaner (demolishing four towers and holding weakside pressure) can earn an **S+ Grade** and **Match MVP** honors alongside a high-kill Marksman.

### 4. Pairwise Chemistry & Living Synergy Engine
To evaluate long-term teamwork, the platform calculates pairwise chemistry ratings ($0\text{–}100$) across four key map partnerships:
- **Botlane**: Bot Carry + Support
- **Mid + Jungle**: Core 2v2 skirmishers and map playmakers
- **Top + Jungle**: Topside dive and neutral objective synergy
- **Support + Jungle**: Roaming, deep vision control, and cross-map pick potential

$$\text{Synergy Score} = 0.42 \times \text{Bayesian WR} + 0.24 \times \text{Duo Rating} + 0.14 \times \text{Coordination} + 0.20 \times \text{Duo KDA}$$

- **Bayesian Win Rate Smoothing**: Raw win rates are smoothed against a $50\%$ prior over a 5-game ramp ($\min(1.0, \text{games}/5)$), preventing small sample sizes (such as a 2-0 streak) from artificially outranking battle-tested 15-5 partnerships.
- **Position-Specific Coordination**: Tracks joint metric execution (e.g., combined ADC damage conversion and support peeling in botlane, or joint CC pick-kills and neutral monster takes for Mid + Jungle).
- **Living Discord Threads**: Each of the four pairings maintains an auto-updating leaderboard thread in `#5-stackers` where standings, tiers (`S`, `A`, `B`), and dynamic chemistry tags (`2v8 Bot Kingdom`, `Map Terror 2v2`, `Vision & Roam Lords`) update after every recorded match.

### 5. Interactive Hextech Web Dashboard
The project includes a standalone, zero-dependency web dashboard (`web/index.html`) themed with League of Legends' signature Hextech and Piltover aesthetic:
- **Zero-Dependency Architecture**: Crafted in modern semantic HTML5, CSS3 variables, and vanilla JavaScript, enabling it to open directly via `file://` offline, be served from a lightweight local server (`python export_dashboard.py --serve`), or deploy seamlessly to static hosts like GitHub Pages or Nginx.
- **Roster & Match Telemetry**: Displays individual member profiles with linked accounts, match logs with performance badges, and interactive grade filters.
- **Formula Visualizers**: Features interactive sliders allowing players to explore how role weights, performance pillars, and Bayesian priors combine to produce individual and duo ratings.
- **Synthesized Web Audio**: Hextech sound effects (button presses, modal dialogs, tab switches) are synthesized natively in-browser using the Web Audio API without requiring external audio assets.

---

## Engineering Challenges & Insights

- **Eliminating Notification Fatigue in Discord**: Early iterations produced multiple bot messages for every session action, quickly causing channel clutter. Shifting to an **in-place editable Living Card** with ephemeral interactive menus and dedicated threads for ping-worthy events reduced channel message volume by over 80%.
- **Small-Sample Statistical Fairness**: Unlike commercial public analytics platforms processing millions of games, a private 5-stack group accumulates dozens or hundreds of matches. Unadjusted metrics create massive volatility. Introducing Bayesian confidence dampening for win rates and duo ratings ensured reliable leaderboards from game 3 through game 100+.
- **Multi-Role & Kit-Aware Metric Normalization**: Normalizing MOBA statistics across diverse playstyles required decoupling map positions from champion design. Combining 55% assigned role expectations with 45% champion kit archetypes solved the perennial problem of supportive and tank archetypes being systematically undervalued in post-game calculations.

---

## Tech Stack & Tools

- **Backend & Bot Framework**: Python 3.11+, `discord.py` 2.0+ (App Commands, Persistent Views, Dynamic Modals)
- **APIs & Data Ingestion**: Riot Games Developer API (`ACCOUNT-V1`, `MATCH-V5`), Asynchronous Polling & Caching
- **Mathematical Modeling**: Bayesian Win Rate Smoothing, Dynamic Multi-Pillar Weighting Algorithms
- **Frontend & Dashboard**: Vanilla HTML5/CSS3 (Hextech UI Design System), Vanilla ES6+, Web Audio API Synthesizer
- **DevOps & Integration**: GitHub Issues API for automated user feedback, static export pipeline (`export_dashboard.py`), Windows/Linux service relaunching
