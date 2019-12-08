const test = require('tape')
const app = require('../index')

test("400 DPI, 10 sens, 103 fov in 1920x1080", (t) => {    
    let dpi = 400
    let sensitivity = 10
    let fov = 103

    let dpiTool = new app.DPITool(sensitivity, dpi, fov) 
    dpiTool.setWindowResolution(1920, 1080)

    t.assert(dpiTool.isPixelSkipping() === true, "Should Pixel Skip")
    t.end()
})

test("1600 DPI, 2.5 sens, 103 fov in 1920x1080", (t) => {
    let dpi = 1600
    let sensitivity = 2.5
    let fov = 103

    let dpiTool = new app.DPITool(sensitivity, dpi, fov)
    dpiTool.setWindowResolution(1920, 1080)

    t.assert(dpiTool.isPixelSkipping() === false, "Should Not Pixel Skip")
    t.end()
})

test('400 DPI, 10 sens and 1600 DPI, 2.5 sens in 103 fov', (t) => {
    let dpiOne = new app.DPITool(10, 400, 103)
    let dpiTwo = new app.DPITool(10, 400, 103)

    dpiOne.setWindowResolution(1920, 1080)
    dpiTwo.setWindowResolution(1920, 1080)

    t.assert(dpiOne.getInchPer360() === dpiTwo.getInchPer360(), 
        "Should have same inch per 360°")
    t.end()
})