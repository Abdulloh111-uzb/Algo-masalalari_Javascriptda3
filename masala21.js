let x = Number(prompt('x:'))
let y = Number(prompt('y:'))
let z = Number(prompt('z:'))
let s = 0
let minn = 0

if (1 > x && 1 > y && 1 > z) {
    minn = Math.min(x,y,z)
    if (minn == x) {
        console.log(x = y + z / 2)
    }
    if (minn == y) {
        console.log(y = x + z / 2)
    }
    if (minn == z) {
        console.log(z = y + x / 2)
    }
}
else {
    console.log(x,y,z)
}
