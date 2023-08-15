const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) {
// 	let results = [];

// 	// TODO

// 	return results;
// }
const search = str => {
	let results = [];
	results.push(fruit.filter(val => val.toLowerCase().includes(str)))
	return results;
}


// function searchHandler(e) {
// 	// TODO
// }
// on key up see if key is included in array


// search function will be nested inside
const searchHandler = e => {
	const inputVal = e.target.value.toLowerCase();
	let results = [];
	if(inputVal.length > 0) { // if there is an inputVal
		results = search(inputVal) // run the search function on the val and add the results arr
	}
	showSuggestions(results, inputVal)
}

// function showSuggestions(results, inputVal) {

// 	// TODO
// }

// should create a list of each item that includes the str
const showSuggestions = (results, inputVal) => {
	suggestions.innerHTML = "";
	if (results.length > 0) {
		results.filter(val => {
		// for each val in the array, list each fruit 
		val.forEach(fruit => {
			return suggestions.innerHTML += `
				<li>${fruit}</li>
			`;
		});
		});
			suggestions.classList.add("has-suggestions");
		} else {
			results = [];
			suggestions.innerHTML = "";
			suggestions.classList.remove("has-suggestion");
		}
	}
// function useSuggestion(e) {
// 	// TODO
// }

const useSuggestion = e => {
	input.value = e.target.innerText;
	input.focus();
	suggestions.innerHTML = "";
	suggestions.classList.remove("has-suggestion");
}


suggestions.addEventListener('click', useSuggestion);
input.addEventListener('keyup', searchHandler);

// every time a key is pressed
	// run search handler/ takes the current input value.toLowerCase 
		// run search with the current input value we just created
		// filters through the arr.toLowerCase to see if the current input value
		// Is Includinded inside the arr
		// If it is included 
			// run showSuggestions
				// I need to list all the elements in the arr that include the input val