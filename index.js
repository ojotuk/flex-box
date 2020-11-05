const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const icon = document.getElementById("icon");

menu.addEventListener("click", () => {
  nav.classList.toggle("mobile-menu");
  //   icon.classList.toggle("fa-times");
  let currentClass = icon.classList.value;
  //   console.log(currentClass);
  if (currentClass === "fa fa-bars") {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    return;
    // return (icon.classList = "fa fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
  //   return icon.classList;
  //   icon.classList = "fa fa-times";
});
