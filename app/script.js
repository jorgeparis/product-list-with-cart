async function callApi() {
  let url = "https://www.omdbapi.com/?i=tt3896198&apikey=c523b04c";
  try {
    const response = await fetch(url, "GET");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

callApi();
