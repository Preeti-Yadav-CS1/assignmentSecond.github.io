let movie;

// function to load api
function loaddoc(){
    let id = document.getElementById("search").value;

    // xmlhttprequest in result
    const result = new XMLHttpRequest();

    // load function
    result.onload = function(){
        movie = JSON.parse(this.responseText);

        // print
        console.log(movie);
        display();
    }

    // api request
    result.open("GET", `https://api.tvmaze.com/search/shows?q=${id}`);

    // send particular result
    result.send();
}

// display of result
display = () =>{
    // 
    document.getElementById("search").value = "";

    let movie_image = ``;

    // movie image display
    for(let image of movie){

        // result showen for all image shown by api
        movie_image = `${movie_image}<img src="${image.show.image.medium}" alt="">`
    }

    // dispaly result
    document.querySelector(".image-div").innerHTML = movie_image;


}


// theme selector

const selectTh = document.querySelectorAll(`[name="theme"]`);
// select your theme

console.log(selectTh);


// local storage for theme
const storage = function(selectTh)
{
    // store
    localStorage.setItem('theme',selectTh);
}


// select particular theme to apply

selectTh.forEach(optionsSelect => {

    // select options from given 5
    optionsSelect.addEventListener('click',()=>{
        storage(optionsSelect.id);

    })
    
});


// finally apply theme
const finalTh = function()
{
    // present theme storage 
    const presentTheme = localStorage.getItem('theme');

    // display
    document.getElementById(presentTheme).checked = true;
}

// load function for present theme
document.onload = finalTh();