import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {Observable, of as observableOf, merge} from 'rxjs';
import {User} from "../../models/user";
import {compare} from "../../functions/compare";

export class UserListDataSource extends DataSource<User> {
    data: User[] = [];
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor() {
        super();
    }

    connect(): Observable<User[]> {
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

    private getPagedData(data: User[]): User[] {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        } else {
            return data;
        }
    }

    private getSortedData(data: User[]): User[] {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort?.direction === 'asc';
            switch (this.sort?.active) {
                case 'id':
                    return compare(+a.id, +b.id, isAsc);
                case 'firstname':
                    return compare(a.firstname, b.firstname, isAsc);
                case 'lastname':
                    return compare(a.lastname, b.lastname, isAsc);
                case 'city':
                    return compare(a.city, b.city, isAsc);
                default:
                    return 0;
            }
        });
    }
}