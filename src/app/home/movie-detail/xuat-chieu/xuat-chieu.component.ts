import { Component, OnInit, Input } from '@angular/core';
import { CinemasService } from 'src/app/core/services/cinemas.service';

@Component({
  selector: 'app-xuat-chieu',
  templateUrl: './xuat-chieu.component.html',
  styleUrls: ['./xuat-chieu.component.scss'],
})
export class XuatChieuComponent implements OnInit {
  @Input() lichChieu: any[];
  lichChieuTheoNgay: any[];
  constructor(public cinemasService: CinemasService) {}

  ngOnInit(): void {
    // Kiểm tra xem heThongRap đã có data hay chưa
    // Nếu có thì k cần gọi lại API ngược lại thì gọi API
    // Object.keys(heThongRap).length === 0 Cách kiểm tra obj rỗng
    const heThongRap = this.cinemasService.heThongRap();
    if (heThongRap.length === 0) {
      this.cinemasService.layThongTinHeThongRap().subscribe((res) => {
        console.log(res[0].maHeThongRap);
        this.cinemasService
          .layCumRapTheoHeThong(res[0].maHeThongRap)
          .subscribe();
      });
    }
  }

  chonHeThongRap(maHeThongRap: string) {
    this.cinemasService.layCumRapTheoHeThong(maHeThongRap).subscribe();
  }

  chonNgayChieu(date) {
    if (!this.lichChieu) return [];
    this.lichChieuTheoNgay = this.lichChieu.filter((item) => {
      const ngayChieu = item.ngayChieuGioChieu.split('T')[0];
      console.log(ngayChieu, date);
      return ngayChieu === date;
    });
    console.log(this.lichChieuTheoNgay);
  }

  filterLichChieuTheoCumRap(maCumRap: string) {
    if (!this.lichChieuTheoNgay) return [];
    return this.lichChieuTheoNgay.filter(
      (item) => item.thongTinRap.maCumRap === maCumRap
    );
  }

  // func compare sử dụng pipe filter
  filterLichChieu(value, cumRap) {
    return value.thongTinPhim.maCumRap === cumRap.maCumRap;
  }
}
