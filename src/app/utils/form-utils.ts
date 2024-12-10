import { AbstractControl } from '@angular/forms';

export function getErrors(control: AbstractControl) {
  if (control.errors) {
    return Object.keys(control.errors).map((errorKey) => {
      switch (errorKey) {
        case 'required':
          return 'O campo é obrigatório.';
        case 'minlength':
          return `O campo deve ter pelo menos ${control.errors?.['minlength'].requiredLength} caracteres.`;
        case 'maxlength':
          return `O campo deve ter no máximo ${control.errors?.['maxlength'].requiredLength} caracteres.`;
        default:
          return `Erro desconhecido: ${errorKey}`;
      }
    });
  }
  return [];
}
