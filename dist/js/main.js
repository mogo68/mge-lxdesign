gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

gsap.to(".loading", {
  autoAlpha: 1,
  visibility: "visible",
  duration: 2,
  ease: "power4.inOut",
  delay: 0.5,
});

ScrollTrigger.create({
  start: "top top",
  end: "bottom top",
  toggleClass: {
    className: "fixed-header--scrolled",
    targets: ".fixed-header",
  },
  // markers: true,
});

// BIO /////////////////////////////////////////

gsap.to(".bio-pin", {
  scrollTrigger: {
    trigger: ".bio-pin",
    start: "top top",
    end: "500",
    scrub: 4,
    pin: true,
    anticipatePin: 1,
    pinSpacing: true,
    toggleActions: "restart none none none",
    // markers: {
    //   startColor: "purple",
    //   endColor: "fuchsia",
    //   fontSize: "1.5rem",
    // },
  },
});

// WORK /////////////////////////////////

gsap.to(".work-pin", {
  scrollTrigger: {
    trigger: ".work-pin",
    start: "top top",
    end: "500",
    scrub: 4,
    pin: true,
    anticipatePin: 1,
    pinSpacing: true,
    toggleActions: "restart none none none",
    // markers: {
    //   startColor: "purple",
    //   endColor: "fuchsia",
    //   fontSize: "1.5rem",
    // },
  },
});

const centeredTargetBio = gsap.utils.toArray(".bio-centered-text");
centeredTargetBio.forEach((container) => {
  gsap.from(container, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
      end: "bottom 50%",
      // markers: {
      //   startColor: "purple",
      //   endColor: "fuchsia",
      //   fontSize: "1.5rem",
      // },
      scrub: true,
      toggleActions: "restart none none none",
    },
  });
});

const centeredTargetWork = gsap.utils.toArray(".work-centered-text");
centeredTargetWork.forEach((container) => {
  gsap.from(container, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
      end: "bottom 50%",
      // markers: {
      //   startColor: "red",
      //   endColor: "green",
      //   fontSize: "1.5rem",
      // },
      scrub: true,
      toggleActions: "restart none none none",
    },
  });
});

let conclusion = document.querySelectorAll(".conclusion");

const centeredTargetConclusion = gsap.utils.toArray(conclusion);
centeredTargetConclusion.forEach((container) => {
  gsap.from(container, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: conclusion,
      start: "top 90%",
      end: "bottom 50%",
      // markers: {
      //   startColor: "cyan",
      //   endColor: "magenta",
      //   fontSize: "1.5rem",
      // },
      scrub: true,
      toggleActions: "restart none none none",
    },
  });
});

gsap.set(".card", {
  autoAlpha: 0,
  y: 75,
  scale: 0.9,
});

ScrollTrigger.batch(".card-grid", {
  onEnter: (batch) => {
    batch.forEach((card, index) =>
      gsap.to(card.children, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.5,
        delay: index * 0.3,
      })
    );
  },
  once: true,
});

gsap.to(".conclusion-pin", {
  scrollTrigger: {
    trigger: ".conclusion-pin",
    start: "top top",
    end: "500",
    scrub: 4,
    pin: true,
    anticipatePin: 1,
    pinSpacing: true,
    toggleActions: "restart none none none",
    // markers: {
    //   startColor: "purple",
    //   endColor: "fuchsia",
    //   fontSize: "1.5rem",
    // },
  },
});

const btnFade = gsap.utils.toArray(".btn");
btnFade.forEach((container) => {
  gsap.from(container, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: container,
      start: "top 98%",
      end: "bottom 80%",
      // markers: {
      //   startColor: "purple",
      //   endColor: "fuchsia",
      //   fontSize: "1.5rem",
      // },
      scrub: true,
      toggleActions: "restart none none none",
    },
  });
});

// Animated Text for Subtitle //////////////////////////////////////////
const wordWrapper = gsap.utils.toArray(".word-wrapper");

let mainWordsTL = new gsap.timeline({
  repeat: -1,
});

wordWrapper.forEach((wordWrapper, index) => {
  let animatedWords = wordWrapper.querySelector(".words");
  let tlWords = gsap
    .timeline()
    .set(animatedWords, { yPercent: -110, opacity: 0 })
    .to(animatedWords, { opacity: 1, yPercent: 0 }, 0.8)
    .to(animatedWords, { delay: 0.8, opacity: 0, yPercent: 110 });

  mainWordsTL.add(tlWords, index * 1.5);
});

//Split Lines for Subtitles
// function setSplitSub() {
//   const splitSubTargets = gsap.utils.toArray(".sp-subtitle");
//   splitSubTargets.forEach((target) => {
//     let SplitSub = new SplitText(target, { type: "lines" });
//     let splitSubLines = SplitSub.lines; //an array of all the divs that wrap each character
//     gsap.from(splitSubLines, {
//       y: 150,
//       opacity: 0,
//       stagger: 0.1,
//       duration: 1,
//       ease: "back.inOut",
//       scrollTrigger: {
//         trigger: target,
//         // markers: {
//         //   startColor: "purple",
//         //   endColor: "fuchsia",
//         //   fontSize: "1.5rem",
//         // },
//         start: "top bottom",
//         end: "bottom center",
//         scrub: true,
//       },
//     });
//   });
// }

// setSplitSub();
