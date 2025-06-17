//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num < max && num > second) {
      second = num;
    }
  }

  return second === -Infinity ? -Infinity : second;
}

function handleFind() {
  const input = document.getElementById("arrayInput").value;
  const numArray = input
    .split(",")
    .map(s => s.trim())
    .filter(s => s !== "")
    .map(Number)
    .filter(n => !isNaN(n));

  const result = secondHighest(numArray);
  document.getElementById("result").innerText =
    result === -Infinity ? "Invalid Input or No Second Highest" : `Second Highest: ${result}`;
}
