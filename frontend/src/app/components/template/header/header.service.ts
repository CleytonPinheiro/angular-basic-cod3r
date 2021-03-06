import { HeaderData } from "./header-data-model";
import { HeaderComponent } from "./header.component";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: " Inicio",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  get HeaderData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(HeaderData: HeaderData) {
    this._headerData.next(this.headerData);
  }
}
