import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {Observable, of as observableOf, merge} from 'rxjs';
import {User} from "../../../models/user";
import {compare} from "../../../functions/compare";

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

        return data.sort((user1: User, user2: User) => {
            const isAsc = this.sort?.direction === 'asc';
            switch (this.sort?.active) {
                case 'id':
                    return compare(+user1.id, +user2.id, isAsc);
                case 'firstname':
                    return compare(user1.firstname, user2.firstname, isAsc);
                case 'lastname':
                    return compare(user1.lastname, user2.lastname, isAsc);
                case 'city':
                    return compare(user1.city, user2.city, isAsc);
                default:
                    return 0;
            }
        });
    }
}