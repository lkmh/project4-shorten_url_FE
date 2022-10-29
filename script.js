
const headers = {
  "Access-Control-Allow-Origin": location.origin
}

function shortenIT(form) {
  const domainName = "https://project4-short-url.herokuapp.com/";
  
  console.log('Domain',domainName)
  const params = form.longURL.value
  console.log('Params',params)
  const endpoint = "v1/shorten_url"
  const complete_URL = domainName + endpoint + "?long_URL=" + params
  console.log("POST: ", complete_URL )
  axios.post(complete_URL,{ withCredentials: true, headers})
        .then(response => {
              response_login = response['data']['shorten_url'];
              console.log("OUTPUT HASH:", response_login)
              shortItURL = domainName + response_login
              form.longURL.value = shortItURL
              navigator.clipboard.writeText(form.longURL.value);
              
              const postP = document.getElementById("postShorten")
              postP.removeAttribute("hidden")
              const postP_button = document.getElementById("postShortenButton")
              postP_button.removeAttribute("hidden")
              const string  = params + shortItURL
              console.log(string)
              const spacesRequired = 97 - string.length
              postP.value = params + ":" + " ".repeat(spacesRequired-1) + shortItURL
              navigator.clipboard.writeText(form.longURL.value);
              form.reset()
              })
        .catch(error => 
              console.error(error)
              );
  
  
  return false
  };

    


function login() {
  const email = document.getElementById('loginForm').elements['email'].value;
  const password = document.getElementById('loginForm').elements['password'].value;
  const params = {
                  "email" : email,
                  "password": password
                }
  console.log("params: ", params)
  const domainName = "https://project4-short-url.herokuapp.com/";
  const endpoint = "v1/login"
  const complete_URL = domainName + endpoint 
  axios.post(complete_URL, params, { withCredentials: true, headers})
        .then(response => {
              response_login = response;
              console.log("OUTPUT :", response_login)
              })
        .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                }
              })
  return false
  };


function signup() {
  const email = document.getElementById('loginForm').elements['email'].value;
  const password = document.getElementById('loginForm').elements['password'].value;
  const params = {
                  "email" : email,
                  "password": password
                }
  console.log("params: ", params)
  const domainName = "https://project4-short-url.herokuapp.com/";
  const endpoint = "v1/signup"
  const complete_URL = domainName + endpoint 
  axios.post(complete_URL, params, { withCredentials: true, headers})
        .then(response => {
              response_login = response;
              console.log("OUTPUT :", response_login)
              })
        .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                }
              })
  return false
  };

function reset1Form() {
    const email = document.getElementById('reset1Form').elements['email1'].value;
    const domainName = "https://project4-short-url.herokuapp.com/";
    const endpoint = "v1/forget_password_step1"

    const complete_URL = domainName + endpoint + "?email=" + email
    console.log("Complete URL- forget1", complete_URL)
    axios.post(complete_URL, { withCredentials: true, headers})
          .then(response => {
                response_login = response;
                console.log("OUTPUT :", response_login)
                })
          .catch(function (error) {
                  if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                  }
                })
    return false
    };

function reset2Form() {
      const code = document.getElementById('reset2Form').elements['temp_hash'].value;
      const email = document.getElementById('reset2Form').elements['email2'].value;
      const password = document.getElementById('reset2Form').elements['password'].value;
      const domainName = "https://project4-short-url.herokuapp.com/";
      const endpoint = "v1/forget_password_step2"
      const complete_URL = domainName + endpoint + "?temp_hash=" + code + "&email=" + email + "&new_password=" + password
      console.log("Complete URL- forget2", complete_URL)
      axios.patch(complete_URL, { withCredentials: true, headers})
            .then(response => {
                  response_login = response;
                  console.log("OUTPUT :", response_login)
                  })
            .catch(function (error) {
                    if (error.response) {
                      // The request was made and the server responded with a status code
                      // that falls out of the range of 2xx
                      console.log(error.response.data);
                    }
                  })
      return false
      };