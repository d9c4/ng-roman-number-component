import {Component, Input, OnInit} from '@angular/core';
import {RomanNumber, toRoman, toRomanLarge} from "./ng-roman-number-component.model";


@Component({
  selector: 'roman-number-component',
  template: `
    <div [ngClass]="romanFont ? 'serif' : ''">
      <span *ngIf="romanNumeralThousand !== ''" class="thousand">{{romanNumeralThousand}}</span>
      <span>{{romanNumeralBase}}</span>
    </div>
  `,
  styles: ['.million {\n' +
  '  border-top: 2.5px double black !important;\n' +
  '  padding: 1px !important;\n' +
  '}',
    '.hundredThousand {\n' +
    '  border-top: 1px solid black !important;\n' +
    '  border-left: 1px solid black !important;\n' +
    '  border-right: 1px solid black !important;\n' +
    '}',
    '.thousand {\n' +
    '  border-top: 1px solid black !important;\n' +
    '}',
    '.serif {\n' +
    '  font-family: Times New Roman, Georgia, serif !important;\n' +
    '}'
  ]
})
export class NgRomanNumberComponent implements OnInit {
  @Input("numeral") numeral: number = 0;
  @Input("isRomanFontEnabled") romanFont: boolean = true;
  fullRomanNumber: RomanNumber = new RomanNumber(0, '');
  romanNumeralThousand: string = "";
  romanNumeralBase: string = "";

  constructor() {
  }

  ngOnInit(): void {
    if (this.numeral > 3999) {
      this.fullRomanNumber = toRomanLarge(this.numeral);
      this.romanNumeralBase = toRoman(this.fullRomanNumber.baseUnits);
      this.romanNumeralThousand = toRoman(this.fullRomanNumber.thousands);
    } else {
      this.romanNumeralBase = toRoman(this.numeral);
    }

  }

}
