import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {Order} from "../../models/order";
import {UserService} from "../../services/user.service";
import {UserListDataSource} from "./user-list-datasource";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<Order>;

    dataSource: UserListDataSource = new UserListDataSource();
    displayedColumns = ['id', 'name'];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((users) => {
            this.dataSource.data = users;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.table.dataSource = this.dataSource;
        });
    }
}
