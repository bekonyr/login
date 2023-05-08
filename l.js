const form = document.querySelector(".form");
const email = document.querySelector(".email");
const password = document.querySelector(".pass");
const btn = document.querySelector(".add");
const h4 = document.querySelector("h4");
const h3 = document.querySelector("h3");
email.placeholder = "email";
password.placeholder = "password";
let count = 4;
console.log(count);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(e);
	if (email.value === "motionweb@gmail.com" && password.value === "1234") {
		h4.innerHTML = "welcome!";
		h4.style.color = "green";
		email.value = "";
		password.value = "";
	} else {
		if (email.value === "" || password.value === "") {
			count + 1;
			h3.innerHTML = "бош орундарды толтурунуз!!";
			h3.style.color = "red";
		}
		if (
			email.value !== "" &&
			password.value !== "" &&
			email.value !== "motionweb@gmail.com" &&
			password.value !== "1234"
		) {
			count--;
			h3.innerHTML = "";
			h4.innerHTML = "туура эмес 'email' же 'password'";
			h4.style.color = "red";
		}
		if (count === 2) {
			h4.innerHTML = `сизде ${count} шанс калды`;
			h4.style.color = "green";
		}
		if (count === 1) {
			h4.innerHTML = `сизде ${count} шанс калды`;
			h4.style.color = "yellow";
		}
		if (count === 0) {
			h4.innerHTML = "доступ закрыт!!!";
			h4.style.color = "red";
			btn.setAttribute("disabled", "disabled");
		}
	}
});
