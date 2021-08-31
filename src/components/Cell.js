import React, { useState, useEffect } from 'react'

export default function Cell({ cell, dimensions }) {
    const [cellBorders, setCellBorders] = useState(false)
    console.log(cell)
        function colorBorders(c) {
            let borders = { left: false, right: false, up: false, down: false }
            borders = c.connections.reduce((acc, curr) => {
                // console.log(checkLeft(c, curr), checkRight(c, curr), checkUp(c, curr), checkDown(c, curr))
                acc = checkLeft(c, curr) ? { ...acc, left: true } : { ...acc, left: false }
                acc = checkRight(c, curr) ? { ...acc, right: true } : { ...acc, right: false }
                acc = checkUp(c, curr) ? { ...acc, up: true } : { ...acc, up: false }
                acc = checkDown(c, curr) ? { ...acc, down: true } : { ...acc, down: false }
                // if (checkLeft(c, curr)) return { ...acc, left: true }
                // if (checkRight(c, curr)) return { ...acc, right: true }
                // if (checkDown(c, curr)) return { ...acc, down: true }
                // if (checkUp(c, curr)) return { ...acc, up: true }
                return acc
            }, {})
            return borders

        }
        setCellBorders(() => colorBorders(cell))

    let cellWidth = window.innerWidth / (dimensions[1] + 2)
    let cellHeight = window.innerHeight / (dimensions[0] + 2)

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
            margin: '1px',
            borderLeft: cellBorders.left ? '1px solid black' : '',
            borderRight: cellBorders.right ? '1px solid black' : '',
            borderTop: cellBorders.top ? '1px solid black' : '',
            borderBottom: cellBorders.bottom ? '1px solid black' : '',
        }}>
            <p>p</p>
        </div>
    )
}
