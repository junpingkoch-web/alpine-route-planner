// Curated Swiss Alpine lake-hike regions. Coordinates/piers are real places;
// live weather + boat times are fetched at runtime (see script.js).
window.ALPINE_REGIONS = [
  {
    id: "brienz",
    canton: "BE",
    lake: { de: "Brienzersee", en: "Lake Brienz", zh: "布里恩茨湖" },
    name: { de: "Brienz → Giessbachfälle", en: "Brienz → Giessbach Falls", zh: "布里恩茨 → 吉斯巴赫瀑布" },
    coords: { lat: 46.7373, lon: 7.9539 },
    departurePier: "Brienz",
    returnPier: "Giessbach",
    difficulty: "moderate",
    elevationGain: 300,
    segments: [
      { min: 15, title: { de: "Schifffahrt Brienz → Giessbach", en: "Boat crossing Brienz → Giessbach", zh: "渡轮：布里恩茨 → 吉斯巴赫" }, icon: "⛴️" },
      { min: 30, title: { de: "Aufstieg zur Giessbachfälle-Terrasse", en: "Climb to the Giessbach Falls terrace", zh: "徒步登上吉斯巴赫瀑布观景台" }, icon: "⛰️" },
      { min: 45, title: { de: "Wasserfall-Rundweg mit Aussichtspunkten", en: "Waterfall loop with viewpoints", zh: "瀑布环线，多个观景点" }, icon: "📸" },
      { min: 40, title: { de: "Abstieg zurück zur Schiffstation", en: "Descent back to the pier", zh: "下山返回渡轮码头" }, icon: "🦾" }
    ],
    food: [
      { name: "Grandhotel Giessbach – Panorama-Terrasse", kind: { de: "Restaurant mit Seeblick", en: "Terrace restaurant, lake view", zh: "湖景露台餐厅" } },
      { name: "Bäckerei-Café am Brienzer Bahnhofplatz", kind: { de: "Vor der Abfahrt: Zopf & Kaffee", en: "Before departure: pastries & coffee", zh: "出发前：面包与咖啡" } }
    ]
  },
  {
    id: "thun",
    canton: "BE",
    lake: { de: "Thunersee", en: "Lake Thun", zh: "图恩湖" },
    name: { de: "Beatenbucht → St. Beatus-Höhlen → Sundlauenen", en: "Beatenbucht → St. Beatus Caves → Sundlauenen", zh: "比雅顿湾 → 圣比亚特斯溶洞 → 松德劳嫩" },
    coords: { lat: 46.6935, lon: 7.7717 },
    departurePier: "Beatenbucht",
    returnPier: "Sundlauenen",
    difficulty: "easy",
    elevationGain: 150,
    segments: [
      { min: 25, title: { de: "Schifffahrt Thun/Interlaken → Beatenbucht", en: "Boat from Thun/Interlaken → Beatenbucht", zh: "渡轮：图恩/因特拉肯 → 比雅顿湾" }, icon: "⛴️" },
      { min: 25, title: { de: "Aufstieg zu den St. Beatus-Höhlen", en: "Climb to St. Beatus Caves", zh: "徒步至圣比亚特斯溶洞" }, icon: "⛰️" },
      { min: 30, title: { de: "Höhlenbesuch (optional)", en: "Cave visit (optional)", zh: "游览溶洞（可选）" }, icon: "🔦" },
      { min: 60, title: { de: "Seeuferweg nach Sundlauenen", en: "Lakeside trail to Sundlauenen", zh: "沿湖步道至松德劳嫩" }, icon: "🌲" }
    ],
    food: [
      { name: "Kiosk/Restaurant Beatenbucht", kind: { de: "Vor dem Aufstieg", en: "Before the climb", zh: "登山前小憩" } },
      { name: "Bergrestaurant bei den Höhlen", kind: { de: "Terrasse mit Seeblick", en: "Terrace with lake view", zh: "湖景露台" } }
    ]
  },
  {
    id: "lucerne",
    canton: "LU",
    lake: { de: "Vierwaldstättersee", en: "Lake Lucerne", zh: "琉森湖（四森林州湖）" },
    name: { de: "Weggis → Rigi Kaltbad → Vitznau", en: "Weggis → Rigi Kaltbad → Vitznau", zh: "韦吉斯 → 里吉卡尔特巴德 → 菲茨瑙" },
    coords: { lat: 47.0378, lon: 8.4338 },
    departurePier: "Luzern Bahnhofquai",
    returnPier: "Vitznau",
    difficulty: "hard",
    elevationGain: 850,
    segments: [
      { min: 50, title: { de: "Schifffahrt Luzern → Weggis", en: "Boat from Lucerne → Weggis", zh: "渡轮：琉森 → 韦吉斯" }, icon: "⛴️" },
      { min: 120, title: { de: "Panorama-Aufstieg Weggis → Rigi Kaltbad", en: "Panoramic climb Weggis → Rigi Kaltbad", zh: "全景徒步：韦吉斯 → 里吉卡尔特巴德" }, icon: "⛰️" },
      { min: 30, title: { de: "Rast & Aussicht auf Rigi Kaltbad", en: "Rest & views at Rigi Kaltbad", zh: "里吉卡尔特巴德休息观景" }, icon: "🏔️" },
      { min: 40, title: { de: "Bahn/Wanderung hinunter nach Vitznau", en: "Train or trail down to Vitznau", zh: "缆车/步道下山至菲茨瑙" }, icon: "🚂" }
    ],
    food: [
      { name: "Bergrestaurant Rigi Kaltbad", kind: { de: "Terrasse, Bergküche", en: "Terrace, mountain cuisine", zh: "山间露台餐厅" } },
      { name: "Seepromenade Weggis", kind: { de: "Cafés vor dem Aufstieg", en: "Cafés before the climb", zh: "登山前的湖畔咖啡馆" } }
    ]
  },
  {
    id: "zurich",
    canton: "ZH",
    lake: { de: "Zürichsee", en: "Lake Zurich", zh: "苏黎世湖" },
    name: { de: "Meilen → Männedorf (Goldküste)", en: "Meilen → Männedorf (Gold Coast)", zh: "迈伦 → 门内多夫（黄金海岸）" },
    coords: { lat: 47.2668, lon: 8.6438 },
    departurePier: "Meilen",
    returnPier: "Männedorf",
    difficulty: "easy",
    elevationGain: 50,
    segments: [
      { min: 35, title: { de: "Schifffahrt Zürich → Meilen", en: "Boat from Zurich → Meilen", zh: "渡轮：苏黎世 → 迈伦" }, icon: "⛴️" },
      { min: 70, title: { de: "Flacher Seeuferweg nach Männedorf", en: "Flat lakeside promenade to Männedorf", zh: "平坦湖畔步道至门内多夫" }, icon: "🚶" },
      { min: 20, title: { de: "Eis/Kaffee an der Promenade", en: "Ice cream / coffee on the promenade", zh: "湖畔冰淇淋/咖啡小憩" }, icon: "🍦" }
    ],
    food: [
      { name: "Seerestaurant Männedorf", kind: { de: "Familienfreundlich, Seeblick", en: "Family-friendly, lake view", zh: "亲子友好，湖景" } },
      { name: "Eisdiele an der Promenade", kind: { de: "Sommerklassiker", en: "Summer classic", zh: "夏日经典" } }
    ]
  },
  {
    id: "geneva",
    canton: "VD",
    lake: { de: "Genfersee / Lavaux", en: "Lake Geneva / Lavaux", zh: "日内瓦湖 / 拉沃葡萄园梯田" },
    name: { de: "Lutry → Rivaz → St-Saphorin (Lavaux, UNESCO)", en: "Lutry → Rivaz → St-Saphorin (Lavaux, UNESCO)", zh: "吕特里 → 里瓦兹 → 圣萨福兰（拉沃梯田，世界遗产）" },
    coords: { lat: 46.4989, lon: 6.6883 },
    departurePier: "Lutry",
    returnPier: "St-Saphorin",
    difficulty: "moderate",
    elevationGain: 400,
    segments: [
      { min: 20, title: { de: "Schifffahrt Lausanne → Lutry", en: "Boat from Lausanne → Lutry", zh: "渡轮：洛桑 → 吕特里" }, icon: "⛴️" },
      { min: 90, title: { de: "Terrassenweg durch die Reben nach Rivaz", en: "Terrace trail through the vineyards to Rivaz", zh: "穿越葡萄园梯田步道至里瓦兹" }, icon: "🍇" },
      { min: 30, title: { de: "Weinprobe (optional)", en: "Wine tasting (optional)", zh: "品酒（可选）" }, icon: "🍷" },
      { min: 60, title: { de: "Weiterweg nach St-Saphorin", en: "Continue on to St-Saphorin", zh: "继续步行至圣萨福兰" }, icon: "🥾" }
    ],
    food: [
      { name: "Caveau des vignerons, Rivaz", kind: { de: "Winzerkeller mit Degustation", en: "Winemaker's cellar, tastings", zh: "酿酒师酒窖，品酒" } },
      { name: "Café am Seeufer, St-Saphorin", kind: { de: "Zum Abschluss der Wanderung", en: "To finish the hike", zh: "徒步终点小憩" } }
    ]
  },
  {
    id: "biel",
    canton: "BE",
    lake: { de: "Bielersee", en: "Lake Biel", zh: "比尔湖" },
    name: { de: "Erlach → St. Petersinsel (Rundweg)", en: "Erlach → St. Peter's Island (loop)", zh: "埃尔拉赫 → 圣彼得岛（环线）" },
    coords: { lat: 47.0692, lon: 7.0806 },
    departurePier: "Erlach",
    returnPier: "St. Petersinsel",
    difficulty: "easy",
    elevationGain: 40,
    segments: [
      { min: 15, title: { de: "Schifffahrt/Fussweg Erlach → St. Petersinsel", en: "Boat/causeway Erlach → St. Peter's Island", zh: "渡轮/步道：埃尔拉赫 → 圣彼得岛" }, icon: "⛴️" },
      { min: 60, title: { de: "Rundweg um die Insel", en: "Loop trail around the island", zh: "环岛步道" }, icon: "🌿" },
      { min: 30, title: { de: "Rast beim Klosterrestaurant", en: "Rest at the former monastery restaurant", zh: "在修道院餐厅休息" }, icon: "⛪" }
    ],
    food: [
      { name: "Klosterrestaurant St. Petersinsel", kind: { de: "Historisches Kloster, Seeblick", en: "Historic monastery, lake view", zh: "历史修道院，湖景" } }
    ]
  },
  {
    id: "neuchatel",
    canton: "NE",
    lake: { de: "Neuenburgersee", en: "Lake Neuchâtel", zh: "纳沙泰尔湖" },
    name: { de: "Neuchâtel → Saint-Blaise (Latenium)", en: "Neuchâtel → Saint-Blaise (Latenium)", zh: "纳沙泰尔 → 圣布莱斯（拉特尼乌姆考古博物馆）" },
    coords: { lat: 47.0075, lon: 7.0197 },
    departurePier: "Neuchâtel",
    returnPier: "Saint-Blaise",
    difficulty: "easy",
    elevationGain: 50,
    segments: [
      { min: 20, title: { de: "Schifffahrt Neuchâtel → Saint-Blaise", en: "Boat from Neuchâtel → Saint-Blaise", zh: "渡轮：纳沙泰尔 → 圣布莱斯" }, icon: "⛴️" },
      { min: 15, title: { de: "Spaziergang zum Latenium", en: "Walk to the Latenium museum", zh: "步行至拉特尼乌姆考古博物馆" }, icon: "🚶" },
      { min: 45, title: { de: "Besuch der prähistorischen Pfahlbauten-Ausstellung", en: "Visit the prehistoric lake-dwellings exhibition", zh: "参观史前湖上木桩建筑展览" }, icon: "🏺" },
      { min: 20, title: { de: "Seeuferweg zurück zur Schiffstation", en: "Lakeside walk back to the pier", zh: "沿湖步道返回渡轮码头" }, icon: "🌊" }
    ],
    food: [
      { name: "Brasserie in der Altstadt Neuchâtel", kind: { de: "Neuenburger Wurst & Weisswein", en: "Neuchâtel sausage & local white wine", zh: "纳沙泰尔香肠与本地白葡萄酒" } },
      { name: "Café am Latenium", kind: { de: "Pause mit Seeblick", en: "A break with a lake view", zh: "湖景咖啡小憩" } }
    ]
  },
  {
    id: "zug",
    canton: "ZG",
    lake: { de: "Zugersee", en: "Lake Zug", zh: "楚格湖" },
    name: { de: "Zug → Cham (Seeuferweg)", en: "Zug → Cham (lakeside path)", zh: "楚格 → 查姆（湖畔步道）" },
    coords: { lat: 47.1662, lon: 8.5155 },
    departurePier: "Zug",
    returnPier: "Cham",
    difficulty: "easy",
    elevationGain: 30,
    segments: [
      { min: 20, title: { de: "Altstadt Zug mit Zytturm", en: "Zug old town and the Zytturm clock tower", zh: "楚格老城与钟楼" }, icon: "🕰️" },
      { min: 75, title: { de: "Seeuferweg nach Cham", en: "Lakeside path to Cham", zh: "沿湖步道至查姆" }, icon: "🌊" },
      { min: 15, title: { de: "Rast in Cham", en: "Rest in Cham", zh: "在查姆稍作休息" }, icon: "🚶" },
      { min: 20, title: { de: "Schifffahrt Cham → Zug", en: "Boat from Cham → Zug", zh: "渡轮：查姆 → 楚格" }, icon: "⛴️" }
    ],
    food: [
      { name: "Konditorei in der Altstadt Zug", kind: { de: "Original Zuger Kirschtorte", en: "Original Zuger Kirschtorte (cherry cake)", zh: "正宗楚格樱桃蛋糕" } },
      { name: "Seerestaurant am Zugersee", kind: { de: "Felchen/Egli vom See", en: "Local lake whitefish/perch", zh: "湖鱼料理（白鲑/鲈鱼）" } }
    ]
  },
  {
    id: "gandria",
    canton: "TI",
    lake: { de: "Luganersee (Ceresio)", en: "Lake Lugano (Ceresio)", zh: "卢加诺湖（切雷西奥湖）" },
    name: { de: "Lugano → Gandria (Olivenweg)", en: "Lugano → Gandria (olive-tree trail)", zh: "卢加诺 → 甘德里亚（橄榄树步道）" },
    coords: { lat: 46.0067, lon: 8.9877 },
    departurePier: "Lugano",
    returnPier: "Gandria",
    difficulty: "moderate",
    elevationGain: 150,
    segments: [
      { min: 20, title: { de: "Start am Seeufer bei Castagnola", en: "Start on the lakeshore at Castagnola", zh: "从卡斯塔尼奥拉湖畔出发" }, icon: "🌊" },
      { min: 70, title: { de: "Sentiero di Gandria – Olivenweg entlang des Sees", en: "Sentiero di Gandria — the olive-tree lakeside trail", zh: "甘德里亚步道——沿湖橄榄树小径" }, icon: "🫒" },
      { min: 30, title: { de: "Fischerdorf Gandria & Zoll-Museum", en: "Gandria fishing village & Customs Museum", zh: "甘德里亚渔村与海关博物馆" }, icon: "⛪" },
      { min: 20, title: { de: "Schifffahrt Gandria → Lugano", en: "Boat from Gandria → Lugano", zh: "渡轮：甘德里亚 → 卢加诺" }, icon: "⛴️" }
    ],
    food: [
      { name: "Grotto in Gandria", kind: { de: "Rustikale Tessiner Seeterrasse", en: "Rustic Ticino lakeside terrace", zh: "质朴的提契诺湖畔石屋餐厅" } },
      { name: "Gelateria in Lugano", kind: { de: "Vor der Rückfahrt", en: "Before heading back", zh: "返程前的意式冰淇淋" } }
    ]
  },
  {
    id: "ruetli",
    canton: "UR",
    lake: { de: "Vierwaldstättersee (Urnersee)", en: "Lake Lucerne (Urnersee)", zh: "四森林州湖（乌里湖段）" },
    name: { de: "Flüelen → Rütli", en: "Flüelen → Rütli", zh: "弗吕伦 → 吕特利草地" },
    coords: { lat: 46.9764, lon: 8.6197 },
    departurePier: "Flüelen",
    returnPier: "Rütli",
    difficulty: "moderate",
    elevationGain: 100,
    segments: [
      { min: 30, title: { de: "Schifffahrt Flüelen → Rütli", en: "Boat from Flüelen → Rütli", zh: "渡轮：弗吕伦 → 吕特利草地" }, icon: "⛴️" },
      { min: 40, title: { de: "Rütliwiese – Geburtsstätte der Eidgenossenschaft", en: "The Rütli meadow — birthplace of the Swiss Confederation", zh: "吕特利草地——瑞士联邦的诞生地" }, icon: "🏛️" },
      { min: 40, title: { de: "Aussichtsweg oberhalb des Sees", en: "Panoramic trail above the lake", zh: "湖畔高处观景步道" }, icon: "⛰️" },
      { min: 30, title: { de: "Schifffahrt zurück nach Flüelen", en: "Boat back to Flüelen", zh: "渡轮返回弗吕伦" }, icon: "⛴️" }
    ],
    food: [
      { name: "Picknick auf der Rütliwiese", kind: { de: "Kein Restaurant vor Ort — Picknick empfohlen", en: "No restaurant on site — a picnic is recommended", zh: "现场无餐厅，建议自备野餐" } },
      { name: "Restaurant am Hafen Flüelen", kind: { de: "Vor oder nach der Fahrt", en: "Before or after the crossing", zh: "渡轮前后小憩" } }
    ]
  },
  {
    id: "brunnen",
    canton: "SZ",
    lake: { de: "Vierwaldstättersee", en: "Lake Lucerne", zh: "四森林州湖（施维茨段）" },
    name: { de: "Brunnen → Sisikon (Weg der Schweiz)", en: "Brunnen → Sisikon (Swiss Path)", zh: "布伦嫩 → 西西孔（瑞士之路）" },
    coords: { lat: 46.9989, lon: 8.6069 },
    departurePier: "Brunnen",
    returnPier: "Sisikon",
    difficulty: "moderate",
    elevationGain: 120,
    segments: [
      { min: 15, title: { de: "Hafen Brunnen & Altstadt", en: "Brunnen harbour and old town", zh: "布伦嫩港口与老城" }, icon: "🌊" },
      { min: 90, title: { de: "Weg der Schweiz entlang des Urnersees", en: "The Swiss Path along the Urnersee shoreline", zh: "沿乌里湖岸的瑞士之路" }, icon: "🥾" },
      { min: 10, title: { de: "Ankunft in Sisikon", en: "Arrival in Sisikon", zh: "抵达西西孔" }, icon: "📸" },
      { min: 25, title: { de: "Schifffahrt Sisikon → Brunnen", en: "Boat from Sisikon → Brunnen", zh: "渡轮：西西孔 → 布伦嫩" }, icon: "⛴️" }
    ],
    food: [
      { name: "Bootshaus-Restaurant Brunnen", kind: { de: "Am Hafen, Seeblick", en: "At the harbour, lake view", zh: "港口湖景餐厅" } },
      { name: "Kiosk in Sisikon", kind: { de: "Snacks vor der Rückfahrt", en: "Snacks before the return crossing", zh: "返程前的小吃摊" } }
    ]
  },
  {
    id: "sarnen",
    canton: "OW",
    lake: { de: "Sarnersee", en: "Lake Sarnen", zh: "萨尔嫩湖" },
    name: { de: "Sarnen – Seerundweg", en: "Sarnen — lake loop walk", zh: "萨尔嫩——环湖步道" },
    coords: { lat: 46.8987, lon: 8.2456 },
    departurePier: "Sarnen",
    returnPier: "Sarnen",
    difficulty: "easy",
    elevationGain: 40,
    segments: [
      { min: 20, title: { de: "Altstadt Sarnen & Schlosshügel Landenberg", en: "Sarnen old town and Landenberg castle hill", zh: "萨尔嫩老城与兰登贝格城堡山" }, icon: "🏛️" },
      { min: 60, title: { de: "Seeuferpromenade rund um den Sarnersee", en: "Lakeside promenade around Sarnersee", zh: "环绕萨尔嫩湖的湖畔步道" }, icon: "🌊" },
      { min: 20, title: { de: "Kurze Bootsfahrt auf dem See (optional)", en: "A short boat ride on the lake (optional)", zh: "湖上短程游船（可选）" }, icon: "⛴️" }
    ],
    food: [
      { name: "Café in der Altstadt Sarnen", kind: { de: "Obwaldner Alpkäse-Spezialitäten", en: "Obwalden alpine cheese specialties", zh: "上瓦尔登州高山奶酪特色菜" } }
    ]
  }
];
