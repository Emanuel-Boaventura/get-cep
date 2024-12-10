import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({ providedIn: 'root' })
export class AxiosService {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://viacep.com.br/ws/',
    });
  }
}
