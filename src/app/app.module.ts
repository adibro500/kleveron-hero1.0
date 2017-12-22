import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./dashboard/settings/settings.component";
import { DynamicModule } from 'ng-dynamic-component';
import { TabTwoComponent } from "./dashboard/settings/tabs/tab2.component";
import { TabThreeComponent } from "./dashboard/settings/tabs/tab3.component";
import { DashTabComponent } from "./dashboard/tabs/dashtab.component";
import { TranslateService, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateStore } from "@ngx-translate/core/src/translate.store";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { SettingsMenuComponent } from "./dashboard/settings/settingsmenu.component";
import { DashMenuComponent } from "./dashboard/dashboardmenu.component";
import { ConfigMenuComponent } from "./config/configmenu.component";
import { ConfigTab2Component } from "./config/tabs/configtab2.component";
import { ConfigTab1Component } from "./config/tabs/configtab1.component";
import { CreatePageMenuComponent } from "./createPage/createPage.component";
import { ModalModule, TimepickerModule } from 'ngx-bootstrap';
import { CssClassForDivsService } from "./createPage/createPage.service";
import { CalendarModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RlTagInputModule } from 'angular2-tag-input';

import { OwlModule } from 'ngx-owl-carousel';
import { DatePickerComponent } from "./createPage/Datepicker.component";

import { EscapeHtmlPipe } from "./createPage/keep-html.pipe";
import { AdminInputMaster } from "./admin/admin-on-board.component";
import { AppCheck } from "./createPage/templatecheck.component";
import { AuthGuardService } from "./auth-guard.service";
import { LoginService } from "./login/login.service";
import { EscapeJSPipe } from "./createPage/keep-js.pipe";
import { TextboxComponent } from "./createPage/textbox.component";
import { NgxDnDModule } from "@swimlane/ngx-dnd";

import { createPage1Component } from "./createPage/createPage1.component";
import { AdminListMasterComponent } from "./admin/admin-list-master.component";
import { AdminGridMasterComponent } from "./admin/admin-grid-master.component";
import { DashRecComponent } from "./dashboardrec/dashrec.component";
import { MenuToggleRightComponent } from "./menuToggle/menuToggle.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentComponent } from './createPage/addDoc.component';
import { FieldComponent } from './createPage/addField.component';
import { CheckboxComponent } from './createPage/checkBox.component';
import { PasswordComponent } from './createPage/password.component';
import { RadioComponent } from './createPage/radio.component';
import { TimePickerComponent } from './createPage/timePicker.component';
import { DragulaModule, DragulaService } from "ng2-dragula/ng2-dragula"
import { RenderInputMaster } from './admin/renderInputMaster.component';
import { AuthGuard } from './auth-guard';
import { InputMasterService } from './admin/admin-input-master.service';
import { RenderInputMasterService } from './admin/render-input-master.service';
import { RenderInput } from './admin/render-input.component';
import { AdminPanel } from './admin/admin-panel.component';
import { AdminWidgetMaster } from './admin/admin-widget-master.component';
import { TieredMenuModule } from 'primeng/primeng';
import { ToggleButtonModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';
import { ColorPickComponent } from './colorPicker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { AdminInput } from './admin/adminInput.component';
import { OwlCar } from './admin/widgetContent/owl-carousel.component';
import { DxDataGridModule } from 'devextreme-angular';
import { Service } from './admin/grid-master.service';
import { ListComponent } from './admin/listContent/list.component';
import { ColumnComponent } from './admin/listContent/column.component';
import { DatatableComponent } from './admin/listContent/datatable.component';
import { TableSortDirective } from 'ng-table-sort/table-sort.directive';
import { GridListComponent } from './admin/listContent/gridlist.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RenderList } from './admin/renderGrid.component';
import { IndexComponent } from './index/index.component';
import { SwitchComponent } from './createPage/switch.component';
import { TextboxWithLabelComponent } from './createPage/textboxwithlbl.component';
import { SelectOptionComponent } from './createPage/selectOption.component';
import { SelectTextComponent } from './createPage/selectTextbox.component';
import { RenderCreateComponent } from './createPage/renderCreate.component';
import { MaterializeModule } from 'angular2-materialize';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxResizeWatcherDirective } from './admin/listContent/grid.directive';
import { AdminMaster } from './admin2/admin-input.component';
import { AdminService } from './admin2/admin-input.service';
import { RenderAdmin2 } from './admin2/renderAdmin.component';
import { DateTimePickerModule } from 'ngx-datetime-picker';
import { ParentComponent } from './parent-main.component';
import { SelectControlComponent } from './select-control/select-control.component';


const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'adminMaster', component: AdminMaster },

  { path: 'render/:index', component: RenderInputMaster },
  { path: 'renderinput', component: RenderInput },
  { path: 'adminPanel', component: AdminPanel },

  {
    path: 'parent', component: ParentComponent,
    children: [
      { path: 'adminMaster', component: AdminMaster },
      { path: 'adminWidget', component: AdminWidgetMaster },
      { path: 'createPageMenu/:uname', component: createPage1Component },
      { path: 'renderCreate/:index', component: RenderCreateComponent },
      { path: 'adminGridMaster/:uname', component: AdminGridMasterComponent },

      {
        path: 'configs', component: ConfigMenuComponent,

        children: [
          { path: 'config1', component: ConfigTab1Component },
          { path: 'config2', component: ConfigTab2Component },
        ]

      },
      { path: 'dashboard/:uname', component: DashboardComponent },
      { path: 'dashtab/:uname', component: DashTabComponent },
      { path: 'settings/:uname', component: SettingsComponent },
      { path: 'settingstab2/:uname', component: TabTwoComponent },
      { path: 'settingstab3/:uname', component: TabThreeComponent },
      { path: 'render2/:id', component: RenderAdmin2 },
      { path: 'adminListMaster/:uname', component: AdminListMasterComponent },
      { path: 'adminPanel', component: AdminPanel },



    ]
  },
  { path: 'colorPick', component: ColorPickComponent },
  { path: 'adminInput', component: AdminInput },
  { path: 'List', component: ListComponent },
  //RenderList
  { path: 'renderGrid/:id', component: RenderList },
  { path: 'gridList', component: GridListComponent },
  //GridComponent
  //RenderCreateComponent
  {
    path: 'createPage', component: CreatePageMenuComponent,
    children: [
      { path: 'createPageMenu/:uname', component: createPage1Component },
      { path: 'renderCreate/:index', component: RenderCreateComponent },

    ]
  },

  { path: 'adminListMaster/:uname', component: AdminListMasterComponent },
  { path: 'dashboard/:uname', component: DashRecComponent },


  { path: 'adminInputMaster/:uname', component: AdminInputMaster },

  {
    path: 'configs', component: ConfigMenuComponent, canActivate: [AuthGuard],

    children: [
      { path: 'config1', component: ConfigTab1Component },
      { path: 'config2', component: ConfigTab2Component },
    ]

  },
  {
    path: 'dash', component: DashMenuComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard/:uname', component: DashboardComponent },
      { path: 'dashtab/:uname', component: DashTabComponent },

    ]

  },
  {
    path: 'settingsmenu', component: SettingsMenuComponent,
    children: [

      { path: 'settings/:uname', component: SettingsComponent },
      { path: 'settingstab2/:uname', component: TabTwoComponent },
      { path: 'settingstab3/:uname', component: TabThreeComponent },
    ]
  },

  { path: 'appcheck', component: AppCheck },

];

export function createTranslateLoader(http: HttpClient) {


  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');

}


@NgModule({
  declarations: [
    RenderList,
    SelectControlComponent,
    ColumnComponent,
    AdminWidgetMaster,
    ListComponent,
    OwlCar,
    RenderInputMaster,
    DashRecComponent,
    AdminListMasterComponent,
    AdminGridMasterComponent,
    createPage1Component,
    IndexComponent,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    TabTwoComponent,
    TabThreeComponent,
    DashTabComponent,
    SettingsMenuComponent,
    DashMenuComponent,
    ConfigMenuComponent,
    ConfigTab1Component,
    CreatePageMenuComponent,
    ConfigTab2Component,
    AdminMaster,
    ParentComponent,
    EscapeHtmlPipe,
    AdminInputMaster,
    AppCheck,
    EscapeJSPipe,
    TextboxComponent,
    SwitchComponent,
    MenuToggleRightComponent,
    DocumentComponent,
    FieldComponent,
    CheckboxComponent,
    PasswordComponent,
    RadioComponent,
    TimePickerComponent,
    DatePickerComponent,
    AdminInput,
    RenderInput,
    AdminPanel,
    ColorPickComponent,
    TableSortDirective,
    DatatableComponent,
    GridListComponent,
    TextboxWithLabelComponent,
    SelectOptionComponent,
    SelectTextComponent,
    RenderCreateComponent,
    RenderAdmin2,
  ],
  imports: [
    DateTimePickerModule,
    NoopAnimationsModule,
    DxDataGridModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    ColorPickerModule,
    TreeModule,
    TreeTableModule,
    TooltipModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    DragulaModule,
    BrowserAnimationsModule,
    NgxDnDModule,
    BrowserModule,
    OwlModule,
    FormsModule,
    MaterializeModule,
    DynamicModule.withComponents([TextboxComponent]),
    NguiDatetimePickerModule,
    NgbModule.forRoot(),
    FormsModule,
    CalendarModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    RlTagInputModule,
    HttpClientModule,
    HttpModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,

    ColorPickerModule,

    TimepickerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],

  exports: [NgxDnDModule, ColorPickerModule],
  providers: [AdminService, Service, NgxResizeWatcherDirective,
    TranslateService, CssClassForDivsService, AuthGuardService, LoginService, AuthGuard, InputMasterService, RenderInputMasterService],
  entryComponents: [SelectTextComponent, SelectOptionComponent, TextboxWithLabelComponent, SwitchComponent, DatePickerComponent, DocumentComponent, FieldComponent, CheckboxComponent, PasswordComponent, RadioComponent, TimePickerComponent],

  bootstrap: [AppComponent]
})
export class AppModule {



}
