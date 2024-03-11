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

gsap.from(".to_top", {
    y: 50,
    repeat: -1,
    yoyo: true,
    duration: 0.3,
})


// loader
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var loadingScreen = document.getElementById("loading-screen");
        var contentElements = document.getElementsByClassName("content");
        loadingScreen.style.display = "none";
    }, 3000);
});


