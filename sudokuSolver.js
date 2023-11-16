class SudokuSolver {
  constructor(board) {
    this.board = board;
    this.size = board.length;
    this.subgridSize = Math.sqrt(this.size);
  }

  solve() {
    if (!this.findEmpty()) {
      // If no empty position, the puzzle is solved
      return true;
    }

    const [row, col] = this.findEmpty();

    for (let num = 1; num <= this.size; num++) {
      if (this.isValid(num, row, col)) {
        this.board[row][col] = num;

        // Recursive call to solve the next position
        if (this.solve()) {
          return true;
        }

        // If placing num at the current position doesn't lead to a solution, backtrack
        this.board[row][col] = 0;
      }
    }

    // No number can be placed at the current position
    return false;
  }

  findEmpty() {
    // Find the first empty position in the puzzle
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    // If no empty position is found, return null
    return null;
  }

  isValid(num, row, col) {
    // Check if num can be placed at the current position

    // Check if num is not present in the current row and column
    for (let i = 0; i < this.size; i++) {
      if (
        this.board[row][i] === num ||
        this.board[i][col] === num
      ) {
        return false;
      }
    }

    // Check if num is not present in the current subgrid
    const subgridStartRow = Math.floor(row / this.subgridSize) * this.subgridSize;
    const subgridStartCol = Math.floor(col / this.subgridSize) * this.subgridSize;
    for (let i = 0; i < this.subgridSize; i++) {
      for (let j = 0; j < this.subgridSize; j++) {
        if (this.board[subgridStartRow + i][subgridStartCol + j] === num) {
          return false;
        }
      }
    }

    // If all checks pass, num can be placed at the current position
    return true;
  }

  visualize() {
    // Visualize the intermediate states of the puzzle
    console.log("Intermediate State:");
    this.printBoard();
    console.log("------------------------");
  }

  printBoard() {
    // Print the current state of the puzzle
    let horizontalLine = "-".repeat(this.subgridSize * (this.size + 1)); // A line of dashes
    for (let i = 0; i < this.size; i++) {
      if (i % this.subgridSize == 0) {
        // Print a horizontal line before each subgrid
        console.log(horizontalLine);
      }
      let row = ""; // A string to store the row
      for (let j = 0; j < this.size; j++) {
        if (j % this.subgridSize == 0) {
          // Print a vertical line before each subgrid
          row += "|";
        }
        row += " " + this.board[i][j]; // Add a space and the digit to the row
      }
      row += " |"; // Print a vertical line after the last subgrid
      console.log(row); // Print the row
    }
    console.log(horizontalLine); // Print a horizontal line after the last subgrid
  }
}

// Example usage:
const incompleteSudoku = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const sudokuSolver = new SudokuSolver(incompleteSudoku);

// Visualize intermediate states (optional)
sudokuSolver.visualize();

// Solve the Sudoku puzzle
if (sudokuSolver.solve()) {
  console.log("\nSudoku Solution:");
  sudokuSolver.printBoard();
} else {
  console.log("No solution exists.");
}
