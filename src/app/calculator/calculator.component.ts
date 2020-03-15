import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MockServiceService } from "../mock-service.service";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  installmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mockService: MockServiceService
  ) {
    this.installmentForm = this.fb.group({
      amount: [
        "",
        [Validators.required, Validators.min(10000), Validators.max(100000)]
      ],
      duration: [
        "",
        [Validators.required, Validators.min(1), Validators.max(5)]
      ]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue = this.installmentForm.value;
    const amountValue = formValue.amount;
    const durationValue = formValue.duration;
    this.mockService
      .getMockData({ amount: amountValue, duration: durationValue })
      .subscribe(val => {
        this.mockService.postData(val.monthlyInstallment);
      });
  }
}
