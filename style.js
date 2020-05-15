// <!-- ajax call "thecocktaildb.com/api/json/v1/1/filter.php?i="+ingredient -->
    // <!--for loop
    //     call drinks[i].strDrink
    //  -->
$("#search-recipes").on("click", getResults)
$("#search-button").on("click", searchCocktail)
$(document).on("click", ".drink",searchCard)
// function searchForm(event){
//     var ingredient = $(this).val()
//     searchIngredient(ingredient)
// }
function getResults(event){
    var ingredient = $("#ingredientSearch").val().trim()
    searchIngredient(ingredient)
}
function searchIngredient(ingredient){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i="+ingredient,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "1921029623mshc3473e0fc2e5c50p1aba8fjsnfdb3fc7fd01f"
        }
    }
    
    $.ajax(settings).done(function (response) {
        var appendText = []
        $("#searchResults").empty()
        for (i = 0; i < response.drinks.length; i++){
           var ele = $("<a>").text(response.drinks[i].strDrink)
           ele.attr('href', "#cocktailRecipe")
           ele.attr('id', response.drinks[i].strDrink)
           ele.addClass("drink")
           appendText.push(ele, "<br>")
           
        }
        $("#searchResults").append(appendText);
    });
}
function searchCard(event){
    var cocktail = $(this).attr("id")
    findRecipe(cocktail)
}
function searchCocktail(event){
    var cocktail = $("#drinkSearch").val().trim()
    findRecipe(cocktail)
}
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
        $(".drinkOutput").empty()
        $("#cocktailName").text(response.drinks[0].strDrink);
        var img = document.createElement("img");
        img.src = response.drinks[0].strDrinkThumb;
        var src = document.getElementById("cocktailThumbnail");
        src.appendChild(img)
        $("#cocktailGlass").text("Glass type: "+response.drinks[0].strGlass);
        $("#cocktailIngredient").text("Ingredients:")
        if (response.drinks[0].strIngredient1 || response.drinks[0].strMeasure1 !== null){
            $("#cocktailIngredient1").text(response.drinks[0].strIngredient1+": "+response.drinks[0].strMeasure1);
            }
        if (response.drinks[0].strIngredient2 || response.drinks[0].strMeasure2 !== null){
            $("#cocktailIngredient2").text(response.drinks[0].strIngredient2 + ": "+response.drinks[0].strMeasure2);
            }
        if (response.drinks[0].strIngredient3 || response.drinks[0].strMeasure3 !== null){
            $("#cocktailIngredient3").text(response.drinks[0].strIngredient3 + ": "+response.drinks[0].strMeasure3);
            }
        if (response.drinks[0].strIngredient4 || response.drinks[0].strMeasure4 !== null){
            $("#cocktailIngredient4").text(response.drinks[0].strIngredient4 + ": "+response.drinks[0].strMeasure4);
            }
        if (response.drinks[0].strIngredient5 || response.drinks[0].strMeasure5 !== null){
            $("#cocktailIngredient5").text(response.drinks[0].strIngredient5 + ": "+response.drinks[0].strMeasure5);
            }
        if (response.drinks[0].strIngredient6 || response.drinks[0].strMeasure6 !== null){
            $("#cocktailIngredient6").text(response.drinks[0].strIngredient6 + ": "+response.drinks[0].strMeasure6);
            }
        if (response.drinks[0].strIngredient7 || response.drinks[0].strMeasure7 !== null){
            $("#cocktailIngredient7").text(response.drinks[0].strIngredient7 + ": "+response.drinks[0].strMeasure7);
            }
        if (response.drinks[0].strIngredient8 || response.drinks[0].strMeasure8 !== null){
            $("#cocktailIngredient8").text(response.drinks[0].strIngredient8 + ": "+response.drinks[0].strMeasure8);
            }
        if (response.drinks[0].strIngredient9 || response.drinks[0].strMeasure9 !== null){
            $("#cocktailIngredient9").text(response.drinks[0].strIngredient9 + ": "+response.drinks[0].strMeasure9);
            }
        if (response.drinks[0].strIngredient10 || response.drinks[0].strMeasure10 !== null){
            $("#cocktailIngredient10").text(response.drinks[0].strIngredient10 + ": "+response.drinks[0].strMeasure10);
            }
        if (response.drinks[0].strIngredient11 || response.drinks[0].strMeasure11 !== null){
            $("#cocktailIngredient11").text(response.drinks[0].strIngredient11 + ": "+response.drinks[0].strMeasure11);
            }
        if (response.drinks[0].strIngredient12 || response.drinks[0].strMeasure12 !== null){
            $("#cocktailIngredient12").text(response.drinks[0].strIngredient12 + ": "+response.drinks[0].strMeasure12);
            }
        if (response.drinks[0].strIngredient13 || response.drinks[0].strMeasure13 !== null){
            $("#cocktailIngredient13").text(response.drinks[0].strIngredient13 + ": "+response.drinks[0].strMeasure13);
            }
        if (response.drinks[0].strIngredient14 || response.drinks[0].strMeasure14 !== null){
            $("#cocktailIngredient14").text(response.drinks[0].strIngredient14 + ": "+response.drinks[0].strMeasure14);
            }
        if (response.drinks[0].strIngredient15 || response.drinks[0].strMeasure15 !== null){
            $("#cocktailIngredient15").text(response.drinks[0].strIngredient15 + ": "+response.drinks[0].strMeasure15);
            }
        $("#cocktailInstructions").text("Instructions: "+response.drinks[0].strInstructions)

    });

}
// findRecipe("Manhattan")