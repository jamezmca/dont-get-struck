import React from 'react'
import { generateMaze } from './generateMaze'
import * as screenStyles from './gamescreen.module.css'
import CellRow from './CellRow'

export default function GameScreen() {
    const maze = generateMaze()
    let mazePx = Math.min(window.innerWidth, 0.8 * window.innerHeight)
    return (
        <div className={screenStyles.container}
            style={{
                width: mazePx,
                height: mazePx
            }}>
            {maze.map((cellRow, i) => <CellRow
                key={i}
                rowNum={i}
                cellRow={cellRow}
                mazePx={mazePx}
                dimensions={[maze.length, maze[0].length]} />)}
        </div>
    )
}