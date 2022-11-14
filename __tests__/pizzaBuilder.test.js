import Pizza from '../src/js/pizzaBuilder';

describe('pizza', () => {
  test('should return a pizza with three toppings', () => {
    const pizza = new Pizza('pepperoni', 'onion', 'olives');
    expect(pizza.topping1).toEqual('pepperoni');
    expect(pizza.topping2).toEqual('onion');
    expect(pizza.topping3).toEqual('olives');
  });
  test('should return "yummy" if topping is pineapple', () => {
    const pizza = new Pizza('pineapple', 'ham', 'cheese');
    expect(pizza.addToppings('pineapple')).toEqual('yummy');
  });
  test('should return "gross" if topping is green beans', () => {
    const pizza = new Pizza('green beans', 'ham', 'cheese');
    expect(pizza.addToppings('green beans')).toEqual('gross');
  });
});