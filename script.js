if (!localStorage.getItem("videoPlayed")) {
  console.log("Video belum diputar, kembali ke index.html...");
  window.location.href = "index.html";
} else {
  console.log("Video sudah diputar, tetap di main.html");
  localStorage.removeItem("videoPlayed");

  anime({
    targets: "#floral",
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 2000,
    easing: "easeOutExpo",
  });

  anime({
    targets: "#bg-text-wedding",
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 2000,
    easing: "easeOutExpo",
  });

  const ids = [
    "#floral-bouquet",
    "#floral-bouquet-1",
    "#floral-bouquet-2",
    "#floral-bouquet-3",
    "#floral-bouquet-4",
    "#floral-bouquet-5",
  ];

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  ids.forEach((id) => {
    anime({
      targets: id,
      translateX: [
        { value: getRandom(-15, -5) },
        { value: getRandom(5, 15) },
      ],
      rotate: [{ value: getRandom(-3, -1) }, { value: getRandom(1, 3) }],
      duration: getRandom(2000, 3500),
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
    });
  });

  anime({
    targets: "#floral-bouquet-6",
    translateX: [-10, 10],
    rotate: [-2, 2],
    duration: 1000,
    direction: "alternate",
    easing: "easeInOutSine",
    loop: true,
  });

  anime({
    targets: "#floral-bouquet-7",
    translateY: [-10, 10],
    duration: 400,
    direction: "alternate",
    easing: "easeInOutSine",
    loop: true,
  });
}