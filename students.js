const studentsData = require("./students-data.json");

let newArray = [];
function calculateUsingCycles(array) {
  for (let i = 0; i < array.length; i++) {
    arr = array[i];
    arr.forEach((line) => {
      newArray.push(line.score);
    });
  }
  const maxV = Math.max.apply(null, newArray); // нашла максимальное значение

  for (let i = 0; i < array.length; i++) {
    arr = array[i];

    let searchTerm = maxV;
    let studName;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].score == searchTerm) {
        studName = arr[j].name;
        console.log(`Поздравляем, ${studName}!`);
      }
    }
  }
}

calculateUsingCycles(studentsData);
