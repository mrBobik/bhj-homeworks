let loader = document.getElementById("loader");

const showLoader = () => loader.classList.add("loader_active");
const hideLoader = () => loader.classList.remove("loader_active");

let items = document.getElementById("items");

function renderCurrency(currency, itemsElement) {
	let valutes = currency["response"]["Valute"];
	itemsElement.innerHTML = "";
	for (let valute in valutes) {
		let newItem = document.createElement("div");
		newItem.classList.add("item");

		let valuteCode = document.createElement("div");
		valuteCode.classList.add("item__code");
		valuteCode.append(valutes[valute]["CharCode"]);
		newItem.append(valuteCode);

		let valuteValue = document.createElement("div");
		valuteValue.classList.add("item__value");
		valuteValue.append(valutes[valute]["Value"]);
		newItem.append(valuteValue);

		let valuteCurrency = document.createElement("div");
		valuteCurrency.classList.add("item__currency");
		valuteCurrency.append("руб.");
		newItem.append(valuteCurrency);

		itemsElement.append(newItem);
	}
}

function requestOnLoadStart() {
	let previousCurrency = JSON.parse(window.localStorage.getItem("currency"));
	if (previousCurrency) renderCurrency(previousCurrency, items);
	showLoader();
}

function requestOnLoadEnd() {
	hideLoader();
	let response = this.response;
	renderCurrency(response, items);
	window.localStorage.setItem("currency", JSON.stringify(response));
}

function loadCurrency() {
	let myRequest = new XMLHttpRequest();
	myRequest.responseType = "json";
	myRequest.addEventListener("loadstart", requestOnLoadStart, false);
	myRequest.addEventListener("loadend", requestOnLoadEnd, false);
	myRequest.open("get", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
	myRequest.send();
}

loadCurrency();
