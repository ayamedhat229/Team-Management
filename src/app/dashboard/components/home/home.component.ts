import { Component, OnInit } from '@angular/core';
import { TableService } from '../../service/table.service';
import { ITable } from '../../model/table';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
tableOfData: ITable[] = [];
  originalData: ITable[] = [];
  selectedRole: string | null = null;
  selectedStatus: string | null = null;

  constructor(private _TableService: TableService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this._TableService.getAllTableData().subscribe({
      next: (data) => {
        this.originalData = data;
        this.tableOfData = data;
      },
      error: (err) => console.error(err)
    });
  }

  onRoleFilterChanged(role: string | null) {
    this.selectedRole = role;
    this.applyFilters();
  }

  onStatusFilterChanged(status: string | null) {
    this.selectedStatus = status;
    this.applyFilters();
  }

  applyFilters() {
    this.tableOfData = this.originalData.filter(item => {
      const roleMatch = this.selectedRole ? item.role === this.selectedRole : true;
      const statusMatch = this.selectedStatus ? item.status === this.selectedStatus : true;
      return roleMatch && statusMatch;
    });
  }
  
}
