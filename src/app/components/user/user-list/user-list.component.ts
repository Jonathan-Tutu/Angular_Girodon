import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {UserService} from "../../../services/user.service";
import {UserListDataSource} from "./user-list-datasource";
import {User} from "../../../models/user";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<User>;

    dataSource: UserListDataSource = new UserListDataSource();
    length: number = 0;
    displayedColumns = ['id', 'firstname', 'lastname', 'city'];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((users) => {
            this.dataSource.data = users;
            this.length = this.dataSource.data.length;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.table.dataSource = this.dataSource;
        });
    }
}
