// const lista = document.createElement("ol");

// for(let i = 1; i <= 10; i++) {
//   const listItem = document.createElement("li");
//   listItem.textContent = `${i}`
//   lista.append(listItem);
// }

// document.body.append(lista);

// const listItems = document.querySelectorAll("li");
// for(i = 0; i < listItems.length; i++) {
//   listItems[i].style.border = `${i+1}px, solid, lightgreen`;
// }

// for(let i = 1; i <= 20; i++) {
//   const paragraph = document.createElement("p");
//   paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipiscing elit."
//   document.body.append(paragraph);
// }

// const paragraphs = document.querySelectorAll("p");
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.backgroundColor = `hsl(1, 0%, ${100-(i*5)}%)`;
// }

// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.color = `hsl(1, 0%, ${i*5+5}%)`;
// }

// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].textContent = `${i+1}`;
// }

// const outerList = document.createElement("ol");

// for(let i = 1; i <= 5; i++) {
//   const outerItem = document.createElement("li")
//   const innerList = document.createElement("ul");

//   for(let j = 1; j <= 3; j++) {
//     const innerItem = document.createElement("li");
//     innerList.append(innerItem);
//   }
//   outerItem.append(innerList);
//   outerItem.append(document.createElement("br"));
//   outerList.append(outerItem);
// }

// document.body.append(outerList);

// --------------------------------------------------------------


// const div = document.createElement("div");
// document.body.append(div);
// div.style.height = "100vh";
// div.style.fontFamily = "Open Sans, sans-serif";
// div.style.display = "flex";
// div.style.flexFlow = "column nowrap";
// div.style.alignItems = "center";

// const main = document.createElement("main");
// div.append(main);
// main.style.maxWidth = "1000px";
// main.style.display = "flex";
// main.style.flex = "1";
// main.style.justifyContent = "center";
// main.style.alignItems = "center";


// for(let i = 1; i <= 3; i++) {
//   const article = document.createElement("article");
//   main.append(article);
//   const figure = document.createElement("figure");
//   article.append(figure);
//   const img = document.createElement("img");
//   figure.append(img);
//   const h2 = document.createElement("h2");
//   article.append(h2);
//   const h3 = document.createElement("h3");
//   article.append(h3);
//   const p = document.createElement("p");
//   article.append(p);
//   const button = document.createElement("button");
//   article.append(button);
// }

// const articles = document.querySelectorAll("article");
// articles.forEach(article => {
//   article.style.height = "33rem";
//   article.style.width = "100%";
//   article.style.margin = "1rem";
//   article.style.background = "white";
//   article.style.display = "flex";
//   article.style.flexDirection = "column";
//   article.style.boxShadow = "0 0 3rem rgba(0, 0, 0, 0.2)"
//   article.style.unicodeBidi = "isolate";
// });

// const figures = document.querySelectorAll("figure");
// figures.forEach(figure => {
//   figure.style.padding = "2rem 1rem 0 1rem";
//   figure.style.background = "rgb(244, 182, 10)";
//   figure.style.display = "flex";
//   figure.style.flexDirection = "column";
//   figure.style.justifyContent = "flex-end";
//   figure.style.alignItems = "center";
//   // figure.style.marginBlockStart= "1em";
//   // figure.style.marginBlockEnd = "1em";
//   // figure.style.marginInlineStart = "40px";
//   // figure.style.marginInlineEnd = "40px";
//   figure.style.unicodeBidi = "isolate";
// });

// const images = document.querySelectorAll("img");
// images.forEach(img => {
//   img.style.width = "80%";
// });
// images[0].src = "./img/hoodie-ash.png";
// images[1].src = "./img/hoodie-fire.png";
// images[2].src = "./img/hoodie-ocean.png";

// const h2s = document.querySelectorAll("h2");
// h2s.forEach(h2 => {
//   h2.style.padding = "0.5rem 1rem 0rem 1rem";
//   h2.style.display = "block";
//   h2.style.fontSize = "1.5em";
//   h2.style.marginBlockStart = "0.83em";
//   h2.style.marginBlockEnd = "0.83em";
//   h2.style.marginInlineStart = "0px";
//   h2.style.marginInlineEnd = "0px";
//   h2.style.fontWeight = "bold";
//   h2.textContent = "Sinus Hoodie";

// });

// const h3s = document.querySelectorAll("h3");
// h3s.forEach(h3 => {
//   h3.style.padding = "0rem 1rem 1rem 1rem";
//   h3.style.fontWeight = "500";
//   h3.style.opacity = "0.6";
// });

// const ps = document.querySelectorAll("p");
// ps.forEach(p => {
//   p.style.padding = "0rem 1rem 1rem 1rem";
//   p.style.fontSize = "0.9rem";
//   p.style.lineHeight = "140%";
//   p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!"
// });

// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//   button.style.appearance = "none";
//   button.style.border = "none";
//   button.style.background = "#222";
//   button.style.color = "#eee";
//   button.style.margin = "auto auto 2rem auto";
//   button.style.padding = "1rem 1.5rem";
//   button.style.width = "6rem";
//   button.style.borderRadius = "0.25rem"
//   button.textContent = "Buy";
// });

// h3s[0].textContent = "Ash";
// h3s[1].textContent = "Fire";
// h3s[2].textContent = "Ocean";

// --------------------------------------------------------------


const fruits = ['Apelsin', 'Ananas', 'Lingon', 'Banan', 'Äpple', 'Mandarin'];

fruits.forEach(fruit => {
  const h1 = document.createElement("h1");
  h1.textContent = fruit;

  switch (fruit) {
    case 'Apelsin':
      h1.style.backgroundColor = 'orange';
      break;
    case 'Ananas':
      h1.style.backgroundColor = 'yellow';
      break;
    case 'Lingon':
      h1.style.backgroundColor = 'red';
      break;
    case 'Banan':
      h1.style.backgroundColor = 'lightyellow';
      break;
    case 'Äpple':
      h1.style.backgroundColor = 'lightgreen';
      break;
    case 'Mandarin':
      h1.style.backgroundColor = 'orangered';
      break;
    default:
      h1.style.backgroundColor = 'gray';
  }

  document.body.append(h1);
});


const br = document.createElement("br");

document.body.append(document.createElement("br"));

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

weekDays.forEach(day => {
  const h1 = document.createElement("h1");
  h1.textContent = day;

  if(day.startsWith("S")) {
    h1.classList.add("Weekend");
  } else {
    h1.classList.add("Weekday");
  }

  document.body.append(h1);
});

document.body.append(document.createElement("br"));


const words = ['första', 'andra', 'tredje', 'fjärde', 'femte']

words.forEach(word => {
  const p = document.createElement("p");
  p.textContent = word;

  if(word.length > 5){
    p.style.fontWeight = 1000;
  }

  document.body.append(p);
});

document.body.append(document.createElement("br"));

const klassNamn = ['Oliver', 'Emile', 'Clara', 'Sheroq', 'Erik', 'Kevin']

klassNamn.forEach((namn, index) =>{
  const p = document.createElement("p");
  p.textContent = namn;

  const remainder = index % 3;
  if (remainder === 0) {
    p.style.background = 'white';
  } else if (remainder === 1 ) {
    p.style.background = 'lightblue';
  } else if (remainder === 2 ) {
    p.style.background = 'blue';
    p.style.color = 'white';
  }

  document.body.append(p);
});

document.body.append(document.createElement("br"));


function createSquare(size, color = "hotpink") {
  const div = document.createElement("div");
  div.style.width = size + "px";
  div.style.height = size + "px";
  div.style.background = color;
  document.body.append(div);
}

createSquare(30, "green");
createSquare(50);

document.body.append(document.createElement("br"));


function isItWarm(temperature){
  const p = document.createElement("p");
  if(temperature >= 15) {
    p.textContent = "VARMT";
  } else if (temperature < 15) {
    p.textContent = "KALLT";
  }
  document.body.append(p);
}

isItWarm(18);
isItWarm(14);

document.body.append(document.createElement("br"));

function prioList(text, number){
  const p = document.createElement("p");
  p.textContent = text;
  p.classList.add(number);
  if(p.className == 1) {
    p.style.background = "red";
  } else if (p.className == 2) {
    p.style.background = "yellow";
  } else if (p.className == 3) {
    p.style.background = "green";
  }
  document.body.append(p);
}

prioList("köp godis", 1);
prioList("treat yourself", 2);
prioList("städa", 3);


document.body.append(document.createElement("br"));

function createList (items, headline){
  const h1 = document.createElement("h1");
  h1.textContent = headline;

  const ol = document.createElement("ol");

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ol.append(li);
  });

  document.body.append(h1);
  document.body.append(ol)
}

createList(["mjölk", "bröd", "smör"], "Inköpslista");

document.body.append(document.createElement("br"));


function createSquares(amount, color){
  const divContainer = document.createElement("div");
  divContainer.classList.add("squares");
  divContainer.style.display = "flex";

  for(i = 0; i < amount; i++){
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("innerSquares");
    innerDiv.style.background = color;

    divContainer.append(innerDiv);
  }

  document.body.append(divContainer);
}

createSquares(10, "lightblue");

document.body.append(document.createElement("br"));

function createLists(ols, lis){
  for(i = 0; i < ols; i++){
    const ol = document.createElement("ol");
    ol.textContent = "Rubrik";
    for(j = 0; j < lis; j++){
      const li = document.createElement("li");
      li.innerHTML = "&nbsp;&nbsp;Item";
      ol.append(li);
    }
    document.body.append(ol);
  }
}

createLists(2, 3);

document.body.append(document.createElement("br"));

function createHeaders(amount) {
  for (let i = 0; i < amount; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = `Rad ${i + 1}`;

    const hue = 240 + ((300 - 240) / (amount - 1)) * i;
    h1.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    h1.style.color = "white";
    h1.style.margin = "3px 0px";

    document.body.append(h1);
  }
}

createHeaders(10);

document.body.append(document.createElement("br"));


function createSquares(rows, columns){
  const divContainer = document.createElement("div");
  divContainer.classList.add("squares");
  divContainer.style.display = "flex";
  divContainer.style.flexWrap = "wrap";
  divContainer.style.width = columns * 34 + "px";
  
  const total = rows * columns;

  for(i = 0; i < total; i++){
    const innerDiv = document.createElement("div");
    innerDiv.textContent = i + 1;
    innerDiv.classList.add("innerSquares");
    innerDiv.style.background = "hotpink";
    innerDiv.style.color = "white";
    innerDiv.style.display = "flex";
    innerDiv.style.alignItems = "center";
    innerDiv.style.justifyContent = "center";

    divContainer.append(innerDiv);
  }

  document.body.append(divContainer);
}

createSquares(4, 6);
