const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;
generateBtn.addEventListener("click", () => {
	let qrValue = qrInput.value.trim();
	console.log(qrValue)
	if(!qrValue || preValue === qrValue)
	return;
	preValue = qrValue;
	generateBtn.innerHTML = "Generating QR Code...";
	qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue} `;
	qrImg.addEventListener("load", () =>{
		wrapper.classList.add("active");
		generateBtn.innerHTML = "Generate QR Code";

	});


})

qrInput.addEventListener("keyup", () =>{
	if(!qrInput.value.trim()){
		wrapper.classList.remove("active");
		preValue = "";
	}
});




