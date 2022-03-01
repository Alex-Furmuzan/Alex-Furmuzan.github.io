const biggerButton = () => {
  document.getElementById("Textbox").style.fontSize = "24pt";
};

const fancyButton = () => {
  document.getElementById("Textbox").style.fontWeight = "Bold";
  document.getElementById("Textbox").style.color = "Blue";
  document.getElementById("Textbox").style.textDecoration = "underline";
};

const boringButton = () => {
  document.getElementById("Textbox").style.fontWeight = "Normal";
};

const mooButton = () => {
  let str = document.getElementById("Textbox").value;
  let parts = str.split(".");
  str = parts.join("-Moo");
  console.log(str);
  document.getElementById("Textbox").value = str;
  document.getElementById("Textbox").style.textTransform = "uppercase";
};
