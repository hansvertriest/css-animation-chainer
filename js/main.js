const box = document.getElementById('box');
const box2 = document.getElementById('box2');



const start = () => {
	const chain = new Chain();
	chain
	.thenAnimate({
		element:box,
		duration:0.6, 
		cssInitial: {top: "0px"},
		cssEnd: {top: "600px"},
		// delay: 0.5,
	}).andAnimate({
		element:box2,
		duration: 3, 
		cssInitial: {top: "0px"},
		cssEnd: {top: "300px"},
	}).thenAnimate({
		element:box,
		duration: 0.6, 
		cssInitial: {top: "0px"},
		cssEnd: {top: "300px"},
	})
}