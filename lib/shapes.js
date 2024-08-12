class Shape{
    constructor(textContent, textColor, shapeColor){
        this.setShapeColor(shapeColor);
        this.setTextColor(textColor);
        this.setTextContent(textContent);
    }
    setShapeColor(color){
        this.shapeColor = color;
    }
    setTextColor(color){
        this.textColor = color;
    }
    setTextContent(text){
        this.textContent = text;
    }
    getSVGText(){
        if (!this.textColor) {
            this.textColor = "";
        }
        if (!this.textContent) {
            this.textContent = "";
        }
        return `<text x="150" y="125" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.textContent}</text>`;
    }
    getSVG(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.getShape()} ${this.getSVGText()}</svg>`;
    }
    render(){
        return this.getSVG()
        
    }
    getShape(){
      return '';      
    }
}

class Circle extends Shape{
   
        getShape(){
            return `<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="${this.shapeColor}" />`;
        }
    }

class Square extends Shape{
    getShape(){
        return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />` }
}

class Triangle extends Shape{
    getShape(){
        return `<polygon points="150, 18 244, 182 56,182" fill="${this.shapeColor}" />` }
}

module.exports = {Circle, Square, Triangle}
