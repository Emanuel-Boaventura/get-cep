import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { CepService } from '../../services/cep/cep.service';

@Component({
  selector: 'app-cep',
  imports: [CardComponent, CommonModule, ButtonComponent],
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss'],
})
export class CepComponent implements OnInit {
  cep: string | null = null;
  cepData: any = null;

  constructor(
    private route: ActivatedRoute, // For accessing route parameters
    private cepService: CepService // For fetching CEP data
  ) {}

  async ngOnInit() {
    this.cep = this.route.snapshot.paramMap.get('cep');
    if (this.cep) {
      try {
        const data = await this.cepService.getCep(this.cep);
        this.cepData = Object.entries(data)
          .map(
            ([key, value]) =>
              key !== 'cep' && {
                label: key,
                value: value || '...',
              }
          )
          .filter((item) => item);
      } catch (error) {
        console.error('Error fetching CEP:', error);
      }
    }
  }
}
