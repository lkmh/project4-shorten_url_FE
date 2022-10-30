const domainName = "https://project4-short-url.herokuapp.com/";
const headers = {
  "Access-Control-Allow-Origin": location.origin
}

// setTimeout(function () {
//   if(window.location.hash != '#r') {
//       window.location.hash = 'r';
//       window.location.reload(1);
//   }
// }, 1000);  // After 5 secs

const user = async () => {
  const endpoint = "v1/user"
  const complete_URL = domainName + endpoint 
  await axios.get(complete_URL,{ withCredentials: true, headers})
  .then(response => {
    if (response.status == 200) {
      console.log("True")
      const NAVanalytics = document.getElementById('nav-bar-analytics')
      NAVanalytics.removeAttribute("hidden")
      const NAVLogout = document.getElementById('nav-bar-logout')
      NAVLogout.removeAttribute("hidden")
      const NAVChangePassword = document.getElementById('nav-bar-changePassword')
      NAVChangePassword.removeAttribute("hidden")
      const NAVHome = document.getElementById('nav-bar-home')
      NAVHome.setAttribute("hidden", true);
      const NAVSignup = document.getElementById('nav-bar-signup')
      NAVSignup.setAttribute("hidden", true);
      const NAVLogin = document.getElementById('nav-bar-login')
      NAVLogin.setAttribute("hidden", true);
    }
   response_login = response; 
   console.log(`user;`, response_login);
 })
  .catch(error => console.error(error));
 };


function shortenIT(form) {
  console.log('Domain',domainName)
  const params = form.longURL.value
  console.log('Params',params)
  const endpoint = "v1/shorten_url"
  const complete_URL = domainName + endpoint + "?long_URL=" + params
  console.log("POST: ", complete_URL )
  axios.defaults.withCredentials = true
  axios.post(complete_URL,{ withCredentials: true}, {headers})
        .then(response => {
              response_login = response['data']['shorten_url'];
              console.log("OUTPUT HASH:", response_login)
              shortItURL = domainName + response_login
              form.longURL.value = shortItURL
              navigator.clipboard.writeText(form.longURL.value);
              const postP = document.getElementById("postShorten")
              postP.value = shortItURL
              const preP = document.getElementById("preShorten")
              preP.value = params
              postP.style.backgroundColor = "#EBF5FB"
              const postP_button = document.getElementById("postShortenButton")
              postP_button.disabled = true
              })
        .catch(error => 
              console.error(error)
              );
  
  
  return false
  };

function shortenITv2(form) {
    console.log('Domain',domainName)
    const params = form.longURL.value
    console.log('Params',params)
    const endpoint = "v2/shorten_url"
    const complete_URL = domainName + endpoint + "?long_URL=" + params
    console.log("POST: ", complete_URL )
    axios.get(complete_URL,{ withCredentials: true, headers})
          .then(response => {
                response_login = response['data']['shorten_url'];
                console.log("OUTPUT HASH:", response_login)
                shortItURL = domainName + response_login
                form.longURL.value = shortItURL
                navigator.clipboard.writeText(form.longURL.value);
                const postP = document.getElementById("postShorten")
                postP.value = shortItURL
                const preP = document.getElementById("preShorten")
                preP.value = params
                postP.style.backgroundColor = "#EBF5FB"
                const postP_button = document.getElementById("postShortenButton")
                postP_button.disabled = true
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
  location.reload();
  window.location.href = "/analytics";
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
    
    const endpoint = "v1/forget_password_step1"

    const complete_URL = domainName + endpoint + "?email=" + email
    console.log("Complete URL- forget1", complete_URL)
    axios.post(complete_URL, { withCredentials: true, headers})
          .then(response => {
            if (response.status == 200) {
                console.log("True")
                const reset1 = document.getElementById('reset1Form')
                reset1.setAttribute("hidden", true);
                const reset2 = document.getElementById('reset2Form')
                reset2.removeAttribute("hidden")
                }})
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



function changeForm() {
  const oldPassword = document.getElementById('changeForm').elements['oldPassword'].value;
  const newPassword = document.getElementById('changeForm').elements['newPassword'].value;

  const endpoint = "v1/change_password"
  const complete_URL = domainName + endpoint + "?old_password=" + oldPassword + "&new_password=" + newPassword
  console.log("Complete URL- change", complete_URL)
  axios.get(complete_URL, { withCredentials: true, headers})
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


function getAnalytics() {
  if (window.location.pathname=='/analytics') {
    const endpoint = "v1/analytics"
    const complete_URL = domainName + endpoint 
    console.log("Complete URL- analytiics", complete_URL)
    axios.get(complete_URL, { withCredentials: true, headers})
          .then(response => {
                console.log(response)
                response_login = response['data']['data'];
                console.log("OUTPUT :", response_login) 
                console.log(response_login.length)
                if (response_login.length > 0) {
                  console.log("into if")
                  var temp = "";
                  response_login.forEach((itemData) => {
                    console.log(itemData)
                    temp += "<tr>";
                    temp += "<td>" + itemData.hash_url + "</td>";
                    temp += "<td>" + itemData.total_view_count + "</td>";
                    temp += "<td>" + itemData.original_url + "</td></tr>";
                  });
                console.log(temp)
                  document.getElementById('analyticsTable').innerHTML = temp;
                }})
          .catch(function (error) {
                  if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                  }
                })
    return false
    }};
getAnalytics()

function logout() {
  const endpoint = "v1/logout"
  const complete_URL = domainName + endpoint 
  axios.delete(complete_URL,  { withCredentials: true, headers})
        .then(response => {
              response_login = response;
              console.log("Logout:", response_login)
       
              })
        .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                }
              })
  window.location.href = "/";
  return false
  };


setTimeout(function () {
if(window.location.hash != '#r') {
    window.location.hash = 'r';
    window.location.reload(1);
}
}, 2000);  // After 5 secs

user()