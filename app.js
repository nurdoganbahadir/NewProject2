const searchInput = document.querySelector(".form-control");

const verileriGetir = async () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Hata kodu: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
