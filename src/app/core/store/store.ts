import { BehaviorSubject, Observable, Subscription, from } from "rxjs";
import { map } from "rxjs/operators";
import { EventEmitter } from "@angular/core";

export interface AbstractState {
  [key: string]: any;
}

export interface AbstractAction {
  type: string;
  payload?: any;
}

export class Store {
  private _state$: BehaviorSubject<AbstractState>;
  public state$: Observable<AbstractState>;
  private _subscription$: Subscription;
  public actions: EventEmitter<AbstractAction> = new EventEmitter();

  constructor(initialState: AbstractState) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable() as Observable<AbstractState>;
    this._subscription$ = from(this.actions)
      .pipe(
        map((a: AbstractAction) => this.reducer(this.state, a)),
        map((s: AbstractState) => this.setState(s))
      )
      .subscribe();
  }

  reducer(state: AbstractState, action?: AbstractAction) {
    return state;
  }

  get state(): AbstractState {
    return this._state$.getValue();
  }

  setState(nextState: AbstractState): void {
    this._state$.next(nextState);
  }
}
