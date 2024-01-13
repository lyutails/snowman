function appendChildren({elementAppendChildrenTo, children}) {
  for (let i = 0; i <= children.length; i++) {
    if (elementAppendChildrenTo instanceof HTMLElement && children[i] instanceof HTMLElement) {
      elementAppendChildrenTo.appendChild(children[i]);
    }
  }

  return elementAppendChildrenTo;
}

export default appendChildren;
