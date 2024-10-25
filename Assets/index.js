window.onload = function(){
    fetch("https://api.unsplash.com/photos?per_page=10&client_id=${API_KEY}").then(convert_to_json)
    .then (function(data){
        generateCards(data);
    });
}
function generateCards(data){
    console.log(data);
}