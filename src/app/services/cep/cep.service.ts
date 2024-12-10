import { Injectable } from '@angular/core';
import { AxiosService } from '../axios.service';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private axios: AxiosService) {}

  async getCep(cep: string) {
    const { data } = await this.axios.api.get(`${cep}/json`);
    return data;
  }
}
