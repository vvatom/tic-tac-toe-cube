export const WALL_DEFS = {
  UpperWall: {
    cells: [3, 4, 5, 10, 11, 12, 15, 16, 17],
    wins: [
      [3, 4, 5], [10, 11, 12], [15, 16, 17],
      [3, 10, 15], [4, 11, 16], [5, 12, 17],
      [3, 11, 17], [5, 11, 15],
    ],
  },
  FrontWall: {
    cells: [5, 6, 7, 12, 13, 14, 17, 20, 23],
    wins: [
      [5, 6, 7], [12, 13, 14], [17, 20, 23],
      [5, 12, 17], [6, 13, 20], [7, 14, 23],
      [5, 13, 23], [7, 13, 17],
    ],
  },
  RightWall: {
    cells: [15, 16, 17, 18, 19, 20, 21, 22, 23],
    wins: [
      [15, 16, 17], [18, 19, 20], [21, 22, 23],
      [15, 18, 21], [16, 19, 22], [17, 20, 23],
      [15, 19, 23], [17, 19, 21],
    ],
  },
  LeftWall: {
    cells: [1, 24, 7, 2, 25, 6, 3, 4, 5],
    wins: [
      [1, 24, 7], [2, 25, 6], [3, 4, 5],
      [1, 2, 3], [24, 25, 4], [7, 6, 5],
      [1, 25, 5], [7, 25, 3],
    ],
  },
  BackWall: {
    cells: [1, 2, 3, 8, 9, 10, 21, 18, 15],
    wins: [
      [1, 2, 3], [8, 9, 10], [21, 18, 15],
      [1, 8, 21], [2, 9, 18], [3, 10, 15],
      [1, 9, 15], [3, 9, 21],
    ],
  },
  BottomWall: {
    cells: [7, 24, 1, 14, 0, 8, 23, 22, 21],
    wins: [
      [7, 24, 1], [14, 0, 8], [23, 22, 21],
      [7, 14, 23], [24, 0, 22], [1, 8, 21],
      [7, 0, 21], [1, 0, 23],
    ],
  },
};

function buildBoard(cells, mainTab) {
  const board = {};
  for (const id of cells) {
    board[id] = mainTab[id].sign || null;
  }
  return board;
}

function checkWinner(board, wins) {
  for (const [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}

function emptyCells(cells, board) {
  return cells.filter((id) => !board[id]);
}

function minimax(board, cells, wins, isMaximizing, alpha, beta) {
  const winner = checkWinner(board, wins);
  if (winner === "X") return 10;
  if (winner === "O") return -10;

  const empty = emptyCells(cells, board);
  if (empty.length === 0) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (const id of empty) {
      board[id] = "X";
      const score = minimax(board, cells, wins, false, alpha, beta);
      board[id] = null;
      best = Math.max(best, score);
      alpha = Math.max(alpha, best);
      if (beta <= alpha) break;
    }
    return best;
  } else {
    let best = Infinity;
    for (const id of empty) {
      board[id] = "O";
      const score = minimax(board, cells, wins, true, alpha, beta);
      board[id] = null;
      best = Math.min(best, score);
      beta = Math.min(beta, best);
      if (beta <= alpha) break;
    }
    return best;
  }
}

export function getAiMove(wallName, mainTab, level) {
  const def = WALL_DEFS[wallName];
  if (!def) return null;

  const board = buildBoard(def.cells, mainTab);
  const empty = emptyCells(def.cells, board);
  if (empty.length === 0) return null;

  if (level === "Easy") {
    return empty[Math.floor(Math.random() * empty.length)];
  }

  if (level === "Medium") {
    for (const id of empty) {
      board[id] = "O";
      if (checkWinner(board, def.wins) === "O") return id;
      board[id] = null;
    }
    for (const id of empty) {
      board[id] = "X";
      if (checkWinner(board, def.wins) === "X") { board[id] = null; return id; }
      board[id] = null;
    }
    return empty[Math.floor(Math.random() * empty.length)];
  }

  // Hard: minimax
  let bestScore = Infinity;
  let bestId = null;
  for (const id of empty) {
    board[id] = "O";
    const score = minimax(board, def.cells, def.wins, true, -Infinity, Infinity);
    board[id] = null;
    if (score < bestScore) {
      bestScore = score;
      bestId = id;
    }
  }
  return bestId;
}
