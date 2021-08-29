import React from 'react'
import { generateMaze } from './generateMaze'
import * as screenStyles from './gamescreen.module.css'
import Cell from './CellRow'

export default function GameScreen() {
    function colorBorders() {

    }

    const maze = generateMaze()

    return (
        <div className={screenStyles.container}>
            {maze.map((cellRow, i) => <Cell 
                key={i} 
                rowNum={i}
                cellRow={cellRow} 
                dimensions={[maze.length, maze[0].length]}/>)}
        </div>
    )
}