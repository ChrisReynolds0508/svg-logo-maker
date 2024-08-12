
const shapes = require('./shapes');
describe('Circle', () => {
    test('should render a circle with default text content if no content is set', () => {
        const circle = new shapes.Circle();
        expect(circle.getSVGText()).toBe('<text x="150" y="125" font-size="60" fill="" text-anchor="middle"></text>');
    });

    test('should render a circle with the specified text content', () => {
        const circle = new shapes.Circle('Hello', 'black', 'red');
        expect(circle.getSVGText()).toBe('<text x="150" y="125" font-size="60" fill="black" text-anchor="middle">Hello</text>');
    });
});

describe('Square', () => {
    test('should render a square with default text content if no content is set', () => {
        const square = new shapes.Square();
        expect(square.getSVGText()).toBe('<text x="150" y="125" font-size="60" fill="" text-anchor="middle"></text>');
    });

    test('should render a square with the specified text content', () => {
        const square = new shapes.Square('World', 'black', 'blue');
        expect(square.getSVGText()).toBe('<text x="150" y="125" font-size="60" fill="black" text-anchor="middle">World</text>');
    });
});

describe('Triangle', () => {
    test('should render a triangle with default text content if no content is set', () => {
        const triangle = new shapes.Triangle();
        expect(triangle.getSVGText()).toBe('<text x="150" y="125" font-size="60" fill="" text-anchor="middle"></text>');
    });

    test('should render a triangle with the specified text content', () => {
        const triangle = new shapes.Triangle('Copilot', 'black', 'green');
        expect(triangle.getSVGText()).toBe('<text x="150" y="125" font-size="60" fill="black" text-anchor="middle">Copilot</text>');
    });
});
