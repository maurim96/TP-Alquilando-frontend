import { Component, OnInit } from "@angular/core";
import { ContentStore, ContentActions } from "../store/content-store.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.sass"]
})
export class ContentComponent implements OnInit {
  constructor(private contentStore: ContentStore) {}

  ngOnInit() {}

  addContent() {
    this.contentStore.actions.emit({ type: ContentActions.ADD, payload: "Added content" });
  }
}
