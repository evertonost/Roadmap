function changeLanguage() {
  const selectedLanguage = document.getElementById("language-selector").value;
  const roadmap = roadmaps[selectedLanguage];

  document.querySelector(".resultados-pesquisa h2").innerText = roadmap.title;
  document.querySelector(".resultados-pesquisa ul").innerHTML = roadmap.content;
}
