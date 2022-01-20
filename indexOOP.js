var arrSV = [];

document.getElementById("btnXacNhan").onclick = function () {
  var sv = new SinhVien();
  sv.maSinhVien = document.getElementById("maSinhVien").value;
  sv.tenSinhVien = document.getElementById("tenSinhVien").value;
  sv.loaiSinhVien = document.getElementById("loaiSinhVien").value;
  sv.diemToan = document.getElementById("diemToan").value;
  sv.diemLy = document.getElementById("diemLy").value;
  sv.diemHoa = document.getElementById("diemHoa").value;
  sv.diemRenLuyen = document.getElementById("diemRenLuyen").value;
  sv.email = document.getElementById("email").value;
  sv.soDienThoai = document.getElementById("soDienThoai").value;

  arrSV.push(sv);

  console.log("arrsv", arrSV);

  // //  Tao ra cac the tren giao dien
  // var trSV = document.createElement("tr");

  // //  Tao the chua noi dung
  // var tdmaSinhVien = document.createElement("td");
  // tdmaSinhVien.innerHTML = sv.maSinhVien;

  // var tdTenSinhVien = document.createElement("td");
  // tdTenSinhVien.innerHTML = sv.tenSinhVien;

  // var tdLoaiSinhVien = document.createElement("td");
  // tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;

  // var tdDiemTrungBinh = document.createElement("td");
  // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();

  // var tdDiemRenLuyen = document.createElement("td");
  // tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;

  // // Tao  nut xoa button
  // var btnXoa = document.createElement("button");
  // btnXoa.className = "btn btn-danger";
  // btnXoa.innerHTML = "Xoá";
  // btnXoa.onclick = function () {
  //   var tdChuaButton = btnXoa.parentElement;
  //   var trSV = tdChuaButton.parentElement;
  //   trSV.remove();
  //   // Dom den the gan nhat chua selector do
  //   var tr = btnXoa.closest("tr");
  //   tr.remove();
  // };

  // // Tao td cho nut xoa
  // var tdChucNang = document.createElement("td");
  // tdChucNang.appendChild(btnXoa);
  // // Dua ra cac the td vao trong the tr
  // trSV.appendChild(tdmaSinhVien);
  // trSV.appendChild(tdTenSinhVien);
  // trSV.appendChild(tdLoaiSinhVien);
  // trSV.appendChild(tdDiemTrungBinh);
  // trSV.appendChild(tdDiemRenLuyen);
  // trSV.appendChild(tdChucNang);
  // // Dua the tr vao tbody tren giao dien

  // document.getElementById("tblSinhvien").appendChild(trSV);

  // CRUD : Create, Read, Update, Delete.

  // var p = document.createElement("p");
  // p.innerHTML = "abc";

  // document.querySelector("body").appendChild(p);

  // // Cach 2
  // document.querySelector("body").innerHTML = "<p>Hello</p>";
  renderTableSinhVien(arrSV);
};

function renderTableSinhVien(arrSV) {
  var noidung = "";
  for (var i = 0; i < arrSV.length; i++) {
    // Duyet qua mang moi lan lay
    var sv = arrSV[i];
    noidung += `
              <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.diemRenLuyen}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${
                  sv.maSinhVien
                }')" >Xoá</button>
                <button class="btn btn-danger" onclick="xoaSinhVienIndex('${i}')">Xoá Index</button>
                <button class="btn btn-primary" onclick="suaSinhVien('${
                  sv.maSinhVien
                }')">Sửa</button>
                </td>
              </tr>
              `;
  }
  document.getElementById("tblSinhvien").innerHTML = noidung;
}

function suaSinhVien(maSinhVienClick) {
  for (let i = 0; i < arrSV.length; i++) {
    var sv = arrSV[i];

    if (sv.maSinhVien === maSinhVienClick) {
      // Lay ra sinh vien tai vi tri do tren giao dien
      document.getElementById("maSinhVien").value = sv.maSinhVien;
      document.getElementById("tenSinhVien").value = sv.tenSinhVien;
      document.getElementById("loaiSinhVien").value = sv.loaiSinhVien;
      document.getElementById("diemToan").value = sv.diemToan;
      document.getElementById("diemLy").value = sv.diemLy;
      document.getElementById("diemHoa").value = sv.diemHoa;
      document.getElementById("diemRenLuyen").value = sv.diemRenLuyen;
      document.getElementById("maSinhVien").disabled = true;
    }
  }
}

document.getElementById("btnCapNhat").onclick = function () {
  var svUpdate = new SinhVien();
  svUpdate.maSinhVien = document.getElementById("maSinhVien").value;
  svUpdate.tenSinhVien = document.getElementById("tenSinhVien").value;
  svUpdate.loaiSinhVien = document.getElementById("loaiSinhVien").value;
  svUpdate.diemToan = document.getElementById("diemToan").value;
  svUpdate.diemLy = document.getElementById("diemLy").value;
  svUpdate.diemHoa = document.getElementById("diemHoa").value;
  svUpdate.diemRenLuyen = document.getElementById("diemRenLuyen").value;
  console.log("svUpdate", svUpdate);
  //   tim ra sv trong array [{}, {maSinhVien: 2}. {}]
  for (let i = 0; i < arrSV.length; i++) {
    // capNhatSinhVien = svUpdate;
    // Tìm thấy sinh viên trong mảng có cũng mã với sinh viên trên giao diện
    //  thay đổi dữ liệu trong mảng thành dữ liệu giao diện
    var capNhatSinhVien = arrSV[i];
    if (capNhatSinhVien.maSinhVien === svUpdate.maSinhVien) {
      capNhatSinhVien.tenSinhVien = svUpdate.tenSinhVien;
      capNhatSinhVien.loaiSinhVien = svUpdate.loaiSinhVien;
      capNhatSinhVien.diemToan = svUpdate.diemToan;
      capNhatSinhVien.diemLy = svUpdate.diemLy;
      capNhatSinhVien.diemHoa = svUpdate.diemHoa;
      capNhatSinhVien.diemRenLuyen = svUpdate.diemRenLuyen;
    }
  }
  document.getElementById("maSinhVien").disabled = false;
  renderTableSinhVien(arrSV);
};

// Doi voi du lieu khong phan trang
function xoaSinhVienIndex(indexClick) {
  arrSV.splice(indexClick, 1);
  renderTableSinhVien(arrSV);
}

function xoaSinhVien(maSinhVienClick) {
  console.log("maSinhVien", maSinhVienClick);

  // TIm sinh vien co ma click trong mang
  for (var i = arrSV.length - 1; i >= 0; i--) {
    // Moi lan duyet lay ra 1 sv
    var sv = arrSV[i];
    if (sv.maSinhVien === maSinhVienClick) {
      // Tai vi tri index nay => thuc hien xoa
      arrSV.splice(i, 1);
    }
  }

  // Goi lai ham tao bang sau khi xoa du lieu
  renderTableSinhVien(arrSV);
}
