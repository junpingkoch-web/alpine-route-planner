# Project: alpine-route-planner（瑞士湖泊徒步 + 轮渡行程规划器）

零构建静态站（`data.js` + `script.js` + `poster.js` + `style.css`）。用户选一个瑞士湖泊徒步区域
（12 个精选区域，覆盖 8 个州）或输入自定义地点，应用拉取实时天气（Open-Meteo）和实时轮渡/交通
班次（transport.opendata.ch），渲染时间线、装备清单、餐饮推荐，以及一张莫兰迪风格手绘 SVG 行程海报。

## Commands
- 无构建/测试命令
- 本地预览：共享配置 `C:\Users\junpi\.claude\.claude\launch.json`，端口 5504

## 文件结构
- `data.js`（`window.SOMETHING`）— 12 个区域的数据，schema：`canton`/`lake`/`name`/`coords`/
  `departurePier`/`returnPier`/`difficulty`/`elevationGain`/`segments[]`/`food[]`
- `script.js` — 主逻辑，调用 Open-Meteo + transport.opendata.ch
- `poster.js` — **跟 swiss-city-guide 共享的同一份文件**（手绘 SVG 海报 + PNG 导出），两边各自维护一份拷贝，不是符号链接
- `style.css`

## 数据约定
加新区域时严格遵循现有 schema，`segments[]` 保持 4 段、`food[]` 保持 2 项，跟已有条目视觉密度一致。

## 已知的坑
- **轮渡 API**：`transport.opendata.ch` 用 `category === "BAT"` 过滤湖船班次，没有纯船班站点时优雅降级显示全部班次并提示——这个逻辑已验证有效，别重新假设 API 不可用
- Bash/WebFetch 在这个环境里连不上 `transport.opendata.ch`/Open-Meteo（沙箱网络限制），但浏览器预览工具能连通——不要因为 Bash curl 超时就断定 API 挂了
- 零构建家族共享的两个坑（`[hidden]` 被 CSS 覆盖、脚本缓存）见 `.claude/rules/zero-build-gotchas.md`（路径作用域，只在改 `script.js`/`style.css`/`data.js` 时加载）

## 部署流程
- 改完直接 commit + push 到 `main`
- Commit 作者身份：`Junping Koch <junping.koch@gmail.com>`，仓库单独设置

## 持续维护
每次你需要重复纠正 Claude 同一件事三次以上，就把结论补进这个文件对应章节。
