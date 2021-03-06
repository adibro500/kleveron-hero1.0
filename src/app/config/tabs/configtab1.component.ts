
import { Component, AfterViewInit, OnDestroy, OnInit, Output, EventEmitter, DoCheck, NgZone } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;


@Component({
    selector: 'config1',
    templateUrl: './configtab1.html',
})

export class ConfigTab1Component implements OnInit, DoCheck {
    isNextClicked: boolean = false;
    checkedArr = new Array<any>();


    constructor(translate: TranslateService, private router: Router, private zone: NgZone) {
        Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
        });

    }

    nextClicked(isClicked: string) {
        console.log(" nextClicked ", isClicked);
        localStorage.setItem("nextClick", isClicked);
        //   this.router.navigate(['/dash/dashtab']);

        console.log("kkkkk");
        for (var i = 0; i < 14; i++) {
            if ((<HTMLInputElement>document.getElementById('chk' + (i + 1))).checked == true) {
                this.checkedArr[i] = i;
            }
        }
        setTimeout(() => {
            console.log("arr", this.checkedArr.toString());
            localStorage.setItem("opts", this.checkedArr.toString());
            this.router.navigate(['/dash/dashboard']);
        }, 5000);
    }



    ngDoCheck() {

    }

    checkBoxes(arrChecked: any[]) {

    }






    ngOnInit() {


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
            var F = $('footer').height();
            var S = H - nH;
            var C = H - nH - F - 60;
            $('.aside_nav ').css('height', S);
            $('.bgwhite').css('min-height', C);
            if ($(window).width() < 767) {
                $('.aside_nav ').css('height', S - nD - 20);
            }
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.frame_header').height();
                var nD = $('.dash_logo').height();
                var F = $('footer').height();
                var S = H - nH;
                var C = H - nH - F - 60;
                $('.aside_nav ').css('height', S);
                $('.bgwhite').css('min-height', C);
                if ($(window).width() < 767) {
                    $('.aside_nav ').css('height', S - nD - 20);
                }
            });
        });

        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);

        });

    }



}