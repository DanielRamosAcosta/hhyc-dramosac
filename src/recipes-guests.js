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

function loadYouTube(container) {
  const id = container.dataset.ytId;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  iframe.width = 560;
  iframe.height = 315;
  iframe.title = "YouTube video player";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.classList.add('video');
  container.replaceWith(iframe);
}
