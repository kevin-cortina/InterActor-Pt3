//  need to import data dynamically or thru API call on page load
var searchBar = document.getElementById("search")

// Execute a function when the user releases a key on the keyboard
$(document).submit(function (event) {
  console.log("This is the submit function working")
  event.preventDefault();
  // Get value from text field.
  const searchString = $('#searchBar').val();
  // call searchForActor()
  searchForActor(searchString);
  document.getElementById('searchBar').value='';
})