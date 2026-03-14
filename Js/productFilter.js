var productsList = [
  "Laptop - 800$",
  "HeadPhones - 100$",
  "Keyboard - 70$",
  "Mouse - 40$",
  "Monitor - 300$",
];

var inputFiled = document.getElementById("inputFiled");
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const filedValue = inputFiled.value.toLowerCase();
  console.log(filedValue);
  const searchResut = productsList.filter((item) =>
    item.toLowerCase().includes(filedValue),
  );
  console.log(searchResut);
  var unorederdlist = document.getElementById("unorederdlist");
  unorederdlist.innerHTML = "";

  if (searchResut.length == 0) {
    return (unorederdlist.innerHTML = "product not found");
  } else {
    searchResut.forEach((itm) => {
      const list = document.createElement("li");
      list.innerHTML = itm;
      unorederdlist.appendChild(list);
    });
  }
});
