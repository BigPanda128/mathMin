// Your code here.
function min(num1, num2) {
  if (num1 == num2)
    return num1;
  else if (num1 <= num2)
    return num1;
  else (num2 <= num1)
  return num2;
}
print(min(0, 10));
// -> 0
print(min(0, -10));
// -> -10
print(min(11, 11));

