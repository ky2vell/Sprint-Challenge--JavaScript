// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(dimensions) {
        this.length = dimensions.length;
        this.width = dimensions.width;
        this.height = dimensions.height;
    }


    volume() {
        return this.length * this.width * this.height
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(dimensions) {
        super(dimensions);
    }

    surfaceArea() {
        return Math.pow(this.length, 2) * 6;
    }
}

const cube = new CubeMaker({
    length: 10,
    width: 10,
    height: 10
});

console.log(cube.volume());
console.log(cube.surfaceArea());