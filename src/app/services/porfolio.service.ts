import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Portfolio } from '../../../interfaces/portfolio.interface'; 
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
 private apiUrl = environment.apiUrl; 
  private httpClient = inject(HttpClient);

 getLastPortfolio(): Promise<Portfolio> {
    return lastValueFrom(this.httpClient.get<Portfolio>(`${this.apiUrl}/last`));
  }
}
