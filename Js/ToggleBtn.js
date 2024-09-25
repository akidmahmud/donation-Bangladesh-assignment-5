
const donationBtn = document.getElementById("show-donation-btn");
const historyBtn = document.getElementById("show-history-btn");

// history button
historyBtn.addEventListener("click", function () {
  showSection("transaction-history");
  
  historyBtn.classList.add("bg-[rgb(180,244,97)]", "text-black");
  historyBtn.classList.remove("border-[rgba(17,17,17,0.3)]");

  donationBtn.classList.remove("bg-[rgb(180,244,97)]", "text-black");
  donationBtn.classList.add(
    "bg-[rgba(220,220,220,255)]"
  );
});

// Donation button
donationBtn.addEventListener("click", function () {
  showSection("donation-section");

  donationBtn.classList.add("bg-[rgb(180,244,97)]");
  donationBtn.classList.remove("bg-[rgba(220,220,220,255)]");

  historyBtn.classList.remove("bg-[rgb(180,244,97)]", "text-black");
  historyBtn.classList.add("border-[rgba(17,17,17,0.3)]");
});
