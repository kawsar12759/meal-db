function loadData() {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals));
}


function showMeals(meals) {
    const mealsDiv = document.getElementById('meals-container');
    mealsDiv.innerText = '';
    for (meal of meals) {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
                <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 150)}..</p>
                    </div>
                </div>`;
        mealsDiv.appendChild(mealDiv);
    }
}

