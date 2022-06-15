// ADD NEW ITEM TO END OF LIST -------------------------------------------------

// ul = ul tag in HTML
const ul = document.querySelector("#page ul");

// ul has HTML appended to its end
ul.innerHTML += "<li>cream</li>";


// ADD NEW ITEM START OF LIST --------------------------------------------------

// ul has HTML added to its front
ul.innerHTML = "<li>kale</li>" + ul.innerHTML;


// ADD A CLASS OF COOL TO ALL LIST ITEMS ---------------------------------------

// Get an array of the li within the ul
const li_array = ul.querySelectorAll("li");

// li_count for counting the number of li elements
let li_count = 0;

// forEach will add the cool class to the li elements and count them.
li_array.forEach(function(li) {
    li.classList.add('cool');
    li_count++;
});


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING ------------------------------

// Append new HTML code for displaying the li count
document.querySelector("div#page h2").innerHTML += `<span>${li_count}</span>`;
