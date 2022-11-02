"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, _width, _length) {
        super(x, y);
        this._width = _width;
        this._length = _length;
    }
    calculateArea() {
        console.log("Rectangle: ");
        return this._length * this._width;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    getInfo() {
        return (super.getInfo() + ` , width: ${this._width}, length: ${this._length}`);
    }
}
exports.Rectangle = Rectangle;
