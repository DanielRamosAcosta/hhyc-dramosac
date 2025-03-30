document.getElementById("guests").addEventListener("change", (e) => {
  const guests = Number(e.target.value);
  const originalGuests = Number(e.target.dataset.originalGuests);
  const amounts = document.querySelectorAll("[data-original-amount]");

  amounts.forEach((amount) => {
    const originalAmount = Number(amount.dataset.originalAmount);
    const originalAmountPerGuest = originalAmount / originalGuests;
    const newAmount = originalAmountPerGuest * guests;
    
    amount.innerText = newAmount.toLocaleString("es-ES", {
      maximumFractionDigits: 2
    });
  })
});
