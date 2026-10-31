# goit-advancedjs-hw-05 — Вступ до TypeScript

Середовище розробки TypeScript, налаштоване за конспектом (теми 9.4–9.6):

- **9.4** TypeScript встановлено через npm, код у `src/*.ts`.
- **9.5** `tsconfig.json`: `rootDir: ./src`, `outDir: ./dist`, `lib: ["dom", "ES2021"]`, `module: es2020`, `target: es2019`, `strictNullChecks` та ін. Локальний сервер `@web/dev-server` для роботи ES-модулів у браузері.
- **9.6** `sourceMap: true` — для кожного `.js` у `dist` генерується `.map`, тож у DevTools → Sources можна ставити breakpoints прямо в `.ts`.

## Запуск

```bash
npm install
npm run build   # або npm run watch (tsc -w) в окремому терміналі
npm start       # web-dev-server
```

Введи два слова, натисни **Concat!** — результат у консолі. Breakpoint у `src/concatenation.ts` зупинить виконання на кліку.
