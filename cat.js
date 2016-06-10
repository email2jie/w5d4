'use strict';

function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}
Cat.prototype.cuteStatement = function () {
  return `Everyones loves ${this.name}`;
};

Cat.prototype.meow = function () {
  return 'Meow';
};

let c1 = new Cat("Jill", "Jack");
console.log(c1.cuteStatement());
