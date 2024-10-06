// COMMON
const getElement = (selector) => document.querySelector(selector);

/*
    Xác định input: 
    1. loại xe 
    2. số KM 
    3. thời gian chờ

    Xử lý:



    Output: tổng tiền
*/
const GRAB_CAR = "grabCar";
const GRAB_SUV = "grabSUV";
const GRAB_BLACK = "grabBlack";

/* 
    1 function trả về giá tiền của km đầu tiên theo từng loại xe 
    input: loại xe 
    xử lý: kiểm tra theo loại xe 
    output: giá tiền km đầu tiên của từng loại xe 
*/
const tinhGiaTienKmDauTien = (loaiXe) => {
  if (loaiXe === GRAB_CAR) {
    return 8000;
  } else if (loaiXe === GRAB_SUV) {
    return 9000;
  } else {
    return 10000;
  }
};

const tinhGiaTienKm2Den19 = (loaiXe) => {
  if (loaiXe === GRAB_CAR) {
    return 7500;
  } else if (loaiXe === GRAB_SUV) {
    return 8500;
  } else {
    return 9500;
  }
};

const tinhSoTienCho = (loaiXe) => {
  if (loaiXe === GRAB_CAR) {
    return 2000;
  } else if (loaiXe === GRAB_SUV) {
    return 3000;
  } else {
    return 3500;
  }
};

const tinhGiaTienKm20TroDi = (loaiXe) => {
  if (loaiXe === GRAB_CAR) {
    return 7000;
  } else if (loaiXe === GRAB_SUV) {
    return 8000;
  } else {
    return 9000;
  }
};

const tinhTienGrab = () => {
  console.log("Tính Tiền ");
  // input
  let loaiXe = getElement("input[name='selector']:checked").value;
  let soKm = +getElement("#txt-km").value;
  let thoiGianCho = +getElement("#txt-thoiGianCho").value;
  console.log("loaiXe-soKM-thoiGianCho ", loaiXe, soKm, thoiGianCho);
  let tongTien = 0;
  let tienCho = 0;

  // tính giá tiền theo km của từng loại xe
  let giaTienKmDauTien = tinhGiaTienKmDauTien(loaiXe);
  let giaTienKm2DenKm19 = tinhGiaTienKm2Den19(loaiXe);
  let giaTienKm20TroDi = tinhGiaTienKm20TroDi(loaiXe);

  if (soKm <= 1) {
    tongTien = giaTienKmDauTien * soKm;
  } else if (soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKm2DenKm19;
    // tongTien = 8000 + (soKm - 1) * 7500
  } else {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKm2DenKm19 +
      (soKm - 19) * giaTienKm20TroDi;
  }

  console.log("Tổng Tiền:", tongTien);

  //   chờ 5 phút:
  //   thoiGianCho > 3 => (thoiGianCho - 3) /3  => số phút còn lại mới * số tiền chờ

  // thời gian chờ: 4.5p
  // 3 phút đầu không tính tiền : 4.5 - 3 = 1.5
  //   1.5 / 3 = 0.5 => 0.5 * 2000 = 1000
  //   if (thoiGianCho > 3) {
  //     tienCho = ((thoiGianCho - 3) / 3) * tinhSoTienCho(loaiXe);
  //   } else {
  //     tienCho = 0;
  //   }

  tienCho =
    thoiGianCho > 3 ? ((thoiGianCho - 3) / 3) * tinhSoTienCho(loaiXe) : 0;

  // tổng giá tiền cuối cùng: tổng tiền = tổng tiền + tiền chờ
  //   tongTien = tongTien + tienCho;
  tongTien += tienCho;

  //   in giá tiền lên giao diện
  getElement("#divThanhTien").style.display = "block";
  getElement("#xuatTien").innerHTML = tongTien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

// in hóa đơn
getElement("#inHoaDon").onclick = () => {
  tinhTienGrab();
  window.print();
};
