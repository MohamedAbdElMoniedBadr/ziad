var base_url = 'https://mangadb-r282.herokuapp.com';

// HELPER FUNCTIONS

// Retrieves the token from local storage and returns it.
function getToken() {
  return window.localStorage.getItem("token");
}

// Retrieves the token from local storage and returns it.
function getPrevManga() {
  return JSON.parse(window.localStorage.getItem("prevManga"));
}

// Deletes the token from local storage and removes manga from display.
function logOut() {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("prevManga");
  clean();
  console.log('Bye bye');
}

// Removes manga from display
function clean() {
  $(".mangas").empty();
}

// Retires the manga information and turns it into html and returns it
function mangaInfo(manga) {
  var title = '<h1>' + window.s.titleize(manga.title) + '</h1>';
  var photo = '<img class="thumbnail" src="' + manga.thumbnail + '"</img>';
  var author = '<span id="author"> <strong>Author:</strong> ' + window.s.titleize(manga.author) + '</span>';
  var status = '<span id="status"> <strong>Status:</strong> ' + window.s.humanize(manga.seriesStatus) + '</span>';
  var userStats = '<span id="userStats"> <strong>My Status:</strong> ' + window.s.humanize(manga.userStatus) + '</span>';
  var chapter = '<span id="chapter"> <strong>Current Chapter:</strong> <a href="' + manga.url + '" target="_blank">' + manga.chapter + '</a></span><br>';
  var type = '<span id="type"> <strong>Type:</strong> ' + window.s.humanize(manga.type) + '</span>';
  var direction = '<span id="direction"> <strong>Reading Direction:</strong> ' + window.s.titleize(manga.direction) + '</span>';
  var altName = '<span id="altName"> <strong>Other Names:</strong> ' + window.s.titleize(window.s.toSentence(manga.altName, ", ", ", ")) + '</span>';
  var categories = '<span id="categories"> <strong>Categories:</strong> ' + window.s.titleize(window.s.toSentence(manga.categories, ", ", ", ")) + '</span>';
  var plot = '<p id="plot"> <strong>Plot:</strong> ' + window.s.humanize(manga.plot) + '</p>';
  var html = '<div class="manga-panel tg-wrap"><table><tr><th colspan="3">' + title + '</th></tr><tr><td rowspan="4">' + photo + '</td><td>' + status + '</td><td>' + userStats + '</td></tr><tr><td>' + author + '</td><td>' + direction + '</td></tr><tr><td>' + chapter + '</td><td>' + type + '</td></tr><tr><td>' + categories + '</td><td>' + altName + '</td></tr><tr><td colspan="3">' + plot + '</td></tr></table></div>';
  return html;
  
  
}

// FORM FUNCTIONS

// Register new user.
function regUser() {
  var username = document.forms["signUp"]["username"].value;
  var firstname = document.forms["signUp"]["firstname"].value;
  var lastname = document.forms["signUp"]["lastname"].value;
  var email = document.forms["signUp"]["email"].value;
  var password = document.forms["signUp"]["password"].value;
  var password2 = document.forms["signUp"]["password2"].value;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": base_url + "/api/users",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
      "username": username,
      "password": password,
      "email": email,
      "firstname": firstname,
      "lastname": lastname
    }
  };

  if (password === password2) {
    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  } else {
    alert("No Matching password");
  }
}

// Logs in the user
function logIn() {
  var username = document.forms["login"]["username"].value;
  var password = document.forms["login"]["password"].value;
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": base_url + "/api/auth",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
      "username": username,
      "password": password
    }

  };

  $.ajax(settings).done(function(data) {
    window.localStorage.setItem('token', data.token);
    console.log('Welcome back!');
  });
}

