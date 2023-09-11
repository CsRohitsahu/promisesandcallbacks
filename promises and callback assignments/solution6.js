// Using the fetch API
function fetchData(url) {
    // Return a promise that resolves with the data
    return fetch(url)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        console.log(data); // Log the data to the console
        
        return data; // Return the data for further use
      })
      .catch(error => {
        console.error(error); // Log any error to the console
        throw error; // Rethrow the error for handling
      });
  }
  
  // Call the function with the given URL
  fetchData("https://jsonplaceholder.typicode.com/todos/1");
  