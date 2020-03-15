import { Component, OnInit } from "@angular/core";
import { MockServiceService } from "../mock-service.service";
@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  constructor(private mockService: MockServiceService) {}

  installment = "";

  ngOnInit(): void {
    this.mockService.getData().subscribe(response => {
      this.installment = response;
    });
  }
}
