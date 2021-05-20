const RGBMode = require('./RGBMode');

module.exports = class SolidColorMode extends RGBMode {
	constructor(r, g, b) {
		super();

		this.type = 'solid';
		this._color = this.chroma(r, g, b, 'rgb').hsl();
	}

	get color() {
		return this.chroma(...this.hueColor, 'hsl').rgb();
	}

	setColor(...chromaArguments) {
		this.color = this.chroma(...chromaArguments).rgb();

		return this;
	}

	setHue(hue) {
		let old = this.hueColor.concat([]); // copy color
		old[0] = hue;

		this.hueColor = old;

		return this;
	}

	/**
	 * Set color saturation
	 * @param {number} saturation Saturation (0.0...1.0)
	 */
	setSaturation(saturation) {
		let old = this.hueColor.concat([]); // copy color
		old[1] = saturation;

		this.hueColor = old;

		return this;
	}

	/**
	 * Set color brightness
	 * @param {number} brightness Brightness (0.0...1.0)
	 */
	setBrightness(brightness) {
		let old = this.hueColor.concat([]); // copy color
		old[2] = brightness;

		this.hueColor = old;

		return this;
	}

	tick() {
		// ignore tick, color stays
		
	}
}