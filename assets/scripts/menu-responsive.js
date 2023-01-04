const menuHamburgue = document.querySelector(".menu-hamburgue");
const links = document.querySelectorAll(".menu-links .link");
const menu = document.querySelector(".menu");

const controlAnimate = () => {
    const menuLinks = document.querySelectorAll(".menu-links li");
    menuLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            const calcTempEntry = index / 6 + 0.3;
            link.style.animation = `tracking-in-expand-fwd 0.5s ease forwards ${calcTempEntry}s`;
        }
    });
}

const controlOverflow = () => {
    const menuActive = menu.classList.contains("active")
    document.body.style.overflow = menuActive ? "hidden" : "initial";
}

menuHamburgue.addEventListener("click", () => {
    menu.classList.toggle("active");
    controlOverflow();
    controlAnimate();
});

links.forEach(link => link.addEventListener("click", () => {
    const larguraTela = window.innerWidth;
    if (menu.classList.contains("active") && larguraTela <= 775) {
        menu.classList.remove("active");
        controlOverflow();
        controlAnimate();
    }
}));