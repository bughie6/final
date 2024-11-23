// script.js
// script.js
document.getElementById("go-button").addEventListener("click", () => {
  const country = document.getElementById("country").value;
  const language = document.getElementById("language").value;
  alert(`You selected:\nCountry: ${country}\nLanguage: ${language}`);
});
