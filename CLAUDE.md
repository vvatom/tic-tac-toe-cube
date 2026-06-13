# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm test         # Run tests in watch mode
npm run build    # Production build to /build
npm run deploy   # Deploy to GitHub Pages (runs build first)
```

## Architecture

This is a React 18 (Create React App) 3D tic-tac-toe game rendered on the faces of a CSS 3D cube. Players interact with a rotating cube where each of 6 faces is a 3x3 game board.

### State Management

Global state lives in `App.js` via Context API and is consumed throughout the tree:
- `GameMode`: `"FreeForAll"` | `"CubeTicTacToe"` | `"MegaTicTacToe"`
- `Player`: `"PlayerVsPlayer"` | `"PlayerVsPC"`
- `Level`: `"Easy"` | `"Medium"` | `"Hard"` (AI difficulty — AI logic not yet implemented)
- `Play`: boolean — whether a game is active
- `Camera`: CSS transform string controlling cube orientation
- `Board`: current overlay board (e.g., `"ScoreBoard"`)
- `Load`: loading/transition state flag

### Central Hub: `mainCube.jsx`

`MainCube` is the orchestrator. It owns:
- **26-cell board array** — a flat array representing all cells across all 6 walls (each wall has 9 cells; indices overlap at shared edges)
- **Cube drag/rotation** — mouse and touch event handlers with momentum physics
- **`camIteration`** — a state machine that cycles the camera through walls during gameplay
- **Stopwatch** — manual `setInterval` with cleanup in `useEffect`
- **`wallGameState`** — per-wall tracking of game-over status and winning cell indices
- **localStorage** — score board persistence (JSON-serialized game history)

### Wall Components (`src/components/`)

Six wall components (`front_wall.jsx`, `back_wall.jsx`, `left_wall.jsx`, `right_wall.jsx`, `upper_wall.jsx`, `bottom_wall.jsx`) each render a 3x3 grid. Patterns to know:
- Each has hardcoded win-combination arrays (8 combos per wall)
- `validateWall` checks win conditions; `fullWall` detects draws
- Cells are color-coded: blue = X, red = O, green = win cells
- `clickNone` CSS class is applied to disable interaction when the wall's game ends

### Menu System (`src/components/menu/`)

Six menu components correspond to the 6 cube faces (shown when that face is not in play). `FrontMenu` handles primary game mode and difficulty selection. `ScoreBoard` reads from localStorage.

### Counter (`src/components/counter.jsx`)

Displays current player (X/O), win counts per player (out of 6 walls), and a MM:SS:MS timer.

### CSS 3D Cube

The cube uses `transform-style: preserve-3d` with `translateZ` and `rotateX/Y` to position walls. The `Camera` context value is a full CSS transform string that rotates the entire cube. Rotation transitions are CSS-driven (`transition: transform`).

## Key Conventions

- Functional components with hooks throughout — no class components
- `classnames` library used for conditional class binding
- Cell hover state managed via `onMouseEnter`/`onMouseLeave` on individual divs
- Each wall has its own 9-cell index mapping into the 26-cell master board array
- The `PlayerVsPC` game modes are selectable but AI is not yet implemented
