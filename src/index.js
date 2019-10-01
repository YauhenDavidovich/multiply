module.exports = function multiply(first, second) {
  let first_number = BigInt(first);
  let second_number = BigInt(second);
  let product_number = BigInt(first_number*second_number);
  return String(product_number);  
}
