//1
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        this._radius = newRadius;
    }

    get diameter() {
        return this._radius * 2;
    }

    area() {
        return Math.PI * Math.pow(this._radius, 2);
    }

    circumference() {
        return 2 * Math.PI * this._radius;
    }
}

let myCircle = new Circle(5);
console.log('Радіус: ' + myCircle.radius);
myCircle.radius = 10;
console.log('Новий радіус: ' + myCircle.radius);
console.log('Діаметр: ' + myCircle.diameter);
console.log('Площадь: ' + myCircle.area());
console.log('Довжина кола: ' + myCircle.circumference());


//3
class CssClass {
    constructor(name) {
        this.className = name;
        this.styles = {};
    }

    changeStyle (property, value) {
        this.styles[property] = value;
    }

    removeStyle(property) {
        delete this.styles[property];
    }

    getCss() {
        let css = `.${this.className} {\n`;
        for (const property in this.styles) {
            css += `  ${property}: ${this.styles[property]};\n`;
        }
        css += `}`;
        return css;
    }
}
document.getElementById('element');
const cssClass = new CssClass('example-class');


cssClass.changeStyle('background-color', 'blue');
cssClass.removeStyle('font-size');

const css = cssClass.getCss();
console.log(css);