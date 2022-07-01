"use strict";

//task 1

function parseCount(value) {
    let num = Number.parseInt(value);

    if (isNaN(num)) {
        throw new Error('Невалидное значение');
    }

    return num;
}

function validateCount(value) {
    try {
        let num = parseCount(value);
        return num;
    } catch (err) {
        return err;
    }
}

//task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
        return Number(S);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        }
    }
}