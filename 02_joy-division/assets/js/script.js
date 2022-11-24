let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

let size = window.innerWidth
let dpr = window.devicePixelRatio

canvas.width = size * dpr
canvas.height = size * dpr
context.scale(dpr, dpr)
context.lineWidth = 2

let step = 10
let lines = []

// Creating lines and points
for (let i = step; i <= size - step; i += step) {
    let line = []
    for (let j = step; j <= size - step; j += step) {
        let random = Math.random() * 10
        let point = {x: j, y: i + random}
        line.push(point)
    }
    lines.push(line)
}

// Draw
for (let i = 0; i < lines.length; i++) {
    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y)

    for (let j = 0; j < lines[i].length; j++) {
        context.lineTo(lines[i][j].x, lines[i][j].y)
    }
    context.stroke()
}