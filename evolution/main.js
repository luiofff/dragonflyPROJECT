function active() {
    const scrollPosition = window.scrollY > 1520;
    document.querySelector(".vodorosl1").classList.toggle("active", scrollPosition);
    document.querySelector(".vodorosl2").classList.toggle("active", scrollPosition);
}

window.addEventListener('scroll', active)