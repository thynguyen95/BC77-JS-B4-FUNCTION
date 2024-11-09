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

const sayHelloPerson = function () {
    console.log("hello");
};

// sayHelloPerson = "abcd";

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

const addOneNumber = (number) => number;

const addNumber = (number1, number2) => number1 + number2;

const testArrowFunction = addNumber(4, 5);
console.log("testArrowFunction: ", testArrowFunction);

// BLOCK SCOPE
// global scope: biến toàn cục
// những biến khai báo bên ngoài, không nằm trong hàm thì là biến toàn cục
let name1 = "Nguyễn Văn A";
var name = "ABC";
console.log("name khai báo bằng var bên ngoài function: ", name);

// local scope: biến cục bộ
// biến cục bộ được khai báo bên trong hàm, sử dụng bên ngoài hàm thì sẽ bị lỗi is not defined
const demoScope = () => {
    let name2 = "Nguyễn Văn B";
    var name = "XYZ;";
    console.log("name khai báo bằng var bên trong function: ", name);
    console.log("name trong function: ", name2);

    console.log("name được khai báo bên ngoài scope", name1);
};

console.log("name ngoài function", name1);
// console.log("name trong function", name2); // is not definde

demoScope();

let score = 8;
if (score > 8) {
    let loai = "giỏi";
    console.log("loại bên trong if: ", loai);
}
// console.log("loại bên ngoài if: ", loai);

/*
  CALLBACK FUNCTION
  Là một hàm được truyền vào hàm khác như 1 đối số
*/
function xepLoaiSinhVien(diem, callback) {
    let xepLoai;
    // let xepLoai: string;

    if (diem >= 8) {
        xepLoai = "Giỏi";
    } else if (diem >= 5) {
        xepLoai = "Khá";
    } else {
        xepLoai = "Trung Bình";
    }

    callback(xepLoai);
    // inXepLoai(xepLoai);
}

function inXepLoai(xepLoai) {
    console.log(`Sinh viên được xếp loại: ${xepLoai}`);
}

xepLoaiSinhVien(8.5, inXepLoai);

function demoClick(name) {
    console.log("clicked", name);
}

// document.querySelector("id").onclick = demoClick;

// Rest parameter
const number1 = [1, 2, 3, 4];
console.log("number1: ", ...number1); // 1 2 3 4

const tinhTong = (a, b, c, d) => {
    return a + b + c + d;
};

console.log(tinhTong(...number1));

const sum = (...number) => {
    console.log("...number: ", ...number);
    // lần chạy 1: total = 10 => 10 + 1 = 11
    // lần chạy 2: total = 11 => 11 + 2 = 13
    // lần chạy 3: total = 13 => 13 + 3 = 16
    return number.reduce((total, num) => {
        console.log("total: ", total, num);
        return total + num;
    }, 10);
};
console.log(sum(1, 2, 3));
// console.log(sum([4, 5, 6, 7, 8, 9]));

// Spread operator
// 1. tạo 1 mảng mới hoặc sao chép mà không bị trùng địa chỉ ô nhớ
const number2 = [...number1];

// react => nextjs
// vuejs => nuxtjs
// angular(angularjs, angular3-4-5)
// <div></div>
// angular: ['html']
// react: {'html'}
// vue: [{'html'}]
