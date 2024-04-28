const x = document.getElementById("dolphin");

const data = document.querySelector(".block-animal").childNodes[1];
console.log("data", data);
x.addEventListener("mousemove", function (ev) {
	data.style.position = "fixed";
	data.style.left = `${ev.clientX}px`;
	data.style.top = `${ev.clientY}px`;
});

addEventListener("mousemove", (event) => {
	const data = document.getElementById("dolphin");
	data.style.left = `${event.clientX}px`;
	data.style.top = `${event.clientY}px`;
});