import { Component, Input } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DragulaService } from 'ng2-dragula';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from "rxjs/Rx";
import { AdminService } from './admin2/admin-input.service';

declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'app-parent',
    templateUrl: './parent.html',
})

export class ParentComponent implements OnInit {
    color;
    private _presetFonts = ['Arial', 'Serif', 'Helvetica', 'Sans-Serif', 'Open Sans', 'Roboto Slab'];



    public sizeSelect: boolean = true;
    public styleSelect: boolean = true;
    temp_name: string = "Temp Name";
    foot_name: string = "© 2017 Kleveron. A venture of SRKay Consulting Group LLP. All Rights Reserved.";
    public presetFonts = this._presetFonts;

    togglePresetFonts() {
        this.presetFonts = this.presetFonts.length ? [] : this._presetFonts;
    }

    toggleExtraOptions() {
        this.sizeSelect = !this.sizeSelect;
        this.styleSelect = !this.styleSelect;
    }
    @Input()
    hideMenu = false;
    data: any[] = [];

    checks: boolean[] = [];



    constructor(private adminServ: AdminService, translate: TranslateService, private router: Router) {
        this.router.events.subscribe((res) => {
            if (!this.router.url.includes("/")) {
                this.hideMenu = true;
            }
            else
                this.hideMenu = false;
            console.log(this.router.url, "Current URL");
        })



        Observable.interval(6000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
        });

        //console.log(translate);
        this.adminServ.getMasterData().subscribe((data) => {
            this.data = JSON.parse(JSON.stringify(data));
            // console.log(this.data[0].FormName);
            console.log()


        });

    }


    changeLang(lang) {
        localStorage.setItem('lang', lang);
    }



    title = 'app';

    ngOnInit() {
        $('.navbar-header').click(function () {
            $('.wrapper').toggleClass('hidemenu');
        });

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

            var S = H - nH;

            $('.wrapper ').css('min-height', H);
            $('.aside_nav ').css('height', S);

            if ($(window).width() < 767) {
                $('.aside_nav ').css('min-height', S - nD - 20);
            }
            $(window).resize(function () {
                var H = $(window).height();
                var nH = $('.frame_header').height();
                var nD = $('.dash_logo').height();

                var S = H - nH;

                $('.wrapper ').css('min-height', H);
                $('.aside_nav ').css('height', S);

                if ($(window).width() < 767) {
                    $('.aside_nav ').css('min-height', S - nD - 20);
                }
            });
        });


        // side sub-menu js


        $(document).ready(function () {
            $(".inner").css("display", "none");
            $('.sub_menu_toggle').click(function (e) {
                e.preventDefault();

                var $this = $(this);
                if ($this.next().hasClass('visible')) {
                    $this.next().removeClass('visible');
                    $this.next().slideUp(350);
                } else {
                    $this.parent().parent().find('li .inner').removeClass('show');
                    $this.parent().parent().find('li .inner').slideUp(350);
                    $this.next().toggleClass('visible');
                    $this.next().slideToggle(350);
                }
            });
        });

        $(window).load(function () {
            var C = $(window).height();
            var cH = $('.con_hdr').height();
            var cT = C - cH;
            $('.all_con_wrap').css('height', cT);
            $(window).resize(function () {
                var C = $(window).height();
                var cH = $('.con_hdr').height();
                var cT = C - cH;
                $('.all_con_wrap').css('height', cT);
            });
        });

    }


}
