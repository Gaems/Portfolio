
// Functions for percentage and link activity

function scrollPercentage(){
    let top = document.documentElement["scrollTop"];
    let fullHeight = document.documentElement["scrollHeight"];
    return ((top/(fullHeight - document.documentElement.clientHeight))*100)
}

function linksActive (active, collection) {
    if (active == true){
        for (let i = 0; i < collection.length; i++){
            collection[i].style.pointerEvents = "auto";
        }
    } else if (active == false){
        for (let i = 0; i < collection.length; i++){
            collection[i].style.pointerEvents = "none";
        }
    }
}

// The animation code for elements on scroll
// sceneOne
let sceneOneOut = anime({
    targets: ".sceneOne",
    opacity: [1,0],
    easing: "linear",
    duration:100,
    autoplay:false
})

//sceneTwo


//fading in
let sceneTwoIn = anime.timeline({
    easing:"linear",
    autoplay:false,
    zIndex: 6,
})
.add({
    targets: ".sceneTwo#titleBlock",
    duration:100,
    opacity: 1,
    left: "22%",

})
.add({
    targets: ".sceneTwo#personalStatement",
    duration:100,
    opacity: 1,
    left: "25%",
    
})


let sceneTwoOut = anime.timeline({
    autoplay:false,
    easing: "linear",
    zIndex:4
})
.add({
    targets: ".sceneTwo#titleBlock",
    duration:100,
    opacity: [1,0],
    left: ["22%", "20%"]
})
.add({
    targets: ".sceneTwo#personalStatement",
    duration:100,
    opacity: [1,0],
    left: ["25%","10%"]
})




//sceneThree


let sceneThreeBars = anime.timeline({
    easing: "linear",
    autoplay:false,
    duration: 1000
})
.add({
    targets: "#Python",
    width: "50%"
})
.add({
    targets: "#HTML",
    width: "55%"
}, "-= 600")
.add({
    targets: "#CSS",
    width: "55%"
}, "-= 600")
.add({
    targets: "#JavaScript",
    width: "25%"
}, "-= 600")
.add({
    targets: "#Cpp",
    width: "15%"
}, "-= 600")


let sceneThreeIn = anime.timeline({
    duration:100,
    easing:"linear",
    autoplay:false
})
.add({
    targets: ".sceneThree#titleBlock",
    opacity: [0,1],
    top: "15%"
})
.add({
    targets: ".sceneThree#skillContainer, .skillBar",
    opacity: [0,1],
    top: "30%"
})

let sceneThreeOut = anime.timeline({
    autoplay:false,
    easing: "linear",
})
.add({
    targets: ".sceneThree#titleBlock",
    duration:100,
    opacity: [1,0],
    top: ["15%", "0%"]
})
.add({
    targets: ".sceneThree#skillContainer, .skillBar",
    duration:100,
    opacity: [1,0],
    top: ["30%","0%"]
})



//sceneFour

let sceneFourIn = anime.timeline({
    easing: "linear",
    autoplay:false,
    zIndex: 6
})
.add({
    targets: ".sceneFour#titleBlock",
    opacity: [0,1],
    left: "30%"
})
.add({
    targets: ".sceneFour#workHistory",
    opacity:[0,1],
    left: "35%"
})
.add({
    targets: ".sceneFour#cvDownload",
    opacity: [0,1],
})

//COMPY PASTED TEMPLATE ANIMATION IN CASE I ADD ANOTHER BEFORE I CLEAN UP THE CODE.
// let sceneFourOut = anime.timeline({
//     autoplay:false,
//     easing: "linear",
// })
// .add({
//     targets: ".sceneThree#titleBlock",
//     duration:100,
//     opacity: [1,0],
//     top: ["15%", "0%"]
// })
// .add({
//     targets: ".sceneThree#skillContainer",
//     duration:100,
//     opacity: [1,0],
//     top: ["30%","0%"]
// })



// Hiding all of the other scenes to the cursor
linksActive(false,document.getElementsByClassName("sceneTwo"));
linksActive(false, document.getElementsByClassName("sceneThree"));
linksActive(false, document.getElementsByClassName("sceneFour"));



//need to set opacity again for the fade out animations
anime.set(".sceneTwo", {opacity: 0})
anime.set(".sceneThree", {opacity: 0})


//Event listener for the window, controls timing of animations

window.addEventListener("scroll", function(){   //ANIMATIONS ONLY IN THE WINDOW
    let scrollPercent = scrollPercentage();
    console.log(scrollPercent);
    sceneOneOut.seek(((scrollPercent / 100) * sceneOneOut.duration)*10);     //the "-40" determines what at % animation starts and 
    sceneTwoIn.seek((((scrollPercent - 12)/100)*sceneTwoIn.duration)*10);    //"*10" gives the percentage timeframe as 100/10 = 10% window    
    sceneTwoOut.seek((((scrollPercent- 30)/100)*sceneTwoOut.duration)*10);
    sceneThreeIn.seek((((scrollPercent- 44)/100)*sceneThreeIn.duration)*10);
    sceneThreeBars.seek((((scrollPercent- 55)/100)*sceneThreeBars.duration)*6);
    sceneThreeOut.seek((((scrollPercent- 75)/100)*sceneThreeOut.duration)*10);
    sceneFourIn.seek((((scrollPercent- 90)/100)*sceneFourIn.duration)*10);
    // sceneFourOut.seek((((scrollPercent- 60)/100)*sceneFourOut.duration)*10);

    if (scrollPercent < 12){
        linksActive(true,document.getElementsByClassName("sceneOne"));
    } else {
        linksActive(false,document.getElementsByClassName("sceneOne"));
    }
    if (scrollPercent > 80){
        linksActive(true,document.getElementsByClassName("sceneFour"));
    }
});

