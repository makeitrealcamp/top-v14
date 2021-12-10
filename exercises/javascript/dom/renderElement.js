export const renderElement = (element, root) => {
  const dom = document.getElementById(root)
  dom.appendChild(element)
}