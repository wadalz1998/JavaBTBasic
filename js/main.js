function showListNumber(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var number = data[i];
    content += number + " ";
  }
  return content;
}
var listNumber = [];
function addNumber() {
  const txtNumber = document.getElementById("txtNumber").value * 1;
  listNumber.push(txtNumber);
  const content = showListNumber(listNumber);
  document.getElementById("txtNumber").value = "";
  document.getElementById("showListNumber").innerHTML = content;
}

function clearArry() {
  listNumber = [];
  var content = "";
  document.getElementById("showListNumber").innerHTML = content;
}
function sumNumberThanZero() {
  var sum = 0;
  for (var i = 0; i < this.listNumber.length; i++) {
    if (listNumber[i] > 0) {
      sum += listNumber[i];
    }
  }

  var content = "Tổng các số dương : " + sum;
  document.getElementById("showResult").innerHTML = content;
}
function countAmount() {
  var count = 0;
  for (var i = 0; i < this.listNumber.length; i++) {
    if (listNumber[i] > 0) {
      count++;
    }
  }
  document.getElementById("showResult").innerHTML = "";
  var content = "Tổng số lượng số dương : " + count;
  document.getElementById("showResult").innerHTML = content;
}
function searchNumberSmaller() {
  var temp = 0;
  temp = this.listNumber[0];
  for (var i = 0; i < this.listNumber.length; i++) {
    if (temp > listNumber[i]) {
      temp = listNumber[i];
    }
  }
  document.getElementById("showResult").innerHTML = "";
  var content = "Số Nhỏ nhất : " + temp;
  document.getElementById("showResult").innerHTML = content;
}
function searchNumberSmallerThanZero() {
  var temp = 0;
  temp = this.listNumber[0];
  for (var i = 0; i < this.listNumber.length; i++) {
    if (listNumber[i] > 0) {
      if (temp > listNumber[i]) {
        temp = listNumber[i];
      }
    }
  }
  document.getElementById("showResult").innerHTML = "";
  var content = "Số nguyên dương Nhỏ nhất : " + temp;
  document.getElementById("showResult").innerHTML = content;
  console.log(4 % 2);
}
function numberLastCanDivide() {
  var result = 0;
  var count = 0;

  if (this.listNumber.length >= 1) {
    for (var i = this.listNumber.length - 1; i >= 0; i--) {
      if (listNumber[i] % 2 == 0) {
        result = this.listNumber[i];
        count++;
        break; 
      }
    }
  }

  document.getElementById("showResult").innerHTML = "";
  if (count == 0) {
    result = -1;
  }
  var content = "Số chẵn cuối cùng của mảng : " + result;
  document.getElementById("showResult").innerHTML = content;
}
