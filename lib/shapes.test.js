const shapes = require('./shapes');

describe('Circle', () => {
    test('should render a circle with default color if no color is set', () => {
        const circle = new shapes.Circle();
        expect(circle.render()).toBe(`<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="" />`);
    });

    test('should render a circle with the specified color', () => {
        const circle = new shapes.Circle();
        let color = 'red';
        circle.setColor(color);
        expect(circle.render()).toBe('<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="red" />');
    });
});

describe('Square', () => {
    test('should render a square with default color if no color is set', () => {
        const square = new shapes.Square();
        expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="" />');
    });

    test('should render a square with the specified color', () => {
        const square = new shapes.Square();
        let color = 'blue';
        square.setColor(color);
        expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="blue" />');
    });
});

describe('Triangle', () => {
    test('should render a triangle with default color if no color is set', () => {
        const triangle = new shapes.Triangle();
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56,182" fill="" />');
    });

    test('should render a triangle with the specified color', () => {
        const triangle = new shapes.Triangle();
        let color = 'green';
        triangle.setColor(color);
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56,182" fill="green" />');
    });
});

