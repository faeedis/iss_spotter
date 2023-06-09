const { fetchMyIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("Error fetching IP:", error.message);
  } else {
    console.log("Fetched IP:", ip);
  }
});
