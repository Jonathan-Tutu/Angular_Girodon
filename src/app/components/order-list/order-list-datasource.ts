import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {Observable, of as observableOf, merge} from 'rxjs';
import {Order} from "../../models/order";
import {compare} from "../../functions/compare";

export class OrderListDataSource extends DataSource<Order> {
    data: Order[] = [];
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor() {
        super();
    }

    connect(): Observable<Order[]> {
        if (this.paginator && this.sort) {
            return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
                .pipe(map(() => {
                    return this.getPagedData(this.getSortedData([...this.data]));
                }));
        } else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }

    disconnect(): void {
    }

    private getPagedData(data: Order[]): Order[] {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        } else {
            return data;
        }
    }

    private getSortedData(data: Order[]): Order[] {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort?.direction === 'asc';
            switch (this.sort?.active) {
                case 'id':
                    return compare(+a.id, +b.id, isAsc);
                case 'ref':
                    return compare(a.ref, b.ref, isAsc);
                case 'date':
                    return compare(a.date, b.date, isAsc);
                case 'price':
                    return compare(a.price, b.price, isAsc);
                default:
                    return 0;
            }
        });
    }
}