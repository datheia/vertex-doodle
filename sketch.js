var coords = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(5);
	var a = new URL(window.location.href);
	maxVertices = a.searchParams.has('vertices')
		? a.searchParams.get('vertices')
		: 4;
}
function draw() {
	if (
		(coords.length > maxVertices && (coords = []),
		coords.length == maxVertices - 1)
	) {
		coords.push(coords[0]);
		beginShape();
		for (var a = 0; a < coords.length; a++)
			vertex(coords[a][0], coords[a][1], coords[a][2]);
		endShape(CLOSE);
	}
	background(5);
	stroke(255);
	noFill();
	beginShape();
	for (a = 0; a < coords.length; a++) vertex(coords[a][0], coords[a][1]);
	endShape();
}
function mouseReleased(a) {
	!1 === a.ctrlKey && coords.push([a.x, a.y]);
	!0 === a.ctrlKey && (coords = []);
}
