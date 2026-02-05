const places = [
  {
    name: "Delhi",
    desc: "Capital of India – India Gate, Red Fort, Qutub Minar"
  },
  {
    name: "Jaipur",
    desc: "Pink City – Amer Fort, Hawa Mahal, City Palace"
  },
  {
    name: "Agra",
    desc: "Home of Taj Mahal – Agra Fort, Mehtab Bagh"
  },
  {
    name: "Goa",
    desc: "Beaches & nightlife – Baga, Calangute, Anjuna"
  },
  {
    name: "Manali",
    desc: "Hill station – Snow, adventure & nature"
  }
];

const searchBox = document.getElementById("searchBox");
const results = document.getElementById("results");

searchBox.addEventListener("input", () => {
  const value = searchBox.value.toLowerCase();
  results.innerHTML = "";

  const filtered = places.filter(place =>
    place.name.toLowerCase().includes(value)
  );

  filtered.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${place.name}</h3><p>${place.desc}</p>`;
    results.appendChild(card);
  });
});
