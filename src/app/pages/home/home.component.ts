import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import {
  AddressData,
  FormComponent,
} from '../../components/form/form.component';
import { LoaderComponent } from '../../components/loader/loader.component';

interface AddressDataArray {
  label: string;
  value: string;
}

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    FormComponent,
    CommonModule,
    LoaderComponent,
    RouterLink,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  addressData: AddressData | null = null;
  isLoading = false;

  toggleLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  handleFormEvent(form: AddressData) {
    this.addressData = form;
  }
}
