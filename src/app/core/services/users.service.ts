import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UserRegister } from '../models/user-register';
import { UserLogin } from '../models/user-login';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private currentUserSubject = new BehaviorSubject({});

  constructor(private api: ApiService) {}

  public dangKy(values: UserRegister): Observable<any> {
    return this.api.post('QuanLyNguoiDung/DangKy', values);
  }

  public dangNhap(values: UserLogin): Observable<any> {
    return this.api.post('QuanLyNguoiDung/DangNhap', values).pipe(
      tap((res) => {
        localStorage.setItem('userLogin', JSON.stringify(res));
        // Update value cho currentUserSubject
        this.currentUserSubject.next(res);
      })
    );
  }

  public getUserFormLocalStorage(): void {
    const user = JSON.parse(localStorage.getItem('userLogin'));
    if (user) {
      // TODO: Lấy accesstoken gọi lại api layThongTinNguoiDung
      // Kết quả trả về từ api sau đó dùng currentUserSubject.next
      // Để truyền vào
      this.currentUserSubject.next(user);
    }
  }

  // TODO: thay thế any thành User class
  public getCurrentUser(): any {
    // Get value
    return this.currentUserSubject.value;
  }
}
