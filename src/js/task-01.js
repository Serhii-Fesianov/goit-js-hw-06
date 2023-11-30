let ulElement = document.querySelector("#categories");

console.log("Number of categories:", ulElement.childElementCount);

ulElement.querySelectorAll(".item").forEach((element) => {
  console.log("Category: ", element.querySelector("h2").textContent);
  element.querySelectorAll("ul").forEach((element) => {
    console.log("Elements: ", element.childElementCount);
  });
});
