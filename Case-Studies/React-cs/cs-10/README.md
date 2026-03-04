# ShopEase Bundle Analysis Demo

## What This Project Does
This project demonstrates how import style affects your app's JavaScript bundle size.
It compares two approaches side by side:
- Bad imports: pulling in entire libraries (lodash, date-fns) even when only one function is needed
- Good imports: importing only the specific function required, letting the bundler tree-shake the rest

## How to Run
```bash
npm install
npm run dev
```

## How to Run the Bundle Analysis
```bash
npm run build
```
After the build finishes, `stats.html` opens automatically in your browser.
It shows a visual treemap of every module and its size in the final bundle.

## The Core Experiment
1. Open `src/App.tsx`
2. The app currently uses `GoodImports` — build and note the bundle size in the terminal and treemap
3. Swap `GoodImports` for `BadImports` (comment/uncomment the imports at the top of App.tsx)
4. Run `npm run build` again and compare — the bundle will be significantly larger

## What to Look For in stats.html
- With `BadImports`: large lodash and date-fns blocks dominate the treemap (~150KB+ gzipped)
- With `GoodImports`: only tiny slices for debounce and format appear (~20KB gzipped)

## Key Concepts Covered
- Selective imports vs whole-library imports
- Tree shaking with ES modules
- tsconfig.json set to `module: ESNext` for optimal bundling
- Centralizing utility imports in `src/utils/dateUtils.ts`