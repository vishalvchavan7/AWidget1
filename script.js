//Released
//Genre
//&#128269;
//GENRE
// let defaultVal;
///////////////////////////////////////////////////////////////////////////////
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const value = parameters.get('name');
localStorage.setItem("currentVal1", value);
    getapi();
///////////////////////////////////////////////////////////////////////////////

function myFunction() {
  
    var x = document.getElementById("mySearch");
     console.log(x.value);
    var x = x.value
    //var defaultVal = x.defaultVal;
    //var currentVal = defaultVal;
    //console.log(currentVal);
    ABC =  `"https://www.omdbapi.com/?t=${x}&apikey=cf60bf6d"`
    console.log(ABC);
    localStorage.setItem("currentVal1", x);
    getapi();



}

async function getapi() {
    var x = localStorage.getItem("currentVal1");
    var api_url = 
"https://www.omdbapi.com/?t="+x+"&apikey=cf60bf6d";
    var x = localStorage.getItem("mytime");
	// Storing response
	const response = await fetch(api_url);
	
	// Storing data in form of JSON
	var data = await response.json();

    console.log(data);

    var myObj = data;

    Title = myObj.Title;

    Released = myObj.Released;

    Director = myObj.Director;

    document.getElementById("title").innerHTML = Title;

    document.getElementById("released").innerHTML = Released;

    document.getElementById("director").innerHTML = Director;


    
}












/*
// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.office}</td>
	<td>${r.position}</td>
	<td>${r.salary}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}

*/
