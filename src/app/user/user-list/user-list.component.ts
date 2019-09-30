import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserStoreService, UserActions } from "../store/user-store.service";
import { UserDTO, User } from "src/app/models/user";
import { LazyLoadEvent } from "primeng/primeng";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.sass"]
})
export class UserListComponent implements OnInit, OnDestroy {
  constructor(private userStore: UserStoreService, private _router: Router) {}
  loading: boolean = true;
  users: UserDTO;
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.userStore.state$.subscribe(res => {
      if (res.users) {
        this.users = res.users;
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  paginate(event) {
    this.loading = true;
    if (this.users) {
      this.userStore.actions.emit({ type: UserActions.FETCH, payload: ++event.page });
    }
  }

  editUser(userId: Number) {
    this._router.navigateByUrl(`form/${userId}`);
  }
}
