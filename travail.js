const knightMoves = (start, end) => {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

    let queue = [[start, [start]]];
    let visited = new Set([start.toString()]);

    while (queue.length) {
        const [current, path] = queue.shift();

        if (current.toString() === end.toString()) {
            console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(position => console.log(position));
            return path;
        }

        for (let [dx, dy] of moves) {
            const nextMove = [current[0] + dx, current[1] + dy];

            if (isValid(nextMove) && !visited.has(nextMove.toString())) {
                visited.add(nextMove.toString());
                queue.push([nextMove, [...path, nextMove]]);
            }
        }
    }
};

knightMoves([3, 3], [4, 3]);
