class Chain {
	constructor() {
		// this.time = date.now().getTime();
		this.defaultEasingFunction = 'cubic-bezier(0.12, 0, 0.39, 0)';
		this.time = 0;

		this.animationsLog = [];
	}

	andAnimate(props) {
		let { element, duration, cssInitial, cssEnd, easingFunction, delay } = props;
		if (!easingFunction) easingFunction = this.defaultEasingFunction;
		if (!delay) delay = 0;

		const durationMs = duration * 1000;
		const delayMs = delay * 1000;

		// set inital css
		if (cssInitial) {
			const cssInitialProperties = Object.keys(cssInitial);
			cssInitialProperties.forEach((property) => {
				console.log(cssInitial[property])
				element.style[property] = cssInitial[property];
			});
		}

		// set transition
		const cssEndProperties = Object.keys(cssEnd);
		cssEndProperties.forEach((property) => {
			element.style.transition = `${property} ${duration}s ${easingFunction}`;
		});

		// set timeOut
		const previousAnimationTime = this.animationsLog.length - 1;
		setTimeout(() => {
			cssEndProperties.forEach((property) => {
				element.style[property] = cssEnd[property];
			});
		}, this.time - this.animationsLog[previousAnimationTime].time + delayMs);

		// add time to this.time
		this.time = this.time + durationMs + delayMs;

		// add to animationsLog
		this.animationsLog.push({element, css: cssEnd, time: this.time});
		// setup animation
		return this;
	}

	thenAnimate(props) {
		let { element, duration, cssInitial, cssEnd, easingFunction, delay } = props;
		if (!easingFunction) easingFunction = this.defaultEasingFunction;
		if (!delay) delay = 0;

		const durationMs = duration * 1000;
		const delayMs = delay * 1000;

		// set inital css
		if (cssInitial) {
			const cssInitialProperties = Object.keys(cssInitial);
			cssInitialProperties.forEach((property) => {
				element.style[property] = cssInitial[property];
			});
		}

		// set transition
		const cssEndProperties = Object.keys(cssEnd);
		cssEndProperties.forEach((property) => {
			element.style.transition = `${property} ${duration}s ${easingFunction}`;
		});

		// set timeOut
		setTimeout(() => {
			console.log('did animation')
			cssEndProperties.forEach((property) => {
				element.style[property] = cssEnd[property];
			});
		}, this.time + delayMs);

		// add time to this.time
		this.time = this.time + durationMs + delayMs;

		// add to animationsLog
		this.animationsLog.push({element, css: cssEnd, time: this.time});
		// setup animation
		return this;
	}
}