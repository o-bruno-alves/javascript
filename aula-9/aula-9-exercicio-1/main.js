const buttons = document.querySelectorAll("button");

buttons[0].onmouseover = () => console.log("mouseover");
buttons[1].onmouseover = () => console.log("mouseover");

buttons[0].addEventListener("mouseout", () => console.log("mouseout"));
buttons[1].addEventListener("mouseout", () => console.log("mouseout"));

buttons.forEach(
  (button) => (button.onmouseover = () => console.log("mouseover"))
);

setTimeout(() => buttons[0].setAttribute("id", "teste"), 2000);