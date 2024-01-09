const footer = document.createElement("div");
footer.classList.add("snowman_footer");

const credentials = document.createElement("div");
credentials.classList.add("snowman_credentials");
footer.append(credentials);

const school = document.createElement("a");
school.classList.add("snowman_info", "rsschool");
credentials.append(school);
// school.textContent = "RSSchool";
school.setAttribute("href", "https://rs.school/");

const creator = document.createElement("a");
creator.classList.add("snowman_info");
credentials.append(creator);
creator.setAttribute("href", "https://github.com/lyutails");

const creatorName = document.createElement("p");
creatorName.textContent = "lyutails";
creator.appendChild(creatorName);

const creatorIcon = document.createElement("span");
creatorIcon.classList.add("snowman_creator_icon");
creator.appendChild(creatorIcon);

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
