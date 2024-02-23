// script.js

/* Get the canvas */
var canvas = document.getElementById("myCanvas");

/* Get the height and width of the window */
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/* Get the 2D context of the canvas */
var ctx = canvas.getContext("2d");

/* Fills or sets the color,gradient,pattern */
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.font = "50px Arial";
ctx.fillStyle = "green";

/* Writes the required text */
ctx.fillText(" Once upon a time, in a nondescript town with perfectly average weather, there lived an utterly unremarkable person named John. John had a completely mundane job at a small office, where he spent his days shuffling papers and staring at his computer screen. He had no hobbies, no passions, and no interesting quirks to speak of. Every morning, John woke up at precisely 7:00 AM to the sound of his alarm clock. He would then proceed to eat the same bland cereal he had eaten for breakfast every day for the past decade. After getting dressed in his dull grey suit, John would make the uneventful journey to his equally uneventful workplace.  At work, John would sit at his desk, typing away on his keyboard with an air of indifference. Occasionally, he would engage in meaningless small talk with his equally uninteresting coworkers about the weather or the latest episode of a forgettable sitcom.  At precisely 12:00 PM, John would take his lunch break, during which he would consume a bland turkey sandwich while staring blankly at his phone. After lunch, he would resume his monotonous tasks until 5:00 PM, when he would clock out and head home. Upon arriving home, John would reheat a frozen dinner in the microwave and eat it in front of the television, where he would watch mind-numbing reality shows until it was time for bed. And so, day after day, John lived his unremarkable life, never experiencing anything out of the ordinary or even remotely interesting. The end.", 500, 350)
let particles = [];

/* Initialize particle object */
class Particle {
	constructor(x, y, radius, dx, dy) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.dx = dx;
		this.dy = dy;
		this.alpha = 1;
	}
	draw() {
		ctx.save();
		ctx.globalAlpha = this.alpha;
		ctx.fillStyle = 'green';

		/* Begins or reset the path for 
		the arc created */
		ctx.beginPath();

		/* Some curve is created*/
		ctx.arc(this.x, this.y, this.radius,
			0, Math.PI * 2, false);

		ctx.fill();

		/* Restore the recent canvas context*/
		ctx.restore();
	}
	update() {
		this.draw();
		this.alpha -= 0.01;
		this.x += this.dx;
		this.y += this.dy;
	}
}

/* Timer is set for particle push 
	execution in intervals*/
setTimeout(() => {
	for (i = 0; i <= 150; i++) {
		let dx = (Math.random() - 0.5) * (Math.random() * 6);
		let dy = (Math.random() - 0.5) * (Math.random() * 6);
		let radius = Math.random() * 3;
		let particle = new Particle(575, 375, radius, dx, dy);

		/* Adds new items like particle*/
		particles.push(particle);
	}
	explode();
}, 30000);

/* Particle explosion function */
function explode() {

	/* Clears the given pixels in the rectangle */
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	particles.forEach((particle, i) => {
		if (particle.alpha <= 0) {
			particles.splice(i, 1);
		} else particle.update()
	})

	/* Performs a animation after request*/
	requestAnimationFrame(explode);
}
