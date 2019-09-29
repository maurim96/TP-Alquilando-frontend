import { Injectable } from "@angular/core";
import { Content } from "src/app/models/content";
import { Store } from "src/app/core/store/store";
import { Observable } from "rxjs";

export enum ContentActions {
  ADD = "Content Add"
}

export interface ContentAction {
  type: string;
  payload?: any;
}

export class ContentState {
  contents: Content[] = [{ id: 0, description: "Mocked content" }];
}

@Injectable({
  providedIn: "root"
})
export class ContentStore extends Store {
  public state$: Observable<ContentState>;
  constructor() {
    super(new ContentState());
  }

  reducer(state: ContentState, action: ContentAction) {
    switch (action.type) {
      case ContentActions.ADD:
        return {
          ...state,
          contents: [...state.contents, { id: Math.floor(Math.random() * 99999), description: action.payload }]
        };
      default:
        return state;
    }
  }
}
