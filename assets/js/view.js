function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

$.getJSON('assets/js/data.json', function (data) {

  datarandom = (shuffle(data))

  $('#views').empty().hide();

  for (let i = 0; i < 
    datarandom.length; i++) {

    var html = '<a href="' + datarandom[i].url + '" target="_blank" rel="noopener">';
    html += '<div class="Card four columns" style="opacity: 1; transform: none;">';
    html += '<img class="cover" srcset="' + datarandom[i].img + '" alt="' + datarandom[i].title + '">';
    html += '<div class="data">';
    html += '<h2>' + datarandom[i].title + '</h2>';
    html += '<p>' + datarandom[i].description + '</p></div></div></a>';

    $('#views').append(html).fadeIn();
  };

});




// Get the button
let mybutton = document.getElementById("btn-top");
    
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}