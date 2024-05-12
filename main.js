const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let radius = 50;

canvas.addEventListener('wheel', (e) => {
	radius -= Math.sign(e.deltaY) * 10;
	radius = Math.max(10, radius);
	showIntent(e.clientX, e.clientY, radius);
});

canvas.addEventListener('pointerdown', (e) => {
	ctx.fillStyle = '#05F';
	if (e.button === 0) {
		ctx.globalCompositeOperation = 'source-over';
	} else {
		ctx.globalCompositeOperation = 'destination-out';
	}
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI);
	ctx.fill();
});

canvas.addEventListener('pointermove', (e) => {
	showIntent(e.clientX, e.clientY, radius);
});

canvas.addEventListener('contextmenu', (e) => {
	e.preventDefault();
});

function showIntent(x, y, radius) {
	const circle = document.getElementById('circle');
	circle.style.left = x - radius + 'px';
	circle.style.top = y - radius + 'px';
	circle.style.width = radius * 2 + 'px';
	circle.style.height = radius * 2 + 'px';
}
