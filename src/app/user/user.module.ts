import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { ButtonModule } from "primeng/button";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule {}
