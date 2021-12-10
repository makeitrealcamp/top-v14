const createElement = (tagElement, props={}, children=[]) => {
  const element = document.createElement(tagElement);

  Object.entries(props).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })

    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child))
      } else {
        element.appendChild(child)
      }
    })

  return element
}

export default createElement;