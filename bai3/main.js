//  api thay đổi tiền tệ
const api = "https://api.exchangerate-api.com/v4/latest/USD";
// chọn các điều kiện khác nhau
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// tiền tệ được thay đổi
fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Sự kiện khi tiền tệ được thay đổi
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});
search.addEventListener('input', updateValue);

//  cập nhật giá trị
function updateValue(e) {
	searchValue = e.target.value;
}
// người dùng nhấp vào, nó sẽ gọi hàm getresults
convert.addEventListener("click", getResults);

// kq chức năng
function getResults() {
	fetch(`${api}`)
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}
// hiển thị kết quả sau khi chuyển đổi
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
	((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}
