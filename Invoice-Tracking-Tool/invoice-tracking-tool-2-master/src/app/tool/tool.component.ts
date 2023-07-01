import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToolComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  searchForm: FormGroup;
  isSearching = false;
  inputCount = 0;
  public ouputICI: any[] = [];
  public ouputCSM: any[] = [];
  public ouputLBN: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cookieService: CookieService) {
    this.searchForm = this.formBuilder.group({
      ICINos: this.formBuilder.array([]),
      CSMIds: this.formBuilder.array([]),
      LegalBDNos: this.formBuilder.array([])
    });
    // this.addICINo();
    // this.addCSMId();
    // this.addLegalBDNo();
  }

  ngOnInit(): void {
  }

  get LegalBDNos(): FormArray {
    return this.searchForm.get('LegalBDNos') as FormArray;
  }

  get CSMIds(): FormArray {
    return this.searchForm.get('CSMIds') as FormArray;
  }

  get ICINos(): FormArray {
    return this.searchForm.get('ICINos') as FormArray;
  }

  addLegalBDNo(): void {
    this.LegalBDNos.push(
      this.formBuilder.group({
        LegalBDNo: ['', [Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9]*$'), Validators.required]]
      })
    );
  }

  addCSMId(): void {
    this.CSMIds.push(
      this.formBuilder.group({
        CnorCode: ['', [Validators.pattern('^[0-9]{5}$'), Validators.required]],
        CnorType: ['', [Validators.pattern('^[a-zA-Z]{3}$'), Validators.required]],
        CSMNumber: ['', [Validators.pattern('^[a-zA-Z0-9]{12}$'), Validators.required]]
      })
    );
  }

  addICINo(): void {
    this.ICINos.push(
      this.formBuilder.group({
        FirstSeller: ['', [Validators.pattern('^[0-9]{4}$'), Validators.required]],
        TransType: ['', [Validators.pattern('^[a-zA-Z]{3}$'), Validators.required]],
        ICINumber: ['', [Validators.pattern('^[0-9]{12}$'), Validators.required]]
      })
    );
  }

  removeLegalBDNo(i: number): void {
    this.LegalBDNos.removeAt(i);
  }
  removeCSMId(i: number): void {
    this.CSMIds.removeAt(i);
  }
  removeICINo(i: number): void {
    this.ICINos.removeAt(i);
  }

  search(): void {
    this.ouputICI = [];
    this.ouputCSM = [];
    this.ouputLBN = [];
    this.isSearching = true;
    this.inputCount = 0;

    this.searchForm.value.ICINos.forEach(e => {
      if (e.FirstSeller !== '' || e.TransType !== '' || e.ICINumber !== '') {
        this.inputCount ++;
        this.ouputICI.push(e.FirstSeller + '-G-' + e.TransType + '-' + e.ICINumber);
      }
    });
    this.searchForm.value.CSMIds.forEach(e => {
      if (e.CnorCode !== '' || e.CnorType !== '' || e.CSMNumber !== '') {
        this.inputCount ++;
        this.ouputCSM.push(e.CnorCode + '-' + e.CnorType + '-' + e.CSMNumber);
      }
    });
    this.searchForm.value.LegalBDNos.forEach(e => {
      if (e.LegalBDNo !== '') {
        this.inputCount ++;
        this.ouputLBN.push(e.LegalBDNo);
      }
    });

    // console.log(this.ouputICI);
    // console.log(this.ouputCSM);
    // console.log(this.ouputLBN);

    if (this.inputCount === 0) {
      this.displayMessage('Enter atleast one value', 'center', 'bottom', 'error');
    }

    //after response from service
    this.isSearching = false;
    this.router.navigate(['list']);
  }

  getError(s: string, i: number): string {
    const e1 = 'Please enter a ';
    const e2 = ' digit alphanumeric value';
    const e3 = ' digit numeric value';
    const e4 = ' digit alphabetic value';

    // if (s === 'legalBDNo' && this.LegalBDNos !== null && this.LegalBDNos.get(i.toString()).get('LegalBDNo').hasError('pattern')) {
    //     return e1 + 'max 30' + e2;
    // }
    // if (s === 'CnorCode' && this.CSMIds.get(i.toString()).get('CnorCode').hasError('pattern')) {
    //   return e1 + '5' + e3;
    // }
    // if (s === 'CnorType' && this.CSMIds.get(i.toString()).get('CnorType').hasError('pattern')) {
    //   return e1 + '3' + e4;
    // }
    // if (s === 'CSMNumber' && this.CSMIds.get(i.toString()).get('CSMNumber').hasError('pattern')) {
    //   return e1 + '12' + e2;
    // }
    // if (s === 'FirstSeller' && this.ICINos.get(i.toString()).get('FirstSeller').hasError('pattern')) {
    //   return e1 + '4' + e3;
    // }
    // if (s === 'TransType' && this.ICINos.get(i.toString()).get('TransType').hasError('pattern')) {
    //   return e1 + '3' + e4;
    // }
    // if (s === 'ICINumber' && this.ICINos.get(i.toString()).get('ICINumber').hasError('pattern')) {
    //   return e1 + '12' + e3;
    // }

    if (s === 'legalBDNo' && this.LegalBDNos.invalid) {
      return e1 + 'max 30' + e2;
    }
    if (s === 'CnorCode' && this.CSMIds.invalid) {
      return e1 + '5' + e3;
    }
    if (s === 'CnorType' && this.CSMIds.invalid) {
      return e1 + '3' + e4;
    }
    if (s === 'CSMNumber' && this.CSMIds.invalid) {
      return e1 + '12' + e2;
    }
    if (s === 'FirstSeller' && this.ICINos.invalid) {
      return e1 + '4' + e3;
    }
    if (s === 'TransType' && this.ICINos.invalid) {
      return e1 + '3' + e4;
    }
    if (s === 'ICINumber' && this.ICINos.invalid) {
      return e1 + '12' + e3;
    }
  }

  displayMessage(message: string, hpos: any, vpos: any, type: string): void {
    if (type === 'error') {
      this.snackBar.open(message, 'Dismiss', {
        horizontalPosition: hpos,
        verticalPosition: vpos,
        panelClass: ['snackBarErrorMessage']
      });
    }
    if (type === 'success') {
      this.snackBar.open(message, 'Dismiss', {
        horizontalPosition: hpos,
        verticalPosition: vpos,
        panelClass: ['snackBarSuccessMessage'],
        duration: 2000
      });
    }
  }

  logout(): void {
    this.cookieService.delete('authenticationToken');
    this.router.navigate(['login']);
    this.displayMessage('Logged out!!', 'center', 'bottom', 'success');
  }

}
