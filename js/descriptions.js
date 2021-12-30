var shops = [];

function parseShops(shops_list) {
	if(shops_list === undefined) {
		window.alert('No shops returned');
		return;
	}

	shop_array = shops_list.map(function(shp) {
		return new Shop(shp.text, shp.created_at, shp.website);
	});

	
	shop_array.forEach(element => {
		shops.push(element);
	});



	$("#shopsTable").empty();
	document.getElementById('searchCount').innerText = 0;

}

function addEventHandlerForSearch() {

	document.getElementById('searchText').innerText = "";
	document.getElementById('searchCount').innerText = 0;

	$("#shopsTable").empty();
	
	document.getElementById("textFilter").addEventListener('input', function() {
		$("#shopsTable").empty();
		var userInput = document.getElementById("textFilter").value;
		document.getElementById('searchText').innerText = userInput;
		// userInput = " " + userInput + " ";
	
		var tableResults = [];
		shops.forEach(element=> {
			if(element.text.toLowerCase().includes(userInput.toLowerCase())){
				tableResults.push(element);
			}
		})

		
		document.getElementById('searchCount').innerText = tableResults.length;

		let index = 1;

		tableResults.forEach(element=> {

			$("#shopsTable").append(element.getHTMLTableRow(index));
			index += 1;
		})

	})
	
	
}


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function (event) {

	addEventHandlerForSearch();
	loadSavedRunkeepersShops().then(parseShops);
});

