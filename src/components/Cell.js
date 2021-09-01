import React, { useState } from 'react'
import * as cellStyles from './cell.module.css'


export default function Cell({ cell, dimensions, mazePx }) {
    let cellBorders = colorBorders(cell)
    let cellWidth = mazePx  / (dimensions[1] + 2)
    let cellHeight = mazePx / (dimensions[0] + 2)

    function colorBorders(c) {
        let borders = { left: false, right: false, up: false, down: false }
        borders = c.connections.reduce((acc, curr) => {
            // console.log(checkLeft(c, curr), checkRight(c, curr), checkUp(c, curr), checkDown(c, curr))
            acc = checkLeft(c, curr) ? { ...acc, left: true } : { ...acc, left: false }
            acc = checkRight(c, curr) ? { ...acc, right: true } : { ...acc, right: false }
            acc = checkUp(c, curr) ? { ...acc, up: true } : { ...acc, up: false }
            acc = checkDown(c, curr) ? { ...acc, down: true } : { ...acc, down: false }
            return acc
        }, {})
        return borders
    }

    function checkUp(curr, adj) {
        if (curr.x === adj.x && curr.y === adj.y - 1) return true
        return false
    }

    function checkDown(curr, adj) {
        if (curr.x === adj.x && curr.y === adj.y + 1) return true
        return false
    }

    function checkLeft(curr, adj) {
        if (curr.x === adj.x + 1 && curr.y === adj.y) return true
        return false
    }

    function checkRight(curr, adj) {
        if (curr.x === adj.x - 1 && curr.y === adj.y) return true
        return false
    }

    return (
        <div className={cellStyles.cellContainer} style={{
            height: Math.min(cellWidth, cellHeight),
            // maxHeight: cellHeight,
            width: Math.min(cellWidth, cellHeight),
            // maxWidth: cellWidth
        }}>
            <div style={{
                borderTop: cellBorders.up ? '2px solid white' : '',
                borderBottom: cellBorders.down ? '2px solid white' : '',
                borderLeft: cellBorders.left ? '2px solid white' : '',
                borderRight: cellBorders.right ? '2px solid white' : '',
            }}></div>
        </div>
    )
}
