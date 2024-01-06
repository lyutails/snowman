const footer = document.createElement("div");
footer.classList.add("snowman_footer");

const credentials = document.createElement("div");
credentials.classList.add("snowman_credentials");
footer.append(credentials);

const school = document.createElement("a");
school.classList.add("snowman_info");
credentials.append(school);
school.textContent = "RSSchool";
school.setAttribute("href", "https://rs.school/");

const creator = document.createElement("a");
creator.classList.add("snowman_info");
credentials.append(creator);
creator.textContent = "lyutails";
creator.setAttribute("href", "https://github.com/lyutails");

const orange = document.createElement("div");
orange.classList.add("snowman_orange");
footer.append(orange);

orange.onclick = function () {
  if (orange.classList.contains("anim_forward")) {
    orange.classList.remove("anim_forward");
    orange.classList.add("anim_backward");
  } else {
    orange.classList.remove("anim_backward");
    orange.classList.add("anim_forward");
  }
};

export default footer;
