function createLayout({
  elementname,
  tag,
  classname,
  textcontent,
  appendchild,
  appendto,
}) {
  elementname = document.createElement(tag);
  elementname.classList.add(classname);
  if (textcontent) {
    elementname.textContent = textcontent;
  }
  if (appendto) {
    appendto.appendChild(elementname);
  }
  if (appendchild) {
    elementname.appendChild(appendchild);
  }

  return elementname;
}

export default createLayout;
