import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {OrderListDataSource} from './order-list-datasource';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<Order>;

    dataSource: OrderListDataSource = new OrderListDataSource();
    displayedColumns = ['id', 'name'];

    constructor(private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.orderService.getOrders().subscribe((orders) => {
            this.dataSource.data = orders;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.table.dataSource = this.dataSource;
        });
    }
}
