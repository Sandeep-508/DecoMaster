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
        document.getElementById("loading-screen").style.display = "none";
        document.getElementsByClassName("content").style.display = "block";
    }, 3000);
});

// gsap.from("#header", {
//     scale: 0,
//     duration: 2,
//     y: -155,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: "#header"
//     }
// })