import { Component, Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: "select-control",
    templateUrl: "./select-control.html"
})

export class SelectControlComponent implements OnInit {
    ngOnInit(): void {


    }

    @Input()
    group1;


    constructor() {


    }




}
