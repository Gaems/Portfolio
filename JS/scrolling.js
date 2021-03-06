//animations for the about me section.S


function scrollPercentage(){
    let top = document.documentElement["scrollTop"];
    let fullHeight = document.documentElement["scrollHeight"];
    return ((top/(fullHeight - document.documentElement.clientHeight))*100)
}

let exampleAnimation = anime({
    targets: ".element",
    opacity: [1,0],
    easing: "linear",
    duration: 20000,
    autoplay:false
})


window.addEventListener("scroll", function(){
    let scrollPercent = scrollPercentage();
    console.log(scrollPercent);
    anime.remove(exampleAnimation);
    exampleAnimation.seek((scrollPercent / 100) * exampleAnimation.duration);
});


