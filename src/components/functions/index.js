export function BreadthFirstSearch(tree, rootNode, searchValue) {
    //make a queue array
    let queue = []
    let path = []

    //populate it with the root node of my search
    queue.push(rootNode)

    //search the queue until it's empty
    while (queue.length > 0) {
        //traverse the nodes, returning the desired node if found
        let currentNode = queue[0]
        path.push(currentNode.value)

        if (currentNode.value === searchValue) {
            return path
        }

        //if currentNode has a left child add it to the queue
        if (currentNode.left !== null) {
            queue.push(tree[currentNode.left])
        }

        //if currentNode has a right child add it to the queue
        if (currentNode.right !== null) {
            queue.push(tree[currentNode.right])
        }

        //if currentNode has an up child add it to the queue
        if (currentNode.up !== null) {
            queue.push(tree[currentNode.up])
        }

        //remove currentNode from the queue
        queue.shift()
    }
    console.log('sorry not solvable ')

}

