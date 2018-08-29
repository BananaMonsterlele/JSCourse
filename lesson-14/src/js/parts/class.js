function classFoo(){
	class options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		newBlock (){
			let div = document.createElement('div');
			div.innerHTML = 'This text shouldnt be good and it is';
			div.style.cssText = `
				height: ${this.height}px;
				width: ${this.width}px;
				background: ${this.bg};
				font-size: ${this.fontSize}px;
				text-align: ${this.textAlign};
			`;
			document.body.appendChild(div);
		}
	}

	const Div = new options(100, 1000, '#fff', 32, 'center');

	Div.newBlock();
}

module.exports = classFoo;