import { Input, OnInit, AfterViewInit, DoCheck, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Employee, Service } from './grid-master.service';
import { InputMasterService } from './admin-input-master.service';
import { RenderInputMasterService } from './render-input-master.service';
import { Http, Response } from '@angular/http';
import { Injectable, Component, ElementRef, ViewChild } from '@angular/core';
import { TableSortDirective } from 'ng-table-sort/table-sort.directive';
import { DroppableDirective } from '@swimlane/ngx-dnd';
import tableDragger from 'table-dragger'
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { Router } from '@angular/router';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: "admin-list-master",
    templateUrl: "./admin-list-master.html",
    styleUrls: ["./list.css"]
})

export class AdminListMasterComponent implements OnInit {
    emps: any[];
    imps: any[] = [];
    options: any;
    sortToggle: boolean = true;


    constructor(private router: Router, @Inject(DOCUMENT) private document: any, private service: Service, private ims: InputMasterService) {
        this.emps = this.service.getEmployees();

        var side = localStorage.getItem("side");
        if (side == "right") {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/right-menu.css");
        }
        else {
            this.document.getElementById("theme").setAttribute("href", "./assets/styles/left-menu.css");
        }

        var color = localStorage.getItem("color");
        if (color == "pink-blue") {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/pink-blue.css");
        }
        else {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/orange-blue.css");
        }

        this.emps = this.service.getEmployees();
        //this.imps.push("hello");
        this.options = {
            direction: 'horizontal',
            removeOnSpill: false
        }


    }


    calculateCellValue(data) {
        return [data.Title, data.FirstName, data.LastName].join(" ");
    }

    uname = localStorage.getItem("loginname");
    formName;
    formUrl;

    saveClick() {
        $("#input_control_URL").hide();

        let JSONObj = {
            "user": "ravi",
            "Form_Name": this.formName,
            "Form_Url": this.formUrl,
            "data": this.emps
        }
        this.ims.putData(JSON.stringify(JSONObj));

        this.router.navigate(['/adminPanel']);
    }


    // this.emps[j]["ActiveProject"].push(this.emps[j].ActiveProject);
    //obj[Object.keys(obj)[1]]
    //  this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);
    // this.emps[j][Object.keys(this.emps[j])[i]].push(this.emps[j][Object.keys(this.emps[j])[i]]);


    cloneElement(i, fl) {

        if (fl == "ap" && i == 0) {
            for (var j = 0; j < this.emps[0].ActiveProject.length; j++) {


            }
        }

    }

    editElement(i) {

    }

    delElement(idx, fl) {
        if (fl == "ap") {
            for (var i = 0; i < this.emps.length; i++)
                delete this.emps[i].ActiveProject[idx];
        }
        if (fl == "inv") {
            for (var i = 0; i < this.emps.length; i++)
                delete this.emps[i].Invoiced[idx];
        }

    }


    ngOnInit(): void {




        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            })
        }

        $('.aside_nav').perfectScrollbar();
        $('.drop-content').perfectScrollbar();

        $(window).load(function () {
            var H = $(window).height();
            var nH = $('.frame_header').height();
            var nD = $('.dash_logo').height();
            //var F = $('footer').height();
            var S = H - nH;
            //var C = H - nH - F - 60;
            $('.wrapper ').css('min-height', H);
            $('.aside_nav ').css('height', S);
            //$('.bgwhite').css('min-height', C);
            if ($(window).width() < 767) {
                $('.aside_nav ').css('min-height', S - nD - 20);
            }
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.frame_header').height();
                var nD = $('.dash_logo').height();
                //var F = $('footer').height();
                var S = H - nH;
                //var C = H - nH - F - 60;
                $('.wrapper ').css('min-height', H);
                $('.aside_nav ').css('height', S);
                //$('.bgwhite').css('min-height', C);
                if ($(window).width() < 767) {
                    $('.aside_nav ').css('min-height', S - nD - 20);
                }
            });
        });


        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);

        });
    }

    toggle(id) {
        var el = document.getElementById(id);
        var img = document.getElementById("tgl_icn");
        var box = el.getAttribute("class");
        if (box == "thm_select") {
            el.setAttribute("class", "show");
            this.delay(img, "/assets/images/toggle.png", 400);
        }
        else {
            el.setAttribute("class", "thm_select");
            this.delay(img, "/assets/images/toggle.png", 400);
        }
    }

    delay(elem, src, delayTime) {
        window.setTimeout(function () { elem.setAttribute("src", src); }, delayTime);
    }






}

