// Sử dụng hàm

function tinhSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc) {
    var soNam = namKetThuc - namBatDau;
    var soThang = thangKetThuc - thangBatDau;

    if (soThang < 0) {
        soNam--;
        soThang += 12;
    }

    return { soNam: soNam, soThang: soThang };
}
function xuLySuKienClick() {
    var thangBatDau = parseInt(document.getElementById("thangBatDau").value);
    var namBatDau = parseInt(document.getElementById("namBatDau").value);
    var thangKetThuc = parseInt(document.getElementById("thangKetThuc").value);
    var namKetThuc = parseInt(document.getElementById("namKetThuc").value);

    var ketQua = tinhSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc);

    document.getElementById("ketQua").innerText = "Số năm: " + ketQua.soNam + ", Số tháng: " + ketQua.soThang;



}


// Hàm tính khoảng cách giữa hai thời điểm

