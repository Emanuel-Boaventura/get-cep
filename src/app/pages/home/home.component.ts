import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AddressData,
  FormComponent,
} from '../../components/form/form.component';

interface AddressDataArray {
  label: string;
  value: string;
}

@Component({
  selector: 'app-home',
  imports: [CardComponent, FormComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  addressData: AddressDataArray[] | null = null;
  isLoading = false;

  toggleLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  handleFormEvent(form: AddressData) {
    this.addressData = Object.entries(form).map(([key, value]) => ({
      label: key,
      value: value || '...',
    }));
  }
}