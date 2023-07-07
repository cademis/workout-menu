const createElement = (tag, parent, className) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  parent.appendChild(element);
  return element;
};

const renderHeader = () => {
  const body = document.querySelector("body");
  const content = createElement("div", body, "content");
  const header = createElement("header", content);
  const h1 = createElement("h1", header);
  h1.innerHTML = "hello refactored html";
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
  const mainSection = createElement("section", main);
  const sectionHeading = createElement("h2", mainSection);
  sectionHeading.innerHTML = "Content Section";
  const sectionParagraph = createElement("p", sectionHeading);
  sectionParagraph.innerHTML = "This is the main content of your page";
};

const renderFooter = () => {
  const body = document.querySelector("body");
  const footer = createElement("footer", body);
  const footerParagraph = createElement("p", footer);
  footerParagraph.innerHTML = "&copy; 2023 Your Website";
};

export { createElement, renderHeader, renderMainContent, renderFooter };
