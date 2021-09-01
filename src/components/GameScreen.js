import React from 'react'
import { generateMaze } from './generateMaze'
import * as screenStyles from './gamescreen.module.css'
import Cell from './CellRow'

export default function GameScreen() {
    const maze = generateMaze()
    return (
        <div className={screenStyles.container}
            style={{
                width: Math.min(window.innerWidth, window.innerHeight),
                height: Math.min(window.innerWidth, window.innerHeight)
            }}>
            {maze.map((cellRow, i) => <Cell
                key={i}
                rowNum={i}
                cellRow={cellRow}
                dimensions={[maze.length, maze[0].length]} />)}
        </div>
    )
}