
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

    
