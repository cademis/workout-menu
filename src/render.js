const createElement = (tag, parent, className) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  parent.appendChild(element);
  return element;
};

const renderHeader = () => {
  const body = document.querySelector("body");
  const header = createElement("header", body);
  const h1 = createElement("h1", header);
  h1.innerHTML = "Workout Menu";
  const nav = createElement("nav", header);
  const ul = createElement("ul", nav);

  const tabs = ["Home", "Excercises", "Contact"];
  tabs.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
    li.addEventListener("click", () => {
      if (item === "Home") {
        renderMainContent();
      } else if (item === "Excercises") {
        renderMainContent2();
      } else if (item === "Contact") {
        renderMainContent3();
      }
    });
  });
};

const initMain = () => {
  const body = document.querySelector("body");
  const main = createElement("main", body);
  main.innerHTML = "";
  renderMainContent();
};

// const clearMainElement = () => {
//   main.innerHTML = "";
// };

const renderMainContent = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const mainSection = createElement("section", main);
  const sectionHeading = createElement("h2", mainSection);
  sectionHeading.innerHTML = "Content Section";
  const sectionParagraph = createElement("p", sectionHeading);
  sectionParagraph.innerHTML = "This is the main content of your page";
};

const renderMainContent2 = () => {
  const main = document.querySelector("main");
  //   const main = createElement("main", body);
  main.innerHTML = "";
  const grid = createElement("div", main);
  grid.className = "grid";

  const data = [
    {
      excercise: "Lunges",
      attribute: "Photo by https://unsplash.com/@healthywithaparna",
      description:
        "Stand straight with your feet hip-width apart. Take a step forward with your right leg, then lower your body until your right knee is at a 90-degree angle and your left knee is hovering above the floor. Push back up to the starting position and switch legs.",
      image: "./assets/lunges_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/lunges",
    },
    {
      excercise: "Leg Press",
      attribute:
        'Photo by <a href="https://unsplash.com/@scottwebb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Scott Webb</a> on <a href="https://unsplash.com/s/photos/leg-press?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "Sit on the leg press machine with your feet hip-width apart on the platform. Lower the safety bars and push the platform away by fully extending your legs. Lower the platform by slowly bending your knees while keeping your feet flat on the platform. Push back to the starting position without locking your knees at the top.",
      image: "./assets/leg-press_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/leg-press",
    },
    {
      excercise: "Bench Press",
      "image-search": "https://unsplash.com/s/photos/bench-press",
      attribute:
        'Photo by <a href="https://unsplash.com/@demoya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael DeMoya</a> on <a href="https://unsplash.com/s/photos/bench-press?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "Lie down on a flat bench, keeping your feet flat on the floor. Grab the barbell with your hands slightly wider than shoulder-width apart. Lower the barbell down to your chest, then push it back up to the starting position. Ensure your elbows are at a 45-degree angle to your body to protect your shoulders.",
      image: "./assets/bench-press_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/bench-press",
    },
    {
      excercise: "Pull-ups",
      attribute:
        'Photo by <a href="https://unsplash.com/@gcowie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gordon Cowie</a> on <a href="https://unsplash.com/s/photos/pull-ups?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "Grab the pull-up bar with your hands slightly wider than shoulder-width apart and palms facing away from you. Hang at arm's length (dead hang). Pull yourself up by pulling your elbows down towards the floor. Keep going up until your chin passes the bar, then lower yourself back to the dead hang.",
      image: "./assets/pull-ups_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/pull-ups",
    },
    {
      excercise: "Overhead Press",
      attribute:
        'Photo by <a href="https://unsplash.com/@rizlas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marvin Cors</a> on <a href="https://unsplash.com/s/photos/overhead-press?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "Stand with your feet shoulder-width apart and grip the barbell at slightly wider than shoulder width. The bar should rest on your collarbone. Push the bar up and slightly back, until your arms are fully extended above your head. Lower the bar slowly back to the starting position.",
      image: "./assets/overhead-press_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/overhead-press",
    },
    {
      excercise: "Rows",
      attribute:
        'Photo by <a href="https://unsplash.com/@ryanhoffman007?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryan Hoffman</a> on <a href="https://unsplash.com/s/photos/weight-machine?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "Stand with feet shoulder-width apart and bend your knees slightly. Lean forward from your hips, not your waist. Grab the barbell with an overhand grip, hands slightly wider than shoulder-width apart. Pull the barbell to your torso, then lower it back down. Keep your back straight throughout.",
      image: "./assets/rows_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/barbell-rows",
    },
    {
      excercise: "Squats",
      attribute:
        'Photo by <a href="https://unsplash.com/@rinked?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rinke Dohmen</a> on <a href="https://unsplash.com/s/photos/squats?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "Stand with your feet shoulder-width apart. Lower your body as if sitting in a chair, keeping your back straight and knees over your ankles. Go as low as your flexibility allows, ideally until your thighs are parallel with the floor, then push back up to the starting position.",
      image: "./assets/squats_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/squats",
    },
    {
      excercise: "Deadlifts",
      attribute:
        'Photo by <a href="https://unsplash.com/ko/@victorfreitas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victor Freitas</a> on <a href="https://unsplash.com/s/photos/deadlift?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "Stand with feet hip-width apart, mid-foot under the barbell. Bend over without bending your legs, grip the barbell with hands shoulder-width apart. Bend your knees until your shins touch the bar. Lift your chest up and straighten your back. Pull the barbell up by standing up fully.",
      image: "./assets/deadlifts_thumbnail.jpg",
      "image-search": "https://unsplash.com/s/photos/deadlifts",
    },
  ];

  data.forEach((item) => {
    let cell = createElement("div", grid);
    cell.className = "cell";
    let h2 = createElement("h2", cell);
    h2.innerHTML = item.excercise;
    let img = createElement("img", cell);
    img.setAttribute("src", item.image);
    // img.setAttribute("alt", item.attribute);
    let p = createElement("p", cell);
    p.innerHTML = item.description;
  });
};

const renderMainContent3 = () => {
  const main = document.querySelector("main");
  //   const main = createElement("main", body);
  main.innerHTML = "";
  let h2 = createElement("h2", main);
  h2.innerHTML = "Contact";
  let p = createElement("h2", main);
  p.innerHTML = "thisisafake@email.com";
};

const renderFooter = () => {
  const body = document.querySelector("body");
  const footer = createElement("footer", body);
  const footerParagraph = createElement("p", footer);
  footerParagraph.innerHTML = "&copy; 2023 Your Website";
};

export {
  createElement,
  renderHeader,
  initMain,
  renderMainContent,
  renderMainContent2,
  renderMainContent3,
  renderFooter,
};
