class Cell {
    constructor() {
        this.state = "X"; // M, X   (x for empty), M (for mine), num (nearby mine count)
        this.isCovered = true;
        this.flagged = false;
    }
}

class BoardData {
    constructor(size) {
        this.Grid = this.createGrid(size);

        // this.gridX = 0;
        // this.gridY = 0;

        // this.mines = 0;

        // this.minesTotal = 0;
    }

    createGrid(size) {
        let grid = [];
        let row = [];
        for (let i = 0; i < size.x; i++) {
            for (let j = 0; j < size.y; j++) {
                row.push(new Cell());
            }
            grid.push(row);
            row = []; // reset row
        }
        return grid;
    }
}

export default BoardData;
