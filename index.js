function getRepos (user) {
  const searchURL = `https://api.github.com/users/${user}/repos`;
  console.log(searchURL);
  fetch(searchURL)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
}

function watchForm() {
  $('body').on('click', '#submit', function(event) {
    event.preventDefault;
    const username = $("#username-input").val();
    console.log(username);
    getRepos(username);
  })
}

function displayResults(resultsJson) {
  console.log(resultsJson);
  $('#results-list').empty();
  for (let i = 0; i < resultsJson.length; i++) {
    $('#results-list').append(
      `<li><h3><a href="{resultsJson[i].full_name}">${resultsJson[i].full_name}</h3>`
    )
  };
  $('#results').removeClass('hidden');
}

$(watchForm);
