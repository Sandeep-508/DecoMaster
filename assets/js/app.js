window.addEventListener("scroll", () => {
    let scroll_top = document.querySelector(".scroll_to_top");
    let scrollPt = 200;

    if (window.scrollY > scrollPt) {
        scroll_top.style.display = "block";
    } else {
        scroll_top.style.display = "none";
    }

    scroll_top.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});