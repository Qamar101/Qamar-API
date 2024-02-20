// Set the API endpoint
var apiEndpoint = "https://api.nasa.gov/planetary/apod?api_key=z7pi6dpjjK2cabouUQbiUXsrNjOAHHQQgPD4GtIw";

// Send a request to the API
fetch(apiEndpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Display the image and description
    document.getElementById("image").src = data.url;
    document.getElementById("description").innerText = data.explanation;
  })
  .catch(function(error) {
    console.error("Error:", error);
  });