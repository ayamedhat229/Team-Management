import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  roles = [
  { name: 'Frontend Developer', value: 'Frontend Developer' },
  { name: 'Backend Developer', value: 'Backend Developer' },
  { name: 'UI-UX Designer', value: 'UI-UX Designer' },


  ];

  statuses = [
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' }
  ];

  selectedRole: string | null = null;
  selectedStatus: string | null = null;

  @Output() roleChanged = new EventEmitter<string | null>();
  @Output() statusChanged = new EventEmitter<string | null>();

  onRoleChange(event: any) {
    this.roleChanged.emit(event?.value || null);
  }

  onStatusChange(event: any) {
    this.statusChanged.emit(event?.value || null);
  }
}