

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>FrontEnd Developer</strong>')
    .pauseFor(2500)
    .start();





function animateToggle(element, show) {
    let startHeight = element.offsetHeight;
    let startOpacity = show ? 0 : 1;
    let endHeight, endOpacity;

    if (show) {
        element.style.display = 'block';
        element.style.height = 'auto';
        element.style.opacity = 0;
        endHeight = element.offsetHeight;
        endOpacity = 1;
        element.style.height = startHeight + 'px';
    } else {
        endHeight = 0;
        endOpacity = 0;
    }

    let startTime = null;

    function animate(time) {
        if (!startTime) startTime = time;
        let progress = Math.min((time - startTime) / 500, 1); // Animation duration of 500ms

        element.style.height = (startHeight + progress * (endHeight - startHeight)) + 'px';
        element.style.opacity = startOpacity + progress * (endOpacity - startOpacity);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            if (!show) element.style.display = 'none';
            element.style.height = '';
            element.style.opacity = '';
        }
    }

    requestAnimationFrame(animate);
}

function myfunction() {
    var elements = document.getElementsByClassName("left");

    for (var i = 0; i < elements.length; i++) {
        var x = elements[i];

        if (x.style.display === "none" || x.style.display === "") {
            animateToggle(x, true);
        } else {
            animateToggle(x, false);
        }
    }
}














// GSAP


gsap.to(".bg-h4", {
    x: 1000,
    duration: 1.5,
    delay: 1
})
gsap.from(".g", {
    y: 25,
    duration: 1.5,
    delay: 1,
    opacity: 0,
    stagger: 0.2,
})

gsap.registerPlugin(ScrollTrigger);

// Create a timeline

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".inside-contant-about",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});

// Add animations to the timeline
tl.from(" .abb .letter", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1
})




let tll = gsap.timeline({
    scrollTrigger: {
        trigger: ".inside-contant-about .contant-about",
        start: "10% 80%",
        end: "10% 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});

tll.from(".contant-about img", {
    opacity: 0,
    x: -20,
    duration: 0.5,
    stagger: 2
})

tll.from(".contant-about h2", {
    opacity: 0,
    x: -30,
    duration: 0.9,
    stagger: 2
})
tll.from(".contant-about p", {
    opacity: 0,
    x: -30,
    duration: 0.4,
    stagger: 2
})



let about = gsap.timeline({
    scrollTrigger: {
        trigger: ".about .ab",
        start: "top 70%",
        end: "0% 20%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});




about.from(" .ab .letter", {
    x: -10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1
})

let resume = gsap.timeline({
    scrollTrigger: {
        trigger: ".resume-main",
        start: "10% 40%",
        end: "10% 40%",
        toggleActions: "play none none reverse",
    }
});

// Add animations to the timeline
resume.from(".resume-item", {
    Y: 15,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3
});

let resume1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".ab",
        start: "top 50%", // Adjust the start point
        end: "bottom 50%", // Adjust the end point
        toggleActions: "play none none reverse",
        // markers: true // For debugging, remove in production
    }
});

resume1.from(".ab .latter ", {
    x: -10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.7
})


let skl = gsap.timeline({
    scrollTrigger: {
        trigger: ".radial-bars",
        start: "top 60%", // Adjust the start point
        end: "30% 60%", // Adjust the end point
        toggleActions: "play none none reverse",
        // markers: true // For debugging, remove in production
    }
});


skl.from(" .radial-bar", {
    x: -10,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})


let cv = gsap.timeline({
    scrollTrigger: {
        trigger: ".titl",
        start: "top 30%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});

cv.from(".cv-download p", {
    x: -30,
    duration: 0.6,
    opacity: 0,
    stagger: 0.2
})


let abw = gsap.timeline({
    scrollTrigger: {
        trigger: ".resume2",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});


abw.from(".abW .letter ", {
    x: -10,
    duration: 0.2,
    opacity: 0,
    stagger: 0.1
})


let p1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".one",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});



p1.from(".i ", {
    y: -10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})
p1.from(".one-p .r-p ", {
    y: -10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})
p1.from(".tech-one .t-one ", {
    y: -10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p1.from(".one-p .b-one ", {
    x: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})


let p2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});

p2.from(".two .t-i ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p2.from(".two .p-two .r-pp  ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})
p2.from(".two .t-pp .t-p ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p2.from(".two .p-two .b-tr  ", {
    x: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})


let p3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});

p3.from(".three .tr-i ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})
p3.from(".three .t-ph .p-3 ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})
p3.from(".three .t-ph .th-3 .th-1", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p3.from(".three .t-ph .th-b", {
    x: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})



let p4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".four",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});


p4.from(".four .f-i ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p4.from(".four .f-p .f-ppp ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p4.from(".four .f-p .tech-four .f4 ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p4.from(".four .f-p .four-b ", {
    x: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})



let p5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".five",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});


p5.from(".five .five-i ", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p5.from(".five .five-page .f-page", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p5.from(".five .five-page .five-tech .five-1", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

p5.from(".five .five-page .five-b", {
    x: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})



let p6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});

p6.from("#contact .letter ", {
    x: 20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

let p7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-end",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers: true // For debugging
    }
});


p7.from(".contact-end", {
    x: 20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
})

