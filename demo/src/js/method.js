/* 
    export - export default: xuất hàm, biến, object, class để file khác có thể sử dụng bằng cách import

    export: có thể xuất nhiều hàm, biến trong 1 file(module), khi import phải sử dụng đúng tên được export. muốn đổi tên thành phần khi import thì dùng as tenMoi

    export default: chỉ cho phép xuất 1 thành phần từ file(module), thành phần này có thể được import với bất kì tên gì
*/

/**
 * Hàm này để dom tới bất kì thẻ nào trên giao diện
 * @param {*} selector: tên class, id, thẻ
 * @returns thẻ vừa được dom tới
 */
export function getElement(selector) {
  console.log("trước return");

  return document.querySelector(selector);
  console.log("sau return");
}

// export { getElement, getElement2, getElement3 };
