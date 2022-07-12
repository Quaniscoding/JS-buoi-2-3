document.getElementById('btnSubmit').onclick=function(){
    // đầu vào
    var tenPhim=document.getElementById('tenPhim').value;
    var giaVeNL=document.getElementById('giaVeNl').value*1;
    var slVeNl=document.getElementById('slVeNl').value*1;
    var giaVeTe=document.getElementById('giaVeTe').value*1;
    var slVeTe=document.getElementById('slVeTe').value*1;
    var phanTramtuthien=document.getElementById('phanTramTunhien').value*1;
    
    // xử lý
    var soVeDaBan = slVeNl +slVeTe;
    var doanhThu = (giaVeNL*slVeNl)+(giaVeTe*slVeTe);
    phanTramtuthien =phanTramtuthien;
    var tongTienTrichTuThien =(doanhThu*phanTramtuthien)/100;
    var loiNhuan= doanhThu-tongTienTrichTuThien;
    
    // format
    var format= new Intl.NumberFormat('vn-VN');
    // đầu ra
    var showAll="";
    showAll+="<p>Tên phim: .............."+tenPhim+"</p>"
    showAll+="<p>Số vé đã bán: .............."+soVeDaBan+"</p>"
    showAll+="<p>Doanh thu: ..............."+format.format(doanhThu)+" vnd</p>"
    showAll+="<p>Phần trăm trích từ thiện: ................"+phanTramtuthien+" %</p>"
    showAll+="<p>Tổng tiền trích từ thiện: ................"+tongTienTrichTuThien+" vnd</p>"
    showAll+="<p>Lợi nhuận:.................."+format.format(loiNhuan)+" vnd</p>"
    document.getElementById('thongBaoMovie').innerHTML=showAll;
    
    }
document.getElementById('tinhTienLuong').onclick=function(){
    var soNgayLam=document.getElementById('soNgayLam').value;
    const luongNgay=100000;
    var total= luongNgay*soNgayLam;
    var format =new Intl.NumberFormat('vn-VN');
    var total =format.format(total) + "vnd";
    document.getElementById('thongBaoTienLuong').innerHTML=total;
}
document.getElementById('tinhGiaTriTrungBinh').onclick=function(){
    var soThuNhat=document.getElementById('num1').value*1;
    var soThuHai=document.getElementById('num2').value*1;
    var soThuBa=document.getElementById('num3').value*1;
    var soThuTu=document.getElementById('num4').value*1;
    var soThuNam=document.getElementById('num5').value*1;

    var avg=(soThuNhat+soThuHai+soThuBa+soThuTu+soThuNam)/5;
    document.getElementById('thongBaoSoTrungBinh').innerHTML=avg;
}
document.getElementById('soTien').onclick=function(){
    var tienQuydoi =document.getElementById('num').value;
    const motUsd= 23500;
    var quyDoiTien = motUsd *tienQuydoi;
    var format = new Intl.NumberFormat('vn-VN');
    var quyDoiTien = format.format(quyDoiTien)+"vnd";
    document.getElementById('thongBaoSoTien').innerHTML=quyDoiTien;
}
document.getElementById('tinhCvDt').onclick=function(){
    var tagChieuDai=document.getElementById('chieuDai').value*1;
    var tagChieuRong=document.getElementById('chieuRong').value*1;
    var chuVi=(tagChieuDai+tagChieuRong)*2;
    var dienTich=tagChieuDai*tagChieuRong;
    var showKetQua="";
    showKetQua+="<p>Diện tích :"+dienTich+"</p>"
    showKetQua+="<p>Chu vi :"+chuVi+"</p>"
    document.getElementById('thongBaoCvDt').innerHTML=showKetQua;
}
document.getElementById('tinhTong').onclick=function(){
    var tongHaiSo=document.getElementById('haiSo').value;
    var soThuNhat=tongHaiSo%10;
    var soThuHai=Math.floor(tongHaiSo/10);
    var sum=soThuNhat+soThuHai;
    sum="<p>Tống 2 ký số là :"+sum +"</p>"
    document.getElementById('thongBaoTong').innerHTML=sum;
}

