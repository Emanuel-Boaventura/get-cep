import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-cep',
  imports: [CardComponent],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.scss',
})
export class CepComponent implements OnInit {
  cep: string | null = null; // Para armazenar o ID da rota

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cep = this.route.snapshot.paramMap.get('cep');
    console.log('CEP:', this.cep);
  }
}
