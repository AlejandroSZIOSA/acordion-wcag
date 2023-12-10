function showOrHide(e) {
  const element = e.target;
  if (element.className == "title") {
    element.className = "title active";
    element.setAttribute("aria-expanded", "true");
  } else {
    element.className = "title";
    element.setAttribute("aria-expanded", "false");
  }
}

const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", showOrHide);
