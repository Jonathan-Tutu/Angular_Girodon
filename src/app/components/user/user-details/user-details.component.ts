import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    user?: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.userService.getUsers().subscribe((users: User[]) => {
                    users.forEach((user: User) => {
                        if (user.id == params['id']) {
                            this.user = user;
                            console.log(this.user);
                        }
                    });
                });
            }
        );
    }
}
