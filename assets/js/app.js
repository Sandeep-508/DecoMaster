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
// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         // var contentElements = document.getElementsByClassName("content");
//         loadingScreen.style.display = "none";
//         let content_elements = ["#header", "#choose_us", "#gallery", "#welcome", "#service", "#our_services", "#insipitation", "#team", "#testinom", "#footer"];
//         for (var i = 0; i < content_elements.length; i++) {
//             gsap.from(content_elements[i], {
//                 scale: 0,
//                 duration: 2,
//                 y: -155,
//                 opacity: 0,
//                 scrollTrigger: {
//                     trigger: content_elements[i],
//                     start: "top 50%",
//                 }
//             });
//         }
//     }, 3000);
// });

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var loadingScreen = document.getElementById("loading-screen");
        var contentElements = document.getElementsByClassName("content");
        loadingScreen.style.display = "none";
    }, 3000);
});


