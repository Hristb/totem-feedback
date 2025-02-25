import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tab } from "./totem.model";

@Injectable({
    providedIn: 'root'
  })
  export class TotemService {
    private dataUrl = 'assets/data/tabs-data.json'; // Ruta del JSON
  
    constructor(private http: HttpClient) {}
  
    getTabsData(): Observable<Tab[]> {
      return this.http.get<Tab[]>(this.dataUrl);
    }
  }