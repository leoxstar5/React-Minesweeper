import React, { useState, useEffect } from "react";
import BoardData from "./BoardData";
import Cell from "./Cell";

// renders board
const Board = ({ size, ...props }) => {
    const [board, setBoard] = useState([]);
    const [boardData, setBoardData] = useState(new BoardData(size));

    // const boardData = new BoardData(size); // create default board

    useEffect(() => {
        // setBoardData();
        createBoard();
    }, []);

    const createBoard = () => {
        console.log(boardData);
        // assign to board
    };

    const getBoard = () => {
        return boardData.Grid.map((row, rowIndex) => (
            <div className="board-row">
                {row.map((cell, index) => (
                    <Cell
                        key={`${rowIndex}${index}`}
                        rowIndex={rowIndex}
                        index={index}
                        value={cell.state}
                    />
                ))}
            </div>
        ));
    };

    return <div className="board-container">{getBoard()}</div>;
};

export default Board;
