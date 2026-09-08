document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("https://t.me/harthnbl");
    toast.textContent = "Telegram link copied!";
  } catch {
    toast.textContent = "https://t.me/harthnbl";
  }
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
});
