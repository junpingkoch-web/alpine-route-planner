---
description: Add a new lake-hike region to data.js
argument-hint: [region name, canton, lake]
---

Add a new region: $ARGUMENTS

Follow the existing schema in `data.js` exactly: `canton`, `lake`, `name`, `coords`, `departurePier`/`returnPier`, `difficulty`, `elevationGain`, `segments[]`, `food[]`. Keep `segments[]` at 4 entries and `food[]` at 2 entries to match the visual density of existing regions — don't add more or fewer unless asked.

After adding, verify with a cache-busted URL (`?v=N`) — the browser caches `data.js` aggressively and a plain reload won't show the new region.
