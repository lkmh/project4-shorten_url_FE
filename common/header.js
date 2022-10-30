const template = document.createElement("template")

template.innerHTML=`
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
<title>Hello, world!</title>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shorten URL</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/project4-shorten_url_FE/">Home</a>
          </li>
          <li class="nav-item">
            <a id="nav-bar-analytics" hidden class="nav-link" href="/project4-shorten_url_FE/analytics">Analytics</a>
          </li>
        </ul>
        <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a id="nav-bar-login" class="nav-link" href="/project4-shorten_url_FE/login">Login</a>
                </li>
                <li class="nav-item">
                  <a  id="nav-bar-signup" class="nav-link" href="/project4-shorten_url_FE/signup">SignUp</a>
                </li>
                <li class="nav-item">
                  <a id="nav-bar-changePassword" class="nav-link" href="/project4-shorten_url_FE/changePassword" hidden>Change Password</a>
                </li>
                <li class="nav-item">
                  <a id="nav-bar-logout"  class="nav-link" href="#" onclick="logout()" hidden>Logout</a>
                </li>
              </ul>
        </span>
      </div>
    </div>
  </nav>
`

document.head.appendChild(template.content)