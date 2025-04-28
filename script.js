function switchLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  if (!window.translations || !window.translations[lang]) return;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (window.translations[lang][key]) {
      el.innerHTML = window.translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  applyTranslations(lang);

  const setupHover = (dropdownId, menuId) => {
    const dropdown = document.getElementById(dropdownId);
    const menu = document.getElementById(menuId);
    if (!dropdown || !menu) return;

    let timeout;
    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
      menu.style.pointerEvents = "auto";
    });

    dropdown.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
      }, 500);
    });

    menu.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
    });

    menu.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
      }, 500);
    });
  };

  setupHover("workDropdown", "workMenu");
  setupHover("toolsDropdown", "toolsMenu");

  // Section'lara animasyonu tetikle
  document.querySelectorAll('section, footer, .fade1, .fade2, .fade3, .fade4, .fade5, main h2, main p, main img, main div').forEach((sec) => {
    sec.style.animationPlayState = "running";
  });
});

