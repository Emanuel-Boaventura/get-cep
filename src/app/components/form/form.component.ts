import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CepService } from '../../services/cep/cep.service';
import { getErrors } from '../../utils/form-utils';
import { cepMask } from '../../utils/masks';
import { ButtonComponent } from '../button/button.component';

export type AddressData = {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  constructor(private cepService: CepService) {}

  @Input() toggleLoading!: (isLoading: boolean) => void;
  @Output() getFormEvent = new EventEmitter<AddressData>();

  cep = new FormControl('', [Validators.required, Validators.minLength(9)]);

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async handleSubmit() {
    try {
      this.cep.markAsTouched();
      this.toggleLoading(true);

      if (this.cep.invalid) {
        return;
      }

      await this.delay(500);

      const data = await this.cepService.getCep(this.cep.value!);
      console.log('data:', data);
      this.getFormEvent.emit(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.toggleLoading(false);
    }
  }

  onCepChange() {
    const cepControl = this.cep;
    if (cepControl) {
      const maskedValue = cepMask(cepControl.value);
      cepControl.setValue(maskedValue, { emitEvent: false });
    }
  }

  getFormControlErrors() {
    return getErrors(this.cep);
  }
}
