import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserStoreService } from "../store/user-store.service";
import { User } from "src/app/models/user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.sass"]
})
export class UserFormComponent implements OnInit {
  constructor(private _router: ActivatedRoute, private userStore: UserStoreService, private _fb: FormBuilder) {}
  public userForm: FormGroup;
  public currentUSer: User = null;
  ngOnInit() {
    const userId = this._router.snapshot.params["userId"];
    if (userId) {
      this.userStore.state$.subscribe(state => {
        if (state.users) {
          this.currentUSer = state.users.data.find(x => x.id == userId);
          this.buildForm();
        } else {
          this.buildForm();
        }
      });
    } else {
      this.buildForm();
    }
  }

  buildForm() {
    this.userForm = this._fb.group({
      name: [
        this.currentUSer ? this.currentUSer.first_name + " " + this.currentUSer.last_name : "",
        Validators.required
      ],
      job: [""]
    });
  }
}
