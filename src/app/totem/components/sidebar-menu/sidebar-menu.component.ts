import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  @Input() isOpen:boolean = false;

}
