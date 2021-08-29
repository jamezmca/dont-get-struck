import React from 'react'
import * as screenStyles from './gamescreen.module.css'

export default function GameScreen() {
    function generateMaze(e) {
        let cells = []
        let mazeWidth = 20
        let mazeHeight = 20

        //generate grid template
        for (let y = 0; y < mazeHeight; y++) {
            //step 1: initialize empty row
            cells[y] = []
            mazeWidth = y + 1
            for (let x = 0; x < mazeWidth; x++) {
                //step 2: create each cell in this row
                let cell = {
                    x,
                    y,
                    index: [x, y],
                    status: 'unvisited',
                    adjacents: [],
                    connections: []
                }
                cells[x][y] = cell
                //add to unvisited set
                //unvisited.add(cell)
                //add adjacents
                if (cells[y-1]) {
                    if (cells[y-1][x]) {
                        let up = cells[y-1][x]
                        cell.adjacents.push(up)
                        up.adjacents.push(cell)
                    }
                }
                if (cells[y][x-1]) {
                    let left = cells[y][x-1]
                    cell.adjacents.push(left)
                    left.adjacents.push(cell)
                }
            }
        }
    }
    generateMaze()

    return (
        <div className={screenStyles.container}>
            
        </div>
    )
}
