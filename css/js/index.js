const App = {
  // All of our selected HTML elements
  $: {
    menu: document.querySelector(".menu"),
    menuItems: document.querySelector(".items"),
  },
};

App.$.menu.addEventListener("click", (event) => {
  App.$.menuItems.classList.toggle("hidden");
});
