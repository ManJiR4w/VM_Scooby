document.arrive('.modal-body', (goalWindow) => {
  const audioUrl = 'https://cdn.jsdelivr.net/gh/ManJiR4w/VM_Scooby@main/scooby_doo-7b4c6d29-08b2-3df1-9780-1b555d597c0b.mp3';
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
