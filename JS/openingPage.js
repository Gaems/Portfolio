// The following is the initial animations on startup of the page.



let underlineTimeline = anime.timeline({ // setting up a timeline for the underline/score under name
  easing: "linear"
});

underlineTimeline
.add({            //making the hr opaque
  targets: "hr",
  duration: 10,
  opacity: "1"
})
.add({            //making the hr stretch out
  targets: "hr",
  duration: 750,
  easing: "linear",
  width: "70%"
})


//"wiggle"

anime({
  targets: ".middleRow",
  keyframes: [
    {rotate:10},
    {rotate:-10},
    {rotate:0},
  ],
  delay:1500, 
  easing: "easeInOutQuad",
  duration: 500,
  loop:true
})

anime({
  targets: ".bottomRow",
  keyframes: [
    {rotate:10},
    {rotate:-10},
    {rotate:0},

  ],
  delay:750, 
  easing: "easeInOutQuad",
  duration: 500,
  loop:true
})


// The following is the logic for interaction with the initial page



// FUNCTIONS FOR INTERACTIVE LINK ANIMATIONS

function swell () { // making it bigger
  anime.remove(this); // cannot stack animations if we want it to stay scaled after completion
  anime.set(this, {rotate: 0});
  anime({
    targets: this,
    scale: {
      value: 1.5,
      duration: 200,
    },
    easing: "easeInOutQuad",
    elasticity: 100
  });
};

function shrink(){ // making it smaller
  anime.remove(this);
  anime({
    targets: this,
    scale: {
      value: 1.0,
      duration:100
    },
    easing: "easeInOutQuad",
    elasticity: 100
  })
}



// BUTTON INTERACTIONS


let elements = document.getElementsByClassName("link"); 
for (let i = 0; i < elements.length; i++) {             //This block makes all links swell and
  elements[i].addEventListener("mouseenter", swell);    //shrink when entered and when left.
  elements[i].addEventListener("mouseleave", shrink);
}
