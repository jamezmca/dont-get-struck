export function generateMaze(e, mazeWidth = 30, mazeHeight = 30) {
    console.log('hi')
    let cells = []
    //generate maze grid
    for (let y = 0; y < mazeHeight; y++) {
        cells[y] = []
        for (let x = 0; x < mazeWidth; x++) {
            let cell = {
                x,
                y,
                index: [x, y],
                status: 'unvisited',
                adjacents: [],
                connections: [],
            }
            cells[y][x] = cell

            if (cells[y - 1]) {
                if (cells[y - 1][x]) {
                    let up = cells[y - 1][x]
                    cell.adjacents.push(up)
                    up.adjacents.push(cell)
                }
            }

            if (cells[y][x - 1]) {
                let left = cells[y][x - 1]
                cell.adjacents.push(left)
                left.adjacents.push(cell)
            }
        }
    }

    let visited = new Set()
    let frontier = new Set()
    let startY = Math.floor(Math.random() * cells.length)
    let startX = Math.floor(Math.random() * cells[startY].length)
    let start = cells[startY][startX]
    frontier.add(start)
    let current = start

    recursiveSpanningTree()
    function recursiveSpanningTree() {
        //remove current from frontier and add it to visited
        frontier.delete(current)
        visited.add(current)
        current.status = 'visited'
        // grid[current.y * 2 + 1][current.x * 2 + 1].color = "transparent"

        //add unvisited cells to frontier
        function addToFrontier(adjCells) {
            // console.log(adjCells)
            for (let c of adjCells) {
                if (c.status === 'unvisited') {
                    // unvisited.delete(c)
                    frontier.add(c)
                    c.status = 'frontier'
                    //make current cell the frontier cell's connection
                    c.connections.push(current)
                } else if (c.status === 'frontier') {
                    c.connections.push(current)
                }
            }
        }
        addToFrontier(current.adjacents)

        //choose a random cell from frontier
        let iterable = [...frontier.values()]
        let randomIndex = Math.floor(Math.random() * iterable.length)
        let frontierCell = iterable[randomIndex]

        if (frontierCell) {
            let randomConn = Math.floor(Math.random() * frontierCell.connections.length)
            let connectX = frontierCell.x + frontierCell.connections[randomConn].x
            let connectY = frontierCell.y + frontierCell.connections[randomConn].y
            // grid[connectY + 1][connectX + 1].color = "transparent"
        }

        //make the frontier cell the new current cell
        current = frontierCell
        if (frontier.size > 0) {
            // window.setTimeout(recursiveSpanningTree, 1);
            recursiveSpanningTree()
        }

    }

    return cells
}