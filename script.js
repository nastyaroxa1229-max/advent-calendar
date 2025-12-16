const products = {
  1: {
    name: "Dior Lip Glow",
    desc: "Бальзам для губ с эффектом сияния",
    img: "https://via.placeholder.com/300x300?text=Dior"
  },
  2: {
    name: "The Ordinary Niacinamide",
    desc: "Сыворотка для ровного тона",
    img: "https://via.placeholder.com/300x300?text=The+Ordinary"
  },
  3: {
    name: "YSL Libre",
    desc: "Свежий и дерзкий аромат",
    img: "https://via.placeholder.com/300x300?text=YSL+Libre"
  },
  4: {
    name: "Laneige Lip Mask",
    desc: "Ночная маска для губ",
    img: "https://via.placeholder.com/300x300?text=Laneige"
  },
  5: {
    name: "MAC Ruby Woo",
    desc: "Классическая красная помада",
    img: "https://via.placeholder.com/300x300?text=MAC"
  },
  6: {
    name: "La Roche-Posay",
    desc: "Гель для умывания",
    img: "https://via.placeholder.com/300x300?text=LRP"
  },
  7: {
    name: "Drunk Elephant Protini",
    desc: "Крем для лица",
    img: "https://via.placeholder.com/300x300?text=Protini"
  },
  8: {
    name: "Benefit Roller Lash",
    desc: "Тушь с подкручиванием",
    img: "https://via.placeholder.com/300x300?text=Benefit"
  },
  9: {
    name: "Kerastase Elixir Ultime",
    desc: "Масло для волос",
    img: "https://via.placeholder.com/300x300?text=Kerastase"
  }
};

const modal = document.getElementById("modal");
const imgEl = document.getElementById("product-img");
const nameEl = document.getElementById("product-name");
const descEl = document.getElementById("product-desc");

document.querySelectorAll(".day").forEach(day => {
  day.addEventListener("click", () => {
    day.classList.add("open");

    const data = products[day.dataset.day];
    imgEl.src = data.img;
    nameEl.textContent = data.name;
    descEl.textContent = data.desc;

    setTimeout(() => {
      modal.style.display = "block";
    }, 400);
  });
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};
