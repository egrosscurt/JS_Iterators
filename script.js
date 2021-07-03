const colors = ["yellow", "blue", "red", "orange"];

// oude stijl
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// nieuwe manier met forEach
colors.forEach((color) => console.log(color));

const colorsObject = {
  color1: "yellow",
  color2: "blue",
  color3: "red",
  color4: "orange",
  color5: "white",
};

for (x in colorsObject) {
  console.log(colorsObject[x]);
}

