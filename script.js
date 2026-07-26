(function () {
  "use strict";

  const LANG_KEY = "alpineRoutePlanner.lang";
  const REGIONS = window.ALPINE_REGIONS || [];

  const i18n = {
    zh: {
      appTitle: "阿尔卑斯路线定制器",
      regionLabel: "选择湖区路线",
      customLabel: "或输入其他瑞士地点（仅天气 + 通用建议）",
      customPlaceholder: "例如 Zermatt、St. Moritz…",
      planBtn: "生成行程",
      planning: "正在获取实时天气与船班…",
      weatherTitle: "今日天气",
      weatherSource: "数据来源：Open-Meteo",
      boatTitle: "湖船班次",
      boatSource: "数据来源：transport.opendata.ch（瑞士公共交通开放数据）",
      timelineTitle: "行程 Timeline",
      posterTitle: "旅程插画海报",
      downloadPoster: "下载海报",
      tipTitle: "温馨小贴士",
      gearTitle: "装备清单",
      foodTitle: "餐饮推荐",
      adLabel: "广告",
      coffeeBtn: "请我喝杯咖啡",
      coffeeTooltip: "喜欢这个工具？请我喝杯咖啡",
      helpTitle: "使用说明",
      helpTip1: "从下拉菜单选择一条精选湖区徒步路线，或输入其他瑞士地点仅查看天气。",
      helpTip2: "天气与湖船班次为实时数据；若接口暂时不可用，会显示提示并使用通用行程模板。",
      helpTip3: "装备清单会根据当天天气（降雨概率、气温、风速）自动调整。",
      helpTip4: "右上角可随时切换 中文 / EN / DE。",
      disclaimer: "天气与船班数据实时抓取自公开接口，仅供行程规划参考；实际出行请以 SBB/船公司官方时刻表与现场天气为准。",
      customPickLabel: "自定义地点",
      tempLabel: "气温", precipLabel: "降雨概率", windLabel: "风速", sunLabel: "日出/日落",
      difficultyLabel: "难度", elevationLabel: "爬升",
      difficulty_easy: "轻松", difficulty_moderate: "适中", difficulty_hard: "较难",
      boatUnavailable: "暂时无法获取实时船班数据，行程时间为估算。",
      boatFallback: "未能识别专属船只班次，以下为该站点全部班次：",
      nextDepartures: "接下来的班次",
      timeCol: "时间", lineCol: "班次", toCol: "开往",
      startAssumed: "（以下行程以此为起点，实际以现场为准）",
      genericSeg1: "在当地游览 / 徒步",
      genericSeg2: "返程",
      genericNote: "该地点暂无精选路线数据，以上为通用模板 — 建议从下拉菜单选择精选湖区路线以获取完整行程。",
      customNotFound: "未能定位该地点的天气坐标，请检查拼写或从下拉菜单选择精选路线。",
      totalLabel: "预计总时长",
      elevationUnit: "米",
      gear_hikingBoots: "防滑登山鞋", gear_backpack: "轻量背包", gear_waterBottle: "水壶（1.5L 以上）",
      gear_snacks: "行动干粮", gear_sunProtection: "防晒霜 + 遮阳帽", gear_firstAid: "小型急救包",
      gear_phone: "手机（离线地图）", gear_cash: "现金/银行卡（船票、餐饮）",
      gear_rainJacket: "防水冲锋衣", gear_dryBag: "防水袋（保护电子设备）",
      gear_warmLayer: "保暖抓绒/软壳", gear_gloves: "薄手套",
      gear_windbreaker: "防风外套", gear_extraWater: "额外饮水 + 电解质",
      gear_sunglasses: "太阳镜"
    },
    en: {
      appTitle: "Alpine Route Planner",
      regionLabel: "Choose a lake-hike route",
      customLabel: "Or enter another Swiss location (weather + generic tips only)",
      customPlaceholder: "e.g. Zermatt, St. Moritz…",
      planBtn: "Build itinerary",
      planning: "Fetching live weather and boat times…",
      weatherTitle: "Today's weather",
      weatherSource: "Source: Open-Meteo",
      boatTitle: "Lake boat schedule",
      boatSource: "Source: transport.opendata.ch (Swiss public transport open data)",
      timelineTitle: "Itinerary timeline",
      posterTitle: "Illustrated trip poster",
      downloadPoster: "Download poster",
      tipTitle: "Friendly tips",
      gearTitle: "Gear checklist",
      foodTitle: "Food recommendations",
      adLabel: "Advertisement",
      coffeeBtn: "Buy me a coffee",
      coffeeTooltip: "Enjoyed this tool? Buy me a coffee",
      helpTitle: "How to use",
      helpTip1: "Pick a curated lake-hike route from the dropdown, or type another Swiss location for weather only.",
      helpTip2: "Weather and boat times are live; if an API is briefly unavailable a notice appears and a generic template is used instead.",
      helpTip3: "The gear checklist adapts to today's conditions (rain chance, temperature, wind).",
      helpTip4: "Switch 中文 / EN / DE anytime in the top right.",
      disclaimer: "Weather and boat data are fetched live from public APIs for planning purposes only — always check the official SBB / boat operator timetable and on-site conditions before you go.",
      customPickLabel: "Custom location",
      tempLabel: "Temperature", precipLabel: "Rain chance", windLabel: "Wind", sunLabel: "Sunrise/Sunset",
      difficultyLabel: "Difficulty", elevationLabel: "Elevation gain",
      difficulty_easy: "Easy", difficulty_moderate: "Moderate", difficulty_hard: "Hard",
      boatUnavailable: "Live boat data is temporarily unavailable — times below are estimates.",
      boatFallback: "Couldn't isolate boat-only departures; showing all departures from this stop:",
      nextDepartures: "Next departures",
      timeCol: "Time", lineCol: "Line", toCol: "To",
      startAssumed: "(the itinerary below starts from this departure — confirm on-site)",
      genericSeg1: "Explore / hike around the area",
      genericSeg2: "Return",
      genericNote: "No curated route data for this location — showing a generic template. Pick a curated route from the dropdown for a full itinerary.",
      customNotFound: "Couldn't resolve weather coordinates for this location — check the spelling or pick a curated route.",
      totalLabel: "Estimated total duration",
      elevationUnit: "m",
      gear_hikingBoots: "Sturdy hiking boots", gear_backpack: "Lightweight daypack", gear_waterBottle: "Water bottle (1.5L+)",
      gear_snacks: "Trail snacks", gear_sunProtection: "Sunscreen + sun hat", gear_firstAid: "Small first-aid kit",
      gear_phone: "Phone (offline maps)", gear_cash: "Cash/card (boat tickets, food)",
      gear_rainJacket: "Waterproof rain jacket", gear_dryBag: "Dry bag (protect electronics)",
      gear_warmLayer: "Warm fleece/softshell layer", gear_gloves: "Light gloves",
      gear_windbreaker: "Windproof jacket", gear_extraWater: "Extra water + electrolytes",
      gear_sunglasses: "Sunglasses"
    },
    de: {
      appTitle: "Alpen-Routenplaner",
      regionLabel: "Seewanderung auswählen",
      customLabel: "Oder anderen Schweizer Ort eingeben (nur Wetter + allgemeine Tipps)",
      customPlaceholder: "z. B. Zermatt, St. Moritz…",
      planBtn: "Route erstellen",
      planning: "Live-Wetter und Schifffahrplan werden geladen…",
      weatherTitle: "Wetter heute",
      weatherSource: "Quelle: Open-Meteo",
      boatTitle: "Schifffahrplan",
      boatSource: "Quelle: transport.opendata.ch (offene Schweizer ÖV-Daten)",
      timelineTitle: "Reise-Timeline",
      posterTitle: "Illustriertes Reiseposter",
      downloadPoster: "Poster herunterladen",
      tipTitle: "Kleine Tipps",
      gearTitle: "Ausrüstungsliste",
      foodTitle: "Restauranttipps",
      adLabel: "Anzeige",
      coffeeBtn: "Spendier einen Kaffee",
      coffeeTooltip: "Hat dir das Tool geholfen? Spendier einen Kaffee",
      helpTitle: "Bedienung",
      helpTip1: "Wähle eine kuratierte Seewanderung aus der Liste oder gib einen anderen Ort ein (nur Wetter).",
      helpTip2: "Wetter und Schiffszeiten sind live; ist eine Schnittstelle kurz nicht erreichbar, erscheint ein Hinweis und ein generisches Vorlage wird verwendet.",
      helpTip3: "Die Ausrüstungsliste passt sich an die heutigen Bedingungen an (Regenwahrscheinlichkeit, Temperatur, Wind).",
      helpTip4: "Oben rechts jederzeit zwischen 中文 / EN / DE wechseln.",
      disclaimer: "Wetter- und Schiffsdaten stammen live aus offenen Schnittstellen und dienen nur der Planung — bitte vor der Reise den offiziellen SBB-/Schifffahrplan und die aktuelle Wetterlage prüfen.",
      customPickLabel: "Eigener Ort",
      tempLabel: "Temperatur", precipLabel: "Regenwahrscheinlichkeit", windLabel: "Wind", sunLabel: "Sonnenauf-/-untergang",
      difficultyLabel: "Schwierigkeit", elevationLabel: "Höhenmeter",
      difficulty_easy: "Leicht", difficulty_moderate: "Mittel", difficulty_hard: "Anspruchsvoll",
      boatUnavailable: "Live-Schiffsdaten sind gerade nicht verfügbar — Zeiten unten sind geschätzt.",
      boatFallback: "Konnte keine reinen Schiffsabfahrten isolieren; hier alle Abfahrten dieser Haltestelle:",
      nextDepartures: "Nächste Abfahrten",
      timeCol: "Zeit", lineCol: "Linie", toCol: "Nach",
      startAssumed: "(die Route unten startet ab dieser Abfahrt — vor Ort prüfen)",
      genericSeg1: "Gegend erkunden / wandern",
      genericSeg2: "Rückweg",
      genericNote: "Keine kuratierten Routendaten für diesen Ort — generische Vorlage. Wähle eine kuratierte Route aus der Liste für eine vollständige Reiseplanung.",
      customNotFound: "Wetterkoordinaten für diesen Ort nicht gefunden — Schreibweise prüfen oder kuratierte Route wählen.",
      totalLabel: "Geschätzte Gesamtdauer",
      elevationUnit: "m",
      gear_hikingBoots: "Feste Wanderschuhe", gear_backpack: "Leichter Tagesrucksack", gear_waterBottle: "Wasserflasche (1,5L+)",
      gear_snacks: "Wegzehrung", gear_sunProtection: "Sonnencreme + Sonnenhut", gear_firstAid: "Kleines Erste-Hilfe-Set",
      gear_phone: "Handy (Offline-Karten)", gear_cash: "Bargeld/Karte (Schiffsticket, Verpflegung)",
      gear_rainJacket: "Wasserdichte Regenjacke", gear_dryBag: "Packsack (Elektronik schützen)",
      gear_warmLayer: "Warme Fleece-/Softshell-Schicht", gear_gloves: "Leichte Handschuhe",
      gear_windbreaker: "Winddichte Jacke", gear_extraWater: "Zusätzliches Wasser + Elektrolyte",
      gear_sunglasses: "Sonnenbrille"
    }
  };

  let currentLang = localStorage.getItem(LANG_KEY) || "zh";

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
  }

  function loc(field) {
    if (!field) return "";
    return field[currentLang] || field.en || field.de || "";
  }

  // ---------- Elements ----------
  const regionSelect = document.getElementById("regionSelect");
  const customInput = document.getElementById("customInput");
  const planBtn = document.getElementById("planBtn");
  const statusLine = document.getElementById("statusLine");
  const results = document.getElementById("results");
  const weatherBody = document.getElementById("weatherBody");
  const boatBody = document.getElementById("boatBody");
  const timelineList = document.getElementById("timelineList");
  const timelineMeta = document.getElementById("timelineMeta");
  const gearList = document.getElementById("gearList");
  const foodList = document.getElementById("foodList");
  const posterContainer = document.getElementById("posterContainer");
  const downloadPosterBtn = document.getElementById("downloadPosterBtn");
  const helpToggle = document.getElementById("helpToggle");
  const helpModal = document.getElementById("helpModal");
  const helpClose = document.getElementById("helpClose");

  function populateRegions() {
    regionSelect.innerHTML = "";
    REGIONS.forEach((r) => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = (r.canton ? "[" + r.canton + "] " : "") + loc(r.lake) + " — " + loc(r.name);
      regionSelect.appendChild(opt);
    });
  }

  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
    document.documentElement.lang = currentLang;
    populateRegions();
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang");
      localStorage.setItem(LANG_KEY, currentLang);
      applyLang();
      if (!results.hidden) renderAll();
    });
  });

  helpToggle.addEventListener("click", () => { helpModal.hidden = false; });
  helpClose.addEventListener("click", () => { helpModal.hidden = true; });
  helpModal.addEventListener("click", (e) => { if (e.target === helpModal) helpModal.hidden = true; });

  // ---------- Weather ----------
  async function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&hourly=temperature_2m,precipitation_probability,weathercode,wind_speed_10m` +
      `&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max` +
      `&timezone=auto&forecast_days=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather fetch failed");
    return res.json();
  }

  function summarizeWeather(w) {
    const d = w.daily;
    return {
      tempMax: Math.round(d.temperature_2m_max[0]),
      tempMin: Math.round(d.temperature_2m_min[0]),
      precipMax: d.precipitation_probability_max[0],
      windMax: Math.round(d.wind_speed_10m_max[0]),
      sunrise: (d.sunrise[0] || "").slice(-5),
      sunset: (d.sunset[0] || "").slice(-5)
    };
  }

  function renderWeather(summary) {
    weatherBody.innerHTML = "";
    const stats = [
      [t("tempLabel"), `${summary.tempMin}° – ${summary.tempMax}°C`],
      [t("precipLabel"), `${summary.precipMax}%`],
      [t("windLabel"), `${summary.windMax} km/h`],
      [t("sunLabel"), `${summary.sunrise} / ${summary.sunset}`]
    ];
    stats.forEach(([label, value]) => {
      const div = document.createElement("div");
      div.className = "weather-stat";
      div.innerHTML = `<span class="stat-label">${label}</span><span class="stat-value">${value}</span>`;
      weatherBody.appendChild(div);
    });
  }

  // ---------- Boat schedule ----------
  async function fetchStationboard(stationName) {
    const url = `https://transport.opendata.ch/v1/stationboard?station=${encodeURIComponent(stationName)}&limit=12`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("stationboard fetch failed");
    const data = await res.json();
    return (data.stationboard || []).map((e) => ({
      category: e.category,
      number: e.number || "",
      to: e.to || "",
      departure: e.stop && e.stop.departure
    }));
  }

  async function findBoatDepartures(query) {
    const locUrl = `https://transport.opendata.ch/v1/locations?query=${encodeURIComponent(query)}&type=station`;
    const locRes = await fetch(locUrl);
    if (!locRes.ok) throw new Error("locations fetch failed");
    const locData = await locRes.json();
    const candidates = (locData.stations || []).slice(0, 5);

    for (const c of candidates) {
      try {
        const board = await fetchStationboard(c.name);
        const boatEntries = board.filter((e) => e.category === "BAT");
        if (boatEntries.length) return { station: c.name, entries: boatEntries, isBoatOnly: true };
      } catch (e) { /* try next candidate */ }
    }
    if (candidates[0]) {
      const board = await fetchStationboard(candidates[0].name);
      return { station: candidates[0].name, entries: board, isBoatOnly: false };
    }
    return null;
  }

  function formatTime(iso) {
    if (!iso) return "--:--";
    const d = new Date(iso);
    return d.toLocaleTimeString(currentLang === "zh" ? "zh-CN" : currentLang === "de" ? "de-CH" : "en-GB", { hour: "2-digit", minute: "2-digit" });
  }

  function renderBoat(result) {
    boatBody.innerHTML = "";
    if (!result || !result.entries.length) {
      const p = document.createElement("p");
      p.className = "notice";
      p.textContent = t("boatUnavailable");
      boatBody.appendChild(p);
      return;
    }
    if (!result.isBoatOnly) {
      const p = document.createElement("p");
      p.className = "notice";
      p.textContent = t("boatFallback");
      boatBody.appendChild(p);
    }
    const table = document.createElement("table");
    table.className = "boat-table";
    table.innerHTML = `<thead><tr><th>${t("timeCol")}</th><th>${t("lineCol")}</th><th>${t("toCol")}</th></tr></thead>`;
    const tbody = document.createElement("tbody");
    result.entries.slice(0, 6).forEach((e) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${formatTime(e.departure)}</td><td>${e.category}${e.number ? " " + e.number : ""}</td><td>${e.to}</td>`;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    boatBody.appendChild(table);
  }

  // ---------- Gear logic ----------
  function computeGear(summary, region) {
    const gear = ["gear_hikingBoots", "gear_backpack", "gear_waterBottle", "gear_snacks",
      "gear_firstAid", "gear_phone", "gear_cash"];

    if (summary.precipMax >= 50) {
      gear.push("gear_rainJacket", "gear_dryBag");
    }
    if (summary.tempMin < 10 || (region && region.elevationGain >= 700)) {
      gear.push("gear_warmLayer", "gear_gloves");
    }
    if (summary.windMax >= 30) {
      gear.push("gear_windbreaker");
    }
    if (summary.tempMax > 25 && summary.precipMax < 30) {
      gear.push("gear_extraWater");
    }
    if (summary.precipMax < 30) {
      gear.push("gear_sunProtection", "gear_sunglasses");
    }
    return gear;
  }

  function renderGear(keys) {
    gearList.innerHTML = "";
    keys.forEach((k) => {
      const li = document.createElement("li");
      li.textContent = t(k);
      gearList.appendChild(li);
    });
  }

  // ---------- Food ----------
  function renderFood(items) {
    foodList.innerHTML = "";
    (items || []).forEach((f) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="food-name">${f.name}</span><span class="food-kind">${loc(f.kind)}</span>`;
      foodList.appendChild(li);
    });
  }

  // ---------- Timeline ----------
  function addTime(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  function renderTimeline(segments, startDate, region) {
    timelineList.innerHTML = "";
    let cursor = new Date(startDate);
    let totalMin = 0;
    segments.forEach((seg) => {
      const li = document.createElement("li");
      const timeStr = cursor.toLocaleTimeString(currentLang === "zh" ? "zh-CN" : currentLang === "de" ? "de-CH" : "en-GB", { hour: "2-digit", minute: "2-digit" });
      li.innerHTML = `
        <span class="timeline-time">${timeStr}</span>
        <div class="timeline-body">
          <div class="timeline-title"><span class="seg-icon">${seg.icon || "•"}</span>${loc(seg.title)}</div>
          <div class="timeline-dur">${seg.min} min</div>
        </div>`;
      timelineList.appendChild(li);
      cursor = addTime(cursor, seg.min);
      totalMin += seg.min;
    });
    const hours = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    let meta = `${t("totalLabel")}: ${hours}h${mins ? " " + mins + "min" : ""}`;
    if (region) {
      meta += ` · ${t("difficultyLabel")}: ${t("difficulty_" + region.difficulty)} · ${t("elevationLabel")}: +${region.elevationGain}${t("elevationUnit")}`;
    }
    timelineMeta.textContent = meta;
  }

  // ---------- Custom location geocoding ----------
  async function geocodeCustom(query) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&country=CH`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("geocoding failed");
    const data = await res.json();
    if (!data.results || !data.results.length) return null;
    const r = data.results[0];
    return { lat: r.latitude, lon: r.longitude, name: r.name };
  }

  // ---------- Main flow ----------
  let lastResult = null;

  function genericSegments() {
    return [
      { min: 120, title: { de: i18n.de.genericSeg1, en: i18n.en.genericSeg1, zh: i18n.zh.genericSeg1 }, icon: "🚶" },
      { min: 30, title: { de: i18n.de.genericSeg2, en: i18n.en.genericSeg2, zh: i18n.zh.genericSeg2 }, icon: "↩️" }
    ];
  }

  function buildFriendlyTip(summary) {
    const lines = [];
    if (summary.precipMax >= 50) {
      lines.push({ zh: "今天降雨概率较高，记得带伞或防水外套～", en: "High chance of rain today — bring an umbrella or rain jacket.", de: "Hohe Regenwahrscheinlichkeit heute — Regenschirm nicht vergessen." });
    } else if (summary.precipMax < 30) {
      lines.push({ zh: "今天天气晴朗，别忘了防晒霜和太阳镜！", en: "Clear skies today — don't forget sunscreen and sunglasses!", de: "Klarer Himmel heute — Sonnencreme und Sonnenbrille nicht vergessen!" });
    }
    if (summary.tempMin < 10) {
      lines.push({ zh: "山上早晚温差大，带件保暖外套更安心。", en: "Big temperature swings in the mountains — pack a warm layer.", de: "Grosse Temperaturschwankungen in den Bergen — eine warme Schicht einpacken." });
    }
    lines.push({ zh: "路上遇到友善的当地人，不妨微笑打个招呼～", en: "If you meet friendly locals along the way, a smile goes a long way!", de: "Begegnest du freundlichen Einheimischen — ein Lächeln kommt immer gut an!" });
    return lines.map((l) => l[currentLang] || l.en).join(" ");
  }

  function stopsFromSegments(segments) {
    return segments.map((s) => ({ emoji: s.icon, label: loc(s.title) }));
  }

  function renderAll() {
    if (!lastResult) return;
    const { summary, boatResult, startDate, region } = lastResult;
    renderWeather(summary);
    renderBoat(boatResult);
    let segments;
    if (region) {
      segments = region.segments;
      renderTimeline(region.segments, startDate, region);
      renderGear(computeGear(summary, region));
      renderFood(region.food);
    } else {
      segments = genericSegments();
      renderTimeline(segments, startDate, null);
      renderGear(computeGear(summary, null));
      foodList.innerHTML = "";
      const li = document.createElement("li");
      li.innerHTML = `<span class="food-kind">${t("genericNote")}</span>`;
      foodList.appendChild(li);
    }
    if (window.RoutePoster) {
      window.RoutePoster.render(posterContainer, {
        title: region ? loc(region.lake) + " · " + loc(region.name) : t("appTitle"),
        stops: stopsFromSegments(segments),
        tipTitle: t("tipTitle"),
        tip: buildFriendlyTip(summary)
      });
    }
  }

  if (downloadPosterBtn) {
    downloadPosterBtn.addEventListener("click", () => {
      if (window.RoutePoster) window.RoutePoster.download(posterContainer, "alpine-route-poster.png");
    });
  }

  async function planRoute() {
    const customQuery = customInput.value.trim();
    const region = customQuery ? null : REGIONS.find((r) => r.id === regionSelect.value);

    planBtn.disabled = true;
    statusLine.hidden = false;
    statusLine.textContent = t("planning");
    results.hidden = true;

    try {
      let coords, boatQuery;

      if (region) {
        coords = region.coords;
        boatQuery = region.departurePier;
      } else {
        const geo = await geocodeCustom(customQuery);
        if (!geo) {
          statusLine.textContent = t("customNotFound");
          planBtn.disabled = false;
          return;
        }
        coords = { lat: geo.lat, lon: geo.lon };
        boatQuery = geo.name;
      }

      const [weatherRaw, boatResult] = await Promise.all([
        fetchWeather(coords.lat, coords.lon).catch(() => null),
        findBoatDepartures(boatQuery).catch(() => null)
      ]);

      const summary = weatherRaw ? summarizeWeather(weatherRaw) : { tempMax: 18, tempMin: 10, precipMax: 30, windMax: 12, sunrise: "06:30", sunset: "20:30" };

      let startDate = new Date();
      startDate.setHours(9, 0, 0, 0);
      if (boatResult && boatResult.isBoatOnly && boatResult.entries.length) {
        const now = new Date();
        const future = boatResult.entries.find((e) => e.departure && new Date(e.departure) > now);
        if (future) startDate = new Date(future.departure);
      }

      lastResult = { summary, boatResult, startDate, region };
      renderAll();

      results.hidden = false;
      statusLine.hidden = true;
    } catch (err) {
      statusLine.textContent = t("boatUnavailable");
    } finally {
      planBtn.disabled = false;
    }
  }

  planBtn.addEventListener("click", planRoute);

  applyLang();
})();
