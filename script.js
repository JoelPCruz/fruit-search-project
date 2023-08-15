const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) {
// 	let results = [];

// 	// TODO

// 	return results;
// }

// takes a string
// first create an empty results arr
// we then filter through the fruit arr
	// convert each fruit into all lowercase
	// then check if the str is included in the arr
	// if included then push to the results arr
// return the results arr
const search = str => {
	let results = [];
	results.push(fruit.filter(val => val.toLowerCase().includes(str)))
	return results;
}


// function searchHandler(e) {
// 	// TODO
// }
// on key up see if key is included in array

// input.addEventListener('keyup', searchHandler);
// on key up, run the searchHandler func
// takes current input val, converts to lowercase
// we create an empty results arr
// if the input field has a length greater than 0
	// run the search func on the input val
	// then add the result to the results arr
// then return showSuggestions func on the result.
const searchHandler = e => {
	const inputVal = e.target.value.toLowerCase();
	let results = [];
	if(inputVal.length > 0) { 
		results = search(inputVal);
	}
	showSuggestions(results)
}

// function showSuggestions(results, inputVal) {

// 	// TODO
// }

// takes the results arr
// removes all html from suggestion box
// if there are results 
	// filter each result
		// and for each result
		// create an li element for the result
	// then pass it a class
// else
	// results arr is set to empty arr
	// remove suggestions box innerHTML
	// remove class

const showSuggestions = (results) => {
	suggestions.innerHTML = "";
	if (results.length > 0) {
		results.filter(val => {
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

// suggestions.addEventListener('click', useSuggestion);
// when click e happens
// input changes to the targets value
// focuses on the new input added
// then suggestions box is cleared
// suggestions class is removed
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