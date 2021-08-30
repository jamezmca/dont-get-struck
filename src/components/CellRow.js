import React from 'react'
import * as cellStyles from './cell.module.css'
//hehe

export default function CellRow({ cellRow, dimensions, rowNum }) {
    console.log(cellRow)
    let cellWidth = window.outerWidth/ (dimensions[1] + 2)
    let cellHeight = window.outerHeight / (dimensions[0] + 2)
    return (
        <div className={cellStyles.container}>
            {cellRow.map((cell, i) => {
                return <div key={i} style={{fontSize: '4px', height: cellHeight, width: cellWidth}}>{`${rowNum} x ${i}`}</div>
            })}

        </div>
    )
}
