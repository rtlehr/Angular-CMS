import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get('/assets/config.json'))
      .then((data) => {
        this.config = data;
      })
      .catch((error) => {
        console.error('Failed to load config.json', error);
        return Promise.reject(error);
      });
  }

  getConfig(): any {
    return this.config;
  }
}
