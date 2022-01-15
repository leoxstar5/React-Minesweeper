import React, { useState, useEffect } from "react";

// renders Cell
const Cell = ({ value, rowIndex, index, ...props }) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        // if value update then update state
        setState(value);
    }, [value]);

    return (
        <div
            onClick={() => {
                console.log(` ${index}`);
            }}
            className={`board-cell ${
                (rowIndex % 2 === 0 ? index % 2 === 0 : index % 2 !== 0)
                    ? "board-cell-even"
                    : "board-cell-odd"
            }`}
        >
            {state}
        </div>
    );
};

export default Cell;
