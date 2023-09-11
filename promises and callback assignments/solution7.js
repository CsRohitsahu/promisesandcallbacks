// Using the fetch API and async/await syntax
async function fetchTwoData(url1, url2) {
    try {
      // Await for the responses from both URLs
      const response1 = await fetch(url1);
      const response2 = await fetch(url2);
  
      // Parse the responses as JSON
      const data1 = await response1.json();
      const data2 = await response2.json();
  
      // Combine the data into an object
      const result = {
        todo: data1,
        post: data2
      };
  
      // Log the result to the console
      console.log(result);
  
      // Return the result for further use
      return result;
    }
     catch (error) {
      // Log any error to the console
      console.error(error);
  
     
    }
  }
  
  // Call the function with the given URLs
  fetchTwoData(
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  