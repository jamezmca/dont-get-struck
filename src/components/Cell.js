import React, { useState } from 'react'

export default function Cell({ cell, dimensions }) {
    // const [cellBorders, setCellBorders] = useState({ up: false, left: false, right: false, down: false })
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
    let cellBorders = colorBorders(cell)
    let cellWidth = window.innerWidth / (dimensions[1] + 2)
    let cellHeight = window.innerHeight / (dimensions[0] + 2)
    console.log(cellBorders)

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



    let arr = [1, 3, 5]
    arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)


    return (
        <div style={{
            height: cellHeight,
            width: cellWidth,
            border: '2px solid black'

        }}>
            <p style={{padding: 0, margin: 0}}>p</p>
        </div>
    )
}
