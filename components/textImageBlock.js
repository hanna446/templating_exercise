import { nodeImageComp } from "./image.js";
/**
 * @param {object} data
 */

const textImageBlock = data => {
  const section = document.createElement("SECTION");
  const title = document.createElement("H1");
  const paragraph = document.createElement("P");
  const containerimg = document.createElement('DIV');
  const containerparagraph = document.createElement('DIV');
  const buttonTheme = document.createElement("BUTTON");
  const buttonPosition = document.createElement("BUTTON");
  const img = data.image;

  title.textContent = data.title;
  paragraph.textContent = data.text;
  buttonTheme.textContent = "changeTheme";
  buttonPosition.textContent = "changePosition";
  buttonTheme.addEventListener("click", () => section.classList.add("dark"));
  const imageNode = nodeImageComp(img, 'text_image_block--inverted');
// containerimg.classList.add('div')
section.appendChild(title);
containerparagraph.appendChild(paragraph)
  containerimg.appendChild(imageNode);
  containerimg.appendChild(containerparagraph)
  section.appendChild(buttonTheme);
  section.appendChild(buttonPosition);

  section.appendChild(containerimg);
//   section.appendChild(paragraph);
//   section.appendChild(containerimg);
//   section.appendChild(buttonTheme);
//   section.appendChild(imageNode);

  if (data.classes) section.classList.add(data.classes);
  return section;
};
export {textImageBlock}