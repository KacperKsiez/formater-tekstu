function randomColor() {
	let a, b, c;
	a = Math.random() * 255;
	b = Math.random() * 255;
	c = Math.random() * 255;

	return `rgb(${a}, ${b}, ${c})`;
}

const DOMStrings = {
	btnBold: ".editor__item--bold",
	btnItalics: ".editor__item--italics",
	btnSup: ".editor__item--sup",
	btnSub: ".editor__item--sub",
	btnline: ".editor__item--line",

	iconBold: ".editor__item--bold-icon",
	iconItalics: ".editor__item--italics-icon",
	iconSup: ".editor__item--sup-icon",
	iconSub: ".editor__item--sub-icon",
	iconLine: ".editor__item--line-icon",

	btnSubmit: ".editor__submit",
	editorItem: ".editor__item",

	readyTextArea: ".content__textarea",
	userTextArea: ".editor__textarea",
};

class UIController {
	constructor() {
		this.readyTextArea = document.querySelector(DOMStrings.readyTextArea);
	}
	setBtnStatus(el, type) {
		let btn = document.querySelector(el);
		switch (type) {
			case true:
				btn.classList.remove("bi-circle");
				btn.classList.add("bi-check-circle");
				break;
			case false:
				btn.classList.remove("bi-check-circle");
				btn.classList.add("bi-circle");
				break;
			default:
				break;
		}
	}
	insertToReadyArea(text) {
		this.readyTextArea.innerHTML = text;
	}
	setReadyTextAreaStyles(obj) {
		if (obj.bold) {
			this.readyTextArea.style.fontWeight = 900;
		} else {
			this.readyTextArea.style.fontWeight = 400;
		}
		if (obj.italics) {
			this.readyTextArea.style.fontStyle = "italic";
		} else {
			this.readyTextArea.style.fontStyle = "normal";
		}

		if (obj.sub) {
			this.readyTextArea.style.fontSize = "0.8em";
		} else {
			this.readyTextArea.style.fontSize = "1em";
		}

		if (obj.line) {
			this.readyTextArea.style.textDecorationLine = "line-through";
		} else {
			this.readyTextArea.style.textDecorationLine = "none";
		}
		if (obj.sup) {
			this.readyTextArea.style.color = randomColor();
		} else {
			this.readyTextArea.style.color = "#111";
		}
	}
}
let ui = new UIController();

class Controller {
	constructor(uictrl) {
		this.uictrl = new uictrl();
		this.setupListeners();
		this.clicked = {
			bold: false,
			italics: false,
			sup: false,
			sub: false,
			line: false,
		};
		this.userText = document.querySelector(DOMStrings.userTextArea);
		console.log(this.userText);
	}
	switchIcon(name) {
		switch (name) {
			case "bold":
				if (this.clicked[name]) {
					this.clicked[name] = false;
					this.uictrl.setBtnStatus(DOMStrings.iconBold, false);
				} else {
					this.clicked[name] = true;
					this.uictrl.setBtnStatus(DOMStrings.iconBold, true);
				}
				break;

			case "italics":
				if (this.clicked[name]) {
					this.clicked[name] = false;
					this.uictrl.setBtnStatus(DOMStrings.iconItalics, false);
				} else {
					this.clicked[name] = true;
					this.uictrl.setBtnStatus(DOMStrings.iconItalics, true);
				}
				break;
			case "sup":
				if (this.clicked[name]) {
					this.clicked[name] = false;
					this.uictrl.setBtnStatus(DOMStrings.iconSup, false);
				} else {
					this.clicked[name] = true;
					this.uictrl.setBtnStatus(DOMStrings.iconSup, true);
				}
				break;
			case "sub":
				if (this.clicked[name]) {
					this.clicked[name] = false;
					this.uictrl.setBtnStatus(DOMStrings.iconSub, false);
				} else {
					this.clicked[name] = true;
					this.uictrl.setBtnStatus(DOMStrings.iconSub, true);
				}
				break;
			case "line":
				if (this.clicked[name]) {
					this.clicked[name] = false;
					this.uictrl.setBtnStatus(DOMStrings.iconLine, false);
				} else {
					this.clicked[name] = true;
					this.uictrl.setBtnStatus(DOMStrings.iconLine, true);
				}
				break;
			default:
				break;
		}
	}
	setupListeners() {
		document
			.querySelector(DOMStrings.btnBold)
			.addEventListener("click", () => {
				this.switchIcon("bold");
			});

		document
			.querySelector(DOMStrings.btnItalics)
			.addEventListener("click", () => {
				this.switchIcon("italics");
			});
		document
			.querySelector(DOMStrings.btnSup)
			.addEventListener("click", () => {
				this.switchIcon("sup");
			});
		document
			.querySelector(DOMStrings.btnSub)
			.addEventListener("click", () => {
				this.switchIcon("sub");
			});
		document
			.querySelector(DOMStrings.btnline)
			.addEventListener("click", () => {
				this.switchIcon("line");
			});
		document
			.querySelector(DOMStrings.btnSubmit)
			.addEventListener("click", () => {
				this.runUpdate();
			});
	}
	runUpdate() {
		this.uictrl.insertToReadyArea(this.userText.value);
		this.uictrl.setReadyTextAreaStyles(this.clicked);
	}
}
let ctrl = new Controller(UIController);
