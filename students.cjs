const studentsData = require("./students-data.json");

let newArray = [];
function findBestStudent(array) {
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
    let newArr = [];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].score == searchTerm) {
        studName = arr[j].name;

        newArr.push(studName);
      }
    }
    return newArr;
  }
  
}
console.log(`Поздравляем, ${findBestStudent(studentsData)}!`);

module.exports = findBestStudent
