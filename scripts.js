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

function processJSON(data) {
  const carDiv = document.getElementById("car-collection");
  const carArray = data["cars"];
  for (let i = 0; i < carArray.length; i++) {
    carDiv.appendChild(renderCar(carArray[i]));
  }
}

/*function renderCar(carJson) {
  const carList = document.createElement("ul");
  for (x in carJson) {
    let li = document.createElement("li");
    li.innerHTML = `${x}: ${carJson[x]}`;
    carList.appendChild(li);
  }
  return carList;
}*/

function renderCar(carJson) {
 // const carBody = document.createElement("div");
  //carBody.classList += "car-body";
  carDiv = document.createElement("div");
  carDiv.classList += "car-div";
  const img = document.createElement("img");
  img.src =
    "https://www.tesla.com/sites/default/files/images/model-3/model-3-hero.jpg?2017";
  img.classList += "card-object";
  const carList = document.createElement("ul");
  carList.classList += "car-list";
  for (x in carJson) {
    let li = document.createElement("li");
    li.innerHTML = `${x}: ${carJson[x]}`;
    carList.appendChild(li);
  }
  carDiv.appendChild(img);
  //carBody.appendChild(carList);
  carDiv.appendChild(carList);
  return carDiv; //carList;
}

function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    processJSON(actual_JSON);
  });
}

init();
