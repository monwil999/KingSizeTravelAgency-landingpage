document
  .getElementById("destination_interest")
  .addEventListener("change", function () {
    const regionContainer = document.getElementById("region-container");
    const selectedValue = this.value;

    if (selectedValue === "Europe") {
      regionContainer.style.display = "block";
      document.getElementById("region").setAttribute("required", "true");
    } else {
      regionContainer.style.display = "none";
      document.getElementById("region").removeAttribute("required");
    }
  });
document.querySelector(".js-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const resultMessage = document.querySelector(".js-result");
  resultMessage.style.display = "block";
});
