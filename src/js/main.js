// console.log("Hello Cybersoft 1");
// console.log("Hello Cybersoft 1");
// console.log("Hello Cybersoft 1");
// console.log("Hello Cybersoft 1");
// console.log("Hello Cybersoft 1");
// console.log("Hello Cybersoft 1");
// console.log("Hello Cybersoft 1");
// console.log("Hello Cybersoft 1");

// export: khi import tên hàm nằm trong {}
import { getElement } from "./method.js";
// export default: tên hàm không nằm trong {}
// import getElement from "./method.js";

// FUNCTION DECLARATION
/*
    - tái sử dụng code 
    - dễ bảo trì code 
    - giúp cho code rõ ràng, mỗi function chỉ nên đảm nhiệm 1 nghiệp vụ


    - quy tắc đặt tên function: 
    + đặt tên biến có ý nghĩa 
    + đặt theo quy tắc camelCase
    + thường bắt đầu bằng động từ

    function nameFunction(parameter) {
        // code xử lý

        parameter
    }
*/

function handleSayHello(name) {
  console.log("Xin chào", name);
}

// gọi hàm
// parameter: là input khi định nghĩa hàm
// argument: giá trị truyền khi gọi hàm
handleSayHello("Nam");
handleSayHello("Tiêns");

// let tagP1 = document.querySelector(".txt1");
// tagP1.innerHTML = "Thẻ p thứ 1";
// tagP1.style.background = "red";

// let tagP2 = document.querySelector(".txt2");
// tagP2.innerHTML = "Thẻ p thứ 2";
// tagP2.style.background = "yellow";

// let tagP3 = document.querySelector(".txt3");
// tagP3.innerHTML = "Thẻ p thứ 3";
// tagP3.style.background = "green";

// input: selector, content, bgColorl
/* 
    default parameter value: cho phép đặt giá trị mặc định cho tham số nếu không có giá trị nào được truyền vào
    + giảm bớt lỗi khi đầu vào không đủ
    + tăng tính linh hoạt của hàm
    + làm cho hàm rõ ràng hơn
 */
function printText(selector, content, bgColor, fSize = "20px") {
  let element = document.querySelector(selector);

  element.innerHTML = content;
  element.style.background = bgColor;
  element.style.fontSize = fSize;
}

// khi gọi hàm, tham số truyền vào phải đúng thứ tự với tham số khi định nghĩa hàm
let selector1 = ".txt1";
printText(".txt1", "hello", "red", "30px");
printText(".txt2", "hello lần 2", "yellow", "40px");
printText("#txt3", "hello lần 3", "green", "50px");

/*
    FUNCTION CÓ GIÁ TRỊ TRẢ VỀ 

    return: sử dụng để kết thúc hàm và trả về 1 giá trị tới nơi gọi hàm

    * code sau lệnh return sẽ không được thực thi tiếp mà dừng luôn khi gặp return

    + truyền dữ liệu giữa các hàm 
    + kiểm soát luồng chương trình
    + tái sử dụng mã
*/

function tinhTienGiamGia(giaTien, giamGia) {
  let total = giaTien - giaTien * (giamGia / 100);

  return total;
}

// core
document.querySelector("#handlePrice").onclick = function () {
  let price = getElement("#price").value * 1;
  console.log("price: ", price);
  let percent = getElement("#percent").value * 1;
  console.log("percent: ", percent);

  //   let total = price - price * (percent / 100);
  let total = tinhTienGiamGia(price, percent);

  getElement("#total span").innerHTML = total;
};

// FUNCTION EXPRESSIONS
/*
    let nameVariable = function() {
        code xử lý trong này 
    }
*/

let handleTotalPriceFood = function (giaTien, soLuong) {
  let total = giaTien * soLuong;

  return total;
};

getElement("#handlePriceFood").onclick = function () {
  let price = getElement("#priceFood").value * 1;
  let quality = getElement("#quality").value * 1;

  let total = handleTotalPriceFood(price, quality);

  getElement("#totalFood span").innerHTML = total;
};

/*
    sự khác biệt giữa function declaration & expression:   
    + cú pháp
    + hoisting:
        - declaration: được hoisting(kéo lên trên đầu) toàn bộ block chứa nó, có thể gọi hàm trước khi khai báo hàm
        - expression: không được hoisting, không thể gọi hàm trước khi khởi tạo hàm
*/
// let tenBien ;

// let tenBien;

var tenBien;
var tenBien;

sayHi();
function sayHi() {
  console.log("hi");
}

// sayHello(); // bị lỗi : không được truy cập vào hàm trước khi khởi tạo hàm
const sayHello = function () {
  console.log("hello");
};

// ARROW FUNCTION
/*

*/
// declaration
function myFunction(number1, number2) {
  return number1 + number2;
}

// expression
// const myNewFunction = function() {

// }

// expression + arrow function
const myNewFunction = (number1, number2) => {
  return number1 + number2;
};

// function add(number1, number2) {
//   return number1 + number2;
// }

// expression + arrow function
const add = (number1, number2) => {
  return number1 + number2;
};

const addNumber = (number1, number2) => number1 + number2;

const testArrowFunction = addNumber(4, 5);
console.log("testArrowFunction: ", testArrowFunction);
