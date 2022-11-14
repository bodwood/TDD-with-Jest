//Business Logic
export default class Pizza {
  constructor(topping1, topping2, topping3){
    this.topping1 = topping1;
    this.topping2 = topping2;
    this.topping3 = topping3;
  } addToppings(topping1){
    if(topping1 === 'pineapple'){
      return 'yummy';
    }else{
      return 'gross';
    }

  }
}

window.addEventListener("load", function() {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addToppings);
})