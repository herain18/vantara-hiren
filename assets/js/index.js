// GSAP Cloude

window.onload = function() {
const timeline = gsap.timeline({
    delay:1,
  repeat: 0,
  yoyo: true,
  defaults: { duration: 1, ease: "easeInOut" }
});
const timeline2 = gsap.timeline({
    delay:1,
    repeat: 0,
    yoyo: true,
    defaults: { duration: 1, ease: "easeInOut" }
});
const timeline3 = gsap.timeline({
    delay:2,
    repeat: 0,
    defaults: { duration: 1.5, ease: "easeInOut" }
});

timeline.to(".cloud1", { x: -800, duration: 4 });
   // .to(".cloud1", { x: -800, duration: 0.5 });
timeline2.to(".cloud2", { x: 800, duration: 4 });
   // .to(".cloud2", { x: 800, duration: 0.5 });

timeline3
 
    .to(".loading-logo", { y: -250, duration: 2, scale:1 });
    // .to(".loading-logo", { y: -250, duration: 0.5, scale:2 });  

    timeline.to('.cloud1', { opacity: 0 }, 1);
    timeline2.to('.cloud2', { opacity: 0 }, 1);
    timeline3.to('.loading-logo', { scale: 1 }, 2);
    $('.vantara-body').css('position','relative');
   // $('.secloud').css('z-index','0');

   const tl = gsap.timeline({  delay:2,
    repeat: 0,
    defaults: { duration: 2, ease: "easeInOut" }
   
    })
    .to(".secloud", { opacity: 1 })
    .to(".secloud", { opacity: 0 })
     // $('.secloud').css('z-index','0');
}

// GSAP Cloude
// GSAP Text Scroll

        gsap.registerPlugin(ScrollTrigger)

        const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char,i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor
            console.log(fg, "fg color");
            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        })


        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

// GSAP Text Scroll