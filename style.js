// <!-- ajax call "thecocktaildb.com/api/json/v1/1/filter.php?i="+ingredient -->
    // <!-- 
    //     call drinks[i].strDrink
    //  -->
// <!-- ajax call "thecocktaildb.com/api/json/v1/1/search/php?s="+cocktail -->
//     <!-- 
//         call strDrink and saveButton
//         call strDrinkThumb
//         call strGlass
//         call strIngredient[1-15] and strMeasure[1-15]
//         call strInstructions
//     -->
function findRecipe(cocktail){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/search.php?s="+cocktail,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "1921029623mshc3473e0fc2e5c50p1aba8fjsnfdb3fc7fd01f"
        }
    }

    
    $.ajax(settings).done(function (response) {
        console.log(response.drinks);
    });
    // console.log("is it logging?")
    // var cocktailName="https://thingproxy.freeboard.io/fetch/https://thecocktaildb.com/api/json/v1/1/search/php?s="+cocktail
    // $.ajax({
    //     url: cocktailName,
    //     method: "GET",
    //     headers: {
    //         "Access-Control-Allow-Origin": "*"
    //       }          
    //   })
    //   .then(function(response){
    //     var instructions = response
    //     console.log(instructions)
    //   }).fail(function(error) {
    //     console.error(error);
    //  });
}
findRecipe("Manhattan")