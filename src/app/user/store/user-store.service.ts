import { Injectable } from "@angular/core";
import { User, UserDTO } from "src/app/models/user";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "src/app/core/store/store";
import { UserService } from "../services/user.service";

export enum UserActions {
  ADD = "User Add",
  DELETE = "Users Delete",
  FETCH = "Users Fetch",
  UPDATE = "Users Update",
  REPLACE = "Users Replace"
}

export interface UserAction {
  type: string;
  payload?: any;
}

export class UserState {
  users: UserDTO;
}

@Injectable({
  providedIn: "root"
})
export class UserStoreService extends Store {
  public state$: Observable<UserState>;
  private _fetch$: Subscription;
  constructor(private userService: UserService) {
    super(new UserState());
    this.actions.emit({ type: UserActions.FETCH });
  }

  reducer(state: UserState, action: UserAction) {
    switch (action.type) {
      case UserActions.ADD:
        return {
          ...state,
          users: {
            ...state.users,
            data: [...state.users.data, action.payload]
          }
        };
      case UserActions.DELETE:
        return {
          ...state
        };
      case UserActions.FETCH:
        this._fetch$ = this.userService
          .getAllUsers(action.payload)
          .pipe(map(res => this.actions.emit({ type: UserActions.REPLACE, payload: res })))
          .subscribe();
      case UserActions.UPDATE:
        return {
          ...state
        };
      case UserActions.REPLACE:
        return {
          ...state,
          users: action.payload
        };
      default:
        return state;
    }
  }
}
