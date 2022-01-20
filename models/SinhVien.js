function SinhVien() {
  this.maSinhVien = "";
  this.tenSinhVien = "";
  this.loaiSinhVien = "";
  this.diemToan = "";
  this.diemLy = "";
  this.diemHoa = "";
  this.diemRenLuyen = "";
  this.email = "";
  this.soDienThoai = "";
  this.tinhDiemTrungBinh = function () {
    var diemTrungBinh =
      Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) / 3;
    return diemTrungBinh;
  };
  this.xepLoai = function () {
    //Input
    var diemRenLuyen = this.diemRenLuyen;
    var diemTrungBinh = this.tinhDiemTrungBinh();
    var loaiHocLuc = "";
    if (diemRenLuyen < 5) {
      loaiHocLuc = "Yếu";
      return loaiHocLuc;
    }
    if (diemTrungBinh < 5) {
      loaiHocLuc = "Yếu";
    } else if (diemTrungBinh >= 5 && diemTrungBinh <= 6.5) {
      loaiHocLuc = "Trung bình";
    } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
      loaiHocLuc = "Khá";
    } else if (diemTrungBinh >= 8 && diemTrungBinh <= 10) {
      loaiHocLuc = "Giỏi";
    } else {
      loaiHocLuc = "Không hợp lệ!";
    }
    return loaiHocLuc;
  };
}
