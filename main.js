document.addEventListener("DOMContentLoaded", () => {
  Jokes();
})    
const Jokes = async () => {

  try {
      const resp = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await resp.json();

      updateElement('data-id', 'h2', data.id)
      updateElement('data-type', 'span', data.type)
      updateElement('data-setup', 'p', data.setup)
      updateElement('data-punchline', 'span', data.punchline)
      
  } catch (e) {
      console.log(e, 'oops something went wrong...');
  }
}
function updateElement(elementId, tag,text){
  const element = document.getElementById(elementId)
  if(element){
    element.textContent = text
  }else{
createElement(tag,elementId,text)
  }
}
function createElement(tag,elementId, text){
const element = document.createElement(tag)
element.id = elementId
element.textContent = text
document.querySelector('.Jokebox').appendChild(element)
}
