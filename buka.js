/**
 * Important
 *  You might encounter an error with the word "CORS" in it.
 *  This means that your browser is preventing you from sending post request to another endpoint.
 *  This is an important security measure, but for this exercise, we want to bypass it.
 *
 * You'll have to modify your fetch request like so:
 *      fetch("/some/endpoint", {
 *          method: "POST"
 *          mode: "no-cors",
 *          // the rest of your fetch parameters here.
 *      })
 *
 */
const ENDPOINT = "https://buka-buka.onrender.com";

// Step 1:
// Create a function that makes a POST request to buka's wake up API endpoint
async function wakeup() {
  fetch(ENDPOINT + "/api/wakeup", {
    method: "POST",
    mode: "no-cors",
  });
}
// Step 2 is in the html file :)

// Step 3: Make a sleep() function which calls buka's sleep endpoint
async function sleep() {
  fetch(ENDPOINT + "/api/sleep", {
    method: "POST",
    mode: "no-cors",
  });
}
// Step 4 (optional): Make a POST request which sets buka's happiness
//  (hint: you'll need to get the value of the input field with id "happiness")

async function sendHappiness() {
  let happiness = document.getElementById("happiness").value;
  const params = { happiness }; // Set your params
  // Don't worry about this :)
  const body = Object.keys(params)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    )
    .join("&");

  return await fetch(ENDPOINT + "/api/happiness", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", // specially not this :)
    },
    mode: "no-cors", // nor this :)
    body: body,
  });
}
