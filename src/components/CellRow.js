import React from 'react'
import Cell from './Cell'
import * as cellStyles from './cell.module.css'
//hehe

export default function CellRow({ cellRow, dimensions, rowNum, mazePx}) {

    return (
        <div className={cellStyles.container}>
            {cellRow.map((cell, i) => {
                return <Cell 
                    key={i} 
                    cell={cell} 
                    rowNum={rowNum} 
                    dimensions={dimensions} 
                    mazePx={mazePx}
                    lastRow={i === dimensions[0] - 1}/>
            })}

        </div>
    )
}
