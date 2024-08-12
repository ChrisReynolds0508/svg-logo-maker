const filesystem = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    async generateLogo() {
        try {
            const userInput = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter up to three characters for the logo text:',
                    validate: function (input) {
                        return input.length <= 3 ? true : 'Please enter up to three characters.';
                    },
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter the text color (keyword or hexadecimal number):',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape for the logo:',
                    choices: ['circle', 'triangle', 'square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter the shape color (keyword or hexadecimal number):',
                },
            ]);

            this.textElement = userInput.text;
            this.shapeElement = userInput.shape;

            const svgContent = this.generateSvgContent(userInput.textColor, userInput.shapeColor);
            this.saveSvgToFile(svgContent);

            console.log('Generated logo.svg');
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    generateSvgContent(textColor, shapeColor) {
        let svgContent = '';
        let textContent = this.textElement;
        switch (this.shapeElement) {
            case 'circle':
                const circle = new Circle(textContent, textColor, shapeColor);
                svgContent += circle.render();
                break;
            case 'triangle':
                const triangle = new Triangle(textContent, textColor, shapeColor);
                svgContent += triangle.render();
                break;
            case 'square':
                const square = new Square(textContent, textColor, shapeColor);
                svgContent += square.render();
                break;
        }

        

        return svgContent;
    }

    saveSvgToFile(svgContent) {
        filesystem.writeFileSync('logo.svg', svgContent);
        
    }

}

const svgLogoMaker = new Svg();
svgLogoMaker.generateLogo();
svgLogoMaker.generateSvgContent();
