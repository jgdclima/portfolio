---
title: "Vereda — Stateful Narrative & Dialogue Prototype"
summary: "A lightweight, declarative narrative scripting prototype exploring condition-based storylets, world-state memory, and pacing controls for text-driven games."
category: "Game Design & Tooling"
tags: ["TypeScript", "Game Design", "Narrative Systems", "State Machines"]
year: "2026"
status: "Active"
repoUrl: "https://github.com/jgdclima"
hasWriteup: true
featured: true
order: 1
---

## Overview

**Vereda** (named after the paths cutting through the Brazilian *sertão* in João Guimarães Rosa's *Grande Sertão: Veredas*) is an experimental narrative architecture prototype designed around **storylets** rather than rigid dialogue trees.

Instead of hardcoding branching graphs that exponentially explode in complexity, Vereda treats narrative beats as self-contained cards gated by world-state predicates (e.g., player knowledge flags, time of day, relationship tension, and location).

## Key Design Goals

1. **Knowledge-Driven Reactivity**: Dialogue options and scene descriptions adapt dynamically to what the player has observed, without brittle chain dependencies.
2. **Plain-Text Authoring**: Writers compose scenes in clean Markdown-like blocks with lightweight frontmatter conditions.
3. **Deterministic Simulation Inspector**: A minimal debug overlay lets designers inspect why specific storylets are currently eligible or locked.

---

*Note: This is a sample project entry in `src/content/projects/vereda-narrative-engine.md`. Set `hasWriteup: false` if you prefer the card to link straight to GitHub.*
