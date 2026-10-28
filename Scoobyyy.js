document.arrive('.modal-body', (goalWindow) => {
  const audioUrl = 'https://cdn.jsdelivr.net/gh/ManJiR4w/VM_Scooby@main/scooby-doo-intro.mp3';
  goalWindow.querySelectorAll('[type="button"]').forEach(btn => {
    const text = btn.innerText.trim();
    if (btn.dataset.sound) return;
    if (text.includes("Resolve") || text.includes("Acknowledge")) {
      btn.dataset.sound = "1";
      btn.addEventListener("click", () => {
        new Audio(audioUrl).play();
      });
    }
  });
});
