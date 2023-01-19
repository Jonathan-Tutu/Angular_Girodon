import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {OrderListDataSource} from './order-list-datasource';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class OrderListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<Order>;

    dataSource: OrderListDataSource = new OrderListDataSource();
    displayedColumns = ['id', 'ref', 'date', 'price'];
    columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
    expandedOrder: Order | null | undefined;

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
