// error message 
document.getElementById('error-message').style.display='none';
const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    // clear data
    searchField.value='';
    // error message 
    document.getElementById('error-message').style.display='block';
    if(searchText==''){
        //please write something to display
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // load data
        fetch(url)
        .then(res=>res.json())
        .then(data=>displaySearchResult(data.meals))
        .catch(error=> displayError(error))
    }
}
const displayError= error=>{
    // error message 
document.getElementById('error-message').style.display='block';
}
const displaySearchResult=meals=>{
    document.getElementById('error-message').style.display='none';
    const searchResult = document.getElementById('search-result');
    searchResult.textContent= '';
    if(meals.length==0){
        //search result not found
        document.getElementById('error-message').style.display='block';

    }
    meals.forEach(meal=> {
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="Meal Title">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    });
}
const loadMealDetail = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetail(data.meals[0]))

}
const displayMealDetail = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="Meal Title">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">YouTube</a>
                    </div>
    `;
    mealDetails.appendChild(div);
}
const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
console.log(bondCode)