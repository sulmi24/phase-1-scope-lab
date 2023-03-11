// Write your solution in this file!

var customerName = "bob";
var bestCustomer;
const favoriteCustomer = "GoGo";
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  return (bestCustomer = "not bob");
}

function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

function changeLeastFavoriteCustomer() {
  return (favoriteCustomer = "superman");
}
