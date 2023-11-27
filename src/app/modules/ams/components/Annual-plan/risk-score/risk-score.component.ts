import { Component, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { RistScoreDTO } from 'src/app/modules/ams/models/RiskScoreDTO';

@Component({
  selector: 'new-audit-universe',
  templateUrl: './risk-score.component.html',
  styleUrls: ['./risk-score.component.scss'],
})
export class RiskScoreComponent {
  riskScores: RistScoreDTO[];
  savedRiskScores: RistScoreDTO[] = [];
  annualPlanInfo: any;

  newDiv: boolean = true;

  @Output() onSave = new EventEmitter<RistScoreDTO[]>();

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.annualPlanInfo = this.config.data?.annualPlanInfo;
    this.riskScores = this.annualPlanInfo?.riskScores || [];    
  }
  
  options: SelectItem[] = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
  ];
  
  saveRiskScores() {
    this.savedRiskScores = this.riskScores.map((riskScore) => ({
      ...riskScore,
      id: riskScore.id,
      riskItem : riskScore.riskItem,
      likelihood: riskScore.likelihood || 1,
      impact: riskScore.impact || 1,
    }));
    this.ref.close(this.savedRiskScores);
  }
  
}
