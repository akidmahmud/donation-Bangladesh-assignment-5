function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  return textValue;
}

function showSection(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("transaction-history").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");


  
}

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("pop-up-donation").classList.add("hidden");
});

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
  document.getElementById("my-balance-reload").innerText = parseFloat(
    getTextFieldValueById("my-balance")
  );
});
