import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Portfolio } from '../../../interfaces/portfolio.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000/api/portfolio'; 
  private httpClient = inject(HttpClient);

  constructor(private http: HttpClient) {}

 getLastPortfolio(): Promise<Portfolio> {
    return lastValueFrom(this.httpClient.get<Portfolio>(`${this.apiUrl}/last`));
  }
}
