const themeToggle = document.querySelector(".them-logo");

(()=>{
const saveTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const isDarkTheme = saveTheme === "dark" || (!saveTheme && systemPrefersDark)
document.body.classList.toggle("dark-theme", isDarkTheme);
themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun":"fa-solid fa-moon"
})();
const toggleTheme = () =>{
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun":"fa-solid fa-moon"
}

themeToggle.addEventListener("click", toggleTheme)

