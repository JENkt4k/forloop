function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "cars.json", true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

import {default as cars} from './cars.js';

function processJSON(data) {
  const carDiv = document.getElementById("car-collection");
  const carArray = data["cars"];
  for (let i = 0; i < carArray.length; i++) {
    carDiv.appendChild(renderCar(carArray[i]));
  }
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
  // loadJSON(function(response) {
  //   // Parse JSON string into object
  //   var actual_JSON = JSON.parse(response);
  //   processJSON(actual_JSON);
  // });
  console.log(cars);
  processJSON(cars);
}

init();
