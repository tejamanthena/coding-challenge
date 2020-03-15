import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

interface MockData {
  amount: string;
  duration: string;
  monthlyInstallment: string;
}

@Injectable({
  providedIn: "root"
})
export class MockServiceService {
  constructor() {}

  public sendData = new Subject<string>();

  getMockData(formData): Observable<MockData> {
    return new Observable(observer => {
      const monthlyInstallmentval = (
        formData.amount / formData.duration
      ).toString();
      observer.next({
        amount: formData.amount,
        duration: formData.duration,
        monthlyInstallment: monthlyInstallmentval
      });
    });
  }

  postData(installment): void {
    console.log(installment);
    this.sendData.next(installment);
  }

  getData(): Observable<any> {
    return this.sendData.asObservable();
  }
}
