// console.log("here");

// function addData() {
//     faves.forEach(element=> {

//         var row = document.createElement('tr');

//         $("#favoriteShops").append(element);
//     })
// }

function createTable(faves) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    faves.forEach(function(rowData) {
      var row = document.createElement('tr');
  
    //   rowData.forEach(function(cellData) {
    //     var cell = document.createElement('td');
    //     cell.appendChild(document.createTextNode(cellData));
    //     row.appendChild(cell);
    //   });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }

document.addEventListener('DOMContentLoaded', function (event) {
    console.log('here');
	createTable();
});