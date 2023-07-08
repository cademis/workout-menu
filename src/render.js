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

  const tabs = ["Home", "About", "Contact"];
  tabs.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
};

const renderMainContent = () => {
  const body = document.querySelector("body");
  const main = createElement("main", body);
  main.innerHTML = "";
  const mainSection = createElement("section", main);
  const sectionHeading = createElement("h2", mainSection);
  sectionHeading.innerHTML = "Content Section";
  const sectionParagraph = createElement("p", sectionHeading);
  sectionParagraph.innerHTML = "This is the main content of your page";
};

const renderMainContent2 = () => {
  const body = document.querySelector("body");
  const main = createElement("main", body);
  main.innerHTML = "";
  const grid = createElement("div", main);
  grid.className = "grid";

  const data = [
    {
      excercise: "Lunges",
      image: "./assets/deadlift.jpg",
      attribute: "Photo by https://unsplash.com/ko/@victorfreitas",
      description:
        "Stand straight with your feet hip-width apart. Take a step forward with your right leg, then lower your body until your right knee is at a 90-degree angle and your left knee is hovering above the floor. Push back up to the starting position and switch legs.",
    },
    {
      excercise: "Leg Press",
      description:
        "Sit on the leg press machine with your feet hip-width apart on the platform. Lower the safety bars and push the platform away by fully extending your legs. Lower the platform by slowly bending your knees while keeping your feet flat on the platform. Push back to the starting position without locking your knees at the top.",
    },
    {
      excercise: "Bench Press",
      description:
        "Lie down on a flat bench, keeping your feet flat on the floor. Grab the barbell with your hands slightly wider than shoulder-width apart. Lower the barbell down to your chest, then push it back up to the starting position. Ensure your elbows are at a 45-degree angle to your body to protect your shoulders.",
    },
    {
      excercise: "Pull-ups",
      description:
        "Grab the pull-up bar with your hands slightly wider than shoulder-width apart and palms facing away from you. Hang at arm's length (dead hang). Pull yourself up by pulling your elbows down towards the floor. Keep going up until your chin passes the bar, then lower yourself back to the dead hang.",
    },
    {
      excercise: "Overhead Press",
      description:
        "Stand with your feet shoulder-width apart and grip the barbell at slightly wider than shoulder width. The bar should rest on your collarbone. Push the bar up and slightly back, until your arms are fully extended above your head. Lower the bar slowly back to the starting position.",
    },
    {
      excercise: "Barbell Rows",
      description:
        "Stand with feet shoulder-width apart and bend your knees slightly. Lean forward from your hips, not your waist. Grab the barbell with an overhand grip, hands slightly wider than shoulder-width apart. Pull the barbell to your torso, then lower it back down. Keep your back straight throughout.",
    },
    {
      excercise: "Squats",
      description:
        "Stand with your feet shoulder-width apart. Lower your body as if sitting in a chair, keeping your back straight and knees over your ankles. Go as low as your flexibility allows, ideally until your thighs are parallel with the floor, then push back up to the starting position.",
    },
    {
      excercise: "Deadlifts",
      description:
        "Stand with feet hip-width apart, mid-foot under the barbell. Bend over without bending your legs, grip the barbell with hands shoulder-width apart. Bend your knees until your shins touch the bar. Lift your chest up and straighten your back. Pull the barbell up by standing up fully.",
    },
  ];

  data.forEach((item) => {
    let cell = createElement("div", grid);
    cell.className = "cell";
    let h2 = createElement("h2", cell);
    h2.innerHTML = item.excercise;
    let p = createElement("p", cell);
    p.innerHTML = item.description;
    let img = createElement("img", cell);
    img.setAttribute("src", "./src/assets/deadlift.jpg");
    img.setAttribute("alt", "Girl in a jacket");
    img.setAttribute("width", "50");
    img.setAttribute("height", "60");
  });
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
  renderMainContent,
  renderMainContent2,
  renderFooter,
};
