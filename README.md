
## Introduction

This code is entirely done with chatGPT prompting.

This repository contains a JavaScript implementation of a Sudoku solver using a backtracking algorithm. The solver is encapsulated within the `SudokuSolver` class, providing functionality to solve Sudoku puzzles of any size and visualize the intermediate states of the solution process.

## Usage

To use the Sudoku solver, follow these steps:

1. Define your Sudoku puzzle as a 2D array, where empty cells are represented by `0`. Example:

```javascript
const incompleteSudoku = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  // ... (complete the puzzle)
];
```

2. Create an instance of the `SudokuSolver` class with the puzzle as an argument:

```javascript
const sudokuSolver = new SudokuSolver(incompleteSudoku);
```

3. (Optional) Visualize intermediate states of the solution process using the `visualize` method:

```javascript
sudokuSolver.visualize();
```

4. Solve the Sudoku puzzle using the `solve` method:

```javascript
if (sudokuSolver.solve()) {
  console.log("\nSudoku Solution:");
  sudokuSolver.printBoard();
} else {
  console.log("No solution exists.");
}
```

## Class Structure

### `SudokuSolver` Class

#### Properties

- `board`: A 2D array representing the Sudoku puzzle.
- `size`: The size of the puzzle (e.g., 9 for a standard 9x9 Sudoku).
- `subgridSize`: The size of each subgrid within the puzzle.

#### Methods

- `solve`: Solves the Sudoku puzzle using a backtracking algorithm.
- `findEmpty`: Finds the first empty position in the puzzle.
- `isValid`: Checks if a number can be placed at a given position.
- `visualize`: Visualizes the intermediate states of the puzzle-solving process.
- `printBoard`: Prints the current state of the puzzle.

## Example Usage

```javascript
const sudokuSolver = new SudokuSolver(incompleteSudoku);
sudokuSolver.visualize();
if (sudokuSolver.solve()) {
  console.log("\nSudoku Solution:");
  sudokuSolver.printBoard();
} else {
  console.log("No solution exists.");
}
```

## Notes

- This implementation assumes a square Sudoku puzzle, where the size is a perfect square (e.g., 4x4, 9x9).
- The solver uses a recursive backtracking approach, exploring possibilities until a solution is found.
- The `visualize` method aids in understanding the steps taken during the solution process.
