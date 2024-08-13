const searchInput = document.querySelector("input");
const cardDiv = document.querySelector(".cardDiv");

const verileriGetir = async () => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Hata kodu: ${res.status}`);
    }
    const data = await res.json();
    search(data);
  } catch (error) {
    console.log(error);
  }
};

function search(data) {
  cardDiv.innerHTML = "";
  data.meals.forEach((meal) => {
    cardDiv.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
            </div>
        </div>
        `;
  });
}
searchInput.addEventListener("input", verileriGetir);
