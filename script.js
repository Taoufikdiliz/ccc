const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

// --------- Page 2 ----------------------

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".box1",
  reverse: false,
})

  .setClassToggle(".box1", "fade-in")
  .addIndicators({
    name: "INDICATIONS",
    indent: 200,
    colorStart: "#fff",
  })
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".box2",
  reverse: false,
})

  .setClassToggle(".box2", "fade-in")
  .addIndicators({
    name: "INDICATIONS",
    indent: 200,
    colorStart: "#fff",
  })
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".box3",
  reverse: false,
})

  .setClassToggle(".box3", "fade-in")
  .addIndicators({
    name: "INDICATIONS",
    indent: 200,
    colorStart: "#fff",
  })
  .addTo(controller);
