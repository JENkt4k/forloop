import {default as cars} from './cars.js'; //if not processed by webpack >2.0
//import * as cars from './cars.json'; //if processed by webpack >2.0
// reference: https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file?lq=1
// https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file?lq=1

function processJsonNoTemplate(data) {
  const carDiv = document.getElementById("car-collection");
  const carArray = data["cars"];
  for (let i = 0; i < carArray.length; i++) {
    carDiv.appendChild(renderCar(carArray[i]));
  }
}

function processJSON(data){
  const carDiv = document.getElementById("car-collection");
  carDiv.innerHTML = data["cars"].map(car => templateRender(car)).join("");
}

function templateRender(carJson){
  return `
  <div class="car-div">
          <img class="car-img" src ="${carJson["src"]}">
          <div class="car-details">
            <div class="car-model">${carJson["model"]}</div>
            <div class="car-make detail">Manufacturer: ${carJson["make"]}</div> 
            <div class="car-color detail">Exterior Color: ${carJson["color"]}</div>             
          </div>
        </div>
  `;

}

function renderCar(carJson) {
  const carDiv = document.createElement("div");
  carDiv.classList += "car-div";
  const img = document.createElement("img");
  img.src = carJson["src"];
  img.classList += "card-object";
  const carList = document.createElement("ul");
  carList.classList += "car-list";
  for (let x in carJson) {
    let li = document.createElement("li");
    li.innerHTML = `${x}: ${carJson[x]}`;
    carList.appendChild(li);
  }
  carDiv.appendChild(img);
  carDiv.appendChild(carList);
  return carDiv;
}

function init() {
  console.log(cars);
  processJSON(cars);
}

init();
