var faker = require('faker');

exports.handler = function (event, context, callback) {
  var inventory = [];
  for (var i = 0; i < 10; i++) {
    var shoe = {};
    var shoeType = getShoeType();
    shoe.name = getShoeName(shoeType);
    shoe.size = getShoeSize();
    shoe.color = getShoeColor();
    shoe.description = getShoeDescription(shoeType);
    shoe.price = getShoePrice();
    inventory.push(shoe);
  }
  callback(null, inventory);
};

function getShoeType() {
  var shoeType = [
    'sneaker', 'sports', 'casual', 'dress', 'boot', 'sandal'
  ];

  return shoeType[getNum(0, shoeType.length - 1)];
}

function getNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getShoeName(shoeType) {
  return faker.company.catchPhraseNoun() + " " + faker.company.catchPhraseDescriptor() + " " + shoeType;
}

function getShoeSize() {
  return getNum(1, 13);
}

function getShoeColor() {
  return faker.commerce.color();
}

function getShoeDescription(shoeType) {
  return "A(n) " + faker.commerce.productAdjective() + " " + faker.commerce.productAdjective() + " " + shoeType + " " + "made from the finest " + faker.commerce.productMaterial() + " specially designed for the" + faker.company.bsBuzz() + " individuals";
}

function getShoePrice() {
  return faker.commerce.price();
}