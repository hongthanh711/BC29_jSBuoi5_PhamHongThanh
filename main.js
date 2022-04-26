function getEle(id) {
  return document.getElementById(id);
}

// Bài 1
/**
 * Input:
 *  Điểm: toán, lý, hóa
 *  Điểm chuẩn
 *  KV, Đối tượng
 * Process:
 * +Tính điểm ưu tiên
 * +Tính điểm 3 môn
 * +Tổng điểm
 * +So sánh với điểm chuẩn
 * Output:
 * +Đậu hay rớt
 * +Tổng điểm đạt được
 */

getEle("btn-XetTuyen").onclick = function () {
  var khuVuc = getEle("khuVuc").value;
  var doiTuong = getEle("doiTuong").value;

  console.log(khuVuc, doiTuong);
};

getEle("btn-XetTuyen").onclick = function () {
  var khuVuc = getEle("khuVuc").value;
  var doiTuong = getEle("doiTuong").value;

  var diemKhuVuc = 0;
  var diemDoiTuong = 0;
  var diemUuTien = 0;

  var diemChuan = getEle("diemChuan").value * 1;
  var diemMon1 = getEle("diemMon1").value * 1;
  var diemMon2 = getEle("diemMon2").value * 1;
  var diemMon3 = getEle("diemMon3").value * 1;

  var diem3Mon = 0;
  var tongDiem = 0;
  var result = "";

  if (khuVuc === "A") {
    diemKhuVuc = 2;
  } else if (khuVuc === "B") {
    diemKhuVuc = 1;
  } else if (khuVuc === "C") {
    diemKhuVuc = 0.5;
  } else {
    diemKhuVuc = 0;
  }

  if (doiTuong === "1") {
    diemDoiTuong = 2.5;
  } else if (doiTuong === "2") {
    diemDoiTuong = 1.5;
  } else if (doiTuong === "3") {
    diemDoiTuong = 1;
  } else {
    diemDoiTuong = 0;
  }

  // Tính điểm ưu tiên
  diemUuTien = diemKhuVuc + diemDoiTuong;

  // Điểm 3 môn
  diem3Mon = diemMon1 + diemMon2 + diemMon3;

  // Tổng điểm
  tongDiem = diem3Mon + diemUuTien;
  console.log(tongDiem);

  // So sánh
  if (
    tongDiem >= diemChuan &&
    diemMon1 != 0 &&
    diemMon2 != 0 &&
    diemMon3 != 0
  ) {
    result = "Kết quả: Đậu <br>Tổng điểm: " + tongDiem;
  } else {
    result = "Kết quả: Rớt <br>Tổng điểm: " + tongDiem;
  }

  // Show kq
  getEle("ketqua-xetTuyen").innerHTML = result;
};

// function layDiemUuTien(loaiUuTien, a, x, b, y, c, z) {
//   var giaTri = getEle(loaiUuTien).value;
//   var quyDoi = "";
//   if (giaTri === a) {
//     quyDoi = x;
//   } else if (giaTri === b) {
//     quyDoi = y;
//   } else if (giaTri === c) {
//     quyDoi = z;
//   } else {
//     quyDoi = 0;
//   }
//   return quyDoi;
//   console.log(quyDoi);
// }

// function layDiemUuTien ("loaiUuTien")

// Bài 2
/**
 * Input:
 *  + Tên
 *  + Số Kw
 * Process:
 *  Tính tiền theo lũy tiến
 * Ouput:
 *  +Tên
 *  +Tiền
 */

getEle("btn-tinhTien").onclick = function () {
  var ten = getEle("hoTen").value;
  var soKw = getEle("soKw").value * 1;
  var tongTien = 0;

  if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  result = "Tên: " + ten + " ; Tiền điện: " + tongTien;

  // Show kq
  getEle("ketqua-tinhTien").innerHTML = result;
};
