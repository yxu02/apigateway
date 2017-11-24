var faker = require('faker');

exports.handler=function(event, context, callback){
  var order={};
  
  order.id = event.id;
  order.name = getOrderName();
  order.address=getOrderAddress();
  order.city = getOrderCity();
  order.state= getOrderAddressState();
  order.phone= getOrderPhone();
  order.shipMethod= getOrderShipMethod();
  order.price = getOrderPrice();
  
  
  callback(null, order);
};

getOrderName = function(){
  return faker.name.findName();
};

getOrderAddress = function(){
  return faker.address.streetAddress();
};

getOrderCity = function(){
  return faker.address.city();
};

getOrderAddressState = function(){
  return faker.address.state();
};

getOrderPhone = function(){
  return faker.phone.phoneNumber();
};

getOrderShipMethod = function(){
  var shipMethod = ['FedEx', 'USPS', 'UPS', 'DHL']
  return shipMethod[Math.floor(Math.random()*4)];
};

getOrderPrice = function(){
  return faker.commerce.price();
};