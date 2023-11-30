const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const array = ingredients.map(element => {
  
  const item = document.createElement('li')
  item.textContent = element
  item.classList.add('item')
  
  return item 
});
list.append(...array)
console.log(array)

