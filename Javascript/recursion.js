let garden = [[0, 1, 1], [0, 1, 1], [0, 1, 1], [0, 1, 1], [0, 0, 1]];
const result = [];
let path = [];

let gardenPath = function (x, y, garden) {
    if (garden[x][y] === 1) {
        if (x === 4) {
            path = [];
        }
    }
    else {
        path.push(y);
        if (x === 4) {
            // let temp = path.slice();
            result.push(path.slice());
            path.pop();
        } else {
            for (let i = 0; i < 3; i++) {
                gardenPath(x + 1, i, garden);
            }
            path.pop();
        }
    }
}

for (let i = 0; i < 3; i++) {
    if (garden[0][i] === 0) {
        path = [];
        gardenPath(0, i, garden);
    }
}

console.log('input:');
console.log(garden);
console.log('output:');
console.log(result);