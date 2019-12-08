class DPITool {
    constructor(sensitivity, dpi, fov) {
        this.sensitivity = sensitivity
        this.dpi = dpi
        this.fov = fov
    }

    setWindowResolution(width, height) {
        this.windowWidth = width
        this.windowHeight = height
        this.ratio = width / height
    }
        
    getInchPer360() {
        return (360 * 10 / 3) / (this.dpi * this.sensitivity * 0.022)
    }

    getCmPer360() {
        return 2.54 * this.getInchPer360()
    }

    getRawdotPerDegree() {
        return this.dpi * this.getInchPer360() / 360
    }
    
    getDotPerDegree() {
        return this.getRawdotPerDegree() / 2
    }
    
    isPixelSkipping() {        
        let pixelDegree = this.ratio * this.windowHeight / this.fov
        let dotPerDegree = this.getDotPerDegree()

        return (pixelDegree > dotPerDegree)
    }
}

exports.DPITool = DPITool