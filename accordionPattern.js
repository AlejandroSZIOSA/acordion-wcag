/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */

"use strict";

class Accordion {
  constructor(domNode) {}

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    // don't do anything if the open state doesn't change
    if (open === this.open) {
      return;
    }

    // update the internal state
    this.open = open;

    // handle DOM updates
    this.buttonEl.setAttribute("aria-expanded", `${open}`);
    if (open) {
      this.contentEl.removeAttribute("hidden");
    } else {
      this.contentEl.setAttribute("hidden", "");
    }
  }

  // Add public open and close methods for convenience
  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}

function createAccordion(accordionEl) {
  const rootEl = accordionEl;
  const buttonEl = rootEl.querySelector("button[aria-expanded]");

  const controlsId = buttonEl.getAttribute("aria-controls");
  const contentEl = document.getElementById(controlsId);

  let open = buttonEl.getAttribute("aria-expanded") === "true";

  function onButtonClick(e) {
    open = !open;
    buttonEl.setAttribute("aria-expanded", `${open}`);
    if (open) {
      contentEl.removeAttribute("hidden");
    } else {
      contentEl.setAttribute("hidden", "");
    }
  }

  // add event listeners
  buttonEl.addEventListener("click", onButtonClick);
}

// init accordions
const accordions = document.querySelectorAll(".accordion h3");
accordions.forEach((accordionEl) => {
  //new Accordion(accordionEl);
  createAccordion(accordionEl);
});
