const state = {
nextPage = 1;
requestInProgress: false
};

// go and get the images

const searchFlickr = function (keywords) {

if(state.requestInProgress){
  return;
}


  state.requestInProgress = true;
  console.log("searching for", keywords);
  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
  $.getJSON(flickrURL, {
    method: "flickr.photos.search", //not to be confused with HTTP methods like GET/POST
    text: keywords,
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    format: "json",
    page: state.nextPage++,
  })
    .done(showImages)
    .done(function (info) {
      state.requestInProgress = false
    });
};

// show iamges
const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    console.log(photo);
    //generate url
    const thumbnailURL = generateURL(photo);

    const $img = $("<img>", { src: thumbnailURL });
    $img.appendTo("#images");
    //create an <img> tag

    //display that <img>
  });
};
const generateURL = function (p) {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg",
  ].join("");
};

$(document).ready(function () {
  // on form submit
  $("#search").on("submit", function (event) {
    event.preventDefault(); // disable the form being submitted to the server

    const searchTerms = $("#query").val();
    searchFlickr(searchTerms);
  });

  // find the search terms
  // get results from flicker
  // display results
  $(window).on("scroll", function () {
    //cal the scroll bttm
    const scrollBottom =
      $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 100) {
      const searchTerms = $("#query").val();
      searchFlickr(searchTerms);
    }
    // if the scroll bttm is beneaht some threshhold
    // search flickr agin
  });
});
