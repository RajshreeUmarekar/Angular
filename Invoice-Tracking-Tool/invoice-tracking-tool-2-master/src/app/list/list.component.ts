import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  bd_id: string;
  bd_error_severity: string;
  csm_id: string;
  status: string;
}

const ID: string[] = [
  '12', '343', '35', '677', '89', '577', '356', '654', '233', '456',
  '465', '565', '56', '68', '898', '321', '54', '876', '56', '45', '14',
  '45', '23', '875', '933'
];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = [
  'bd_id',
  'bd_error_severity',
  'csm_id',
  'status',
];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private snackBar: MatSnackBar,
  ) { 
    // Create 20 invoices
    const users = Array.from({length: 20}, (_, k) => createNewInvoice(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayMessage(message: string, hpos: any, vpos: any): void {
      this.snackBar.open(message, 'Dismiss', {
        horizontalPosition: hpos,
        verticalPosition: vpos,
        panelClass: ['snackBarSuccessMessage'],
        duration: 2000
      });
  }

  logout(): void {
    this.cookieService.delete('authenticationToken');
    this.router.navigate(['login']);
    this.displayMessage('Logged out!!', 'center', 'bottom');
  }

  back(): void{
    this.router.navigate(['tool']);
  }

}

/** Builds and returns a new User. */
function createNewInvoice(id: number): UserData {
  return {
    bd_id: ID[id+0],
    bd_error_severity: ID[id+1],
    csm_id: ID[id+2],
    status: ID[id+3],
  };
}
