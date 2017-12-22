import { Component, OnInit, Inject } from "@angular/core";
import { RenderInputMasterService } from "./render-input-master.service";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/platform-browser";
import { AdminService } from "../admin2/admin-input.service";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'admin-panel',
    templateUrl: './admin-panel.component.html'
})

export class AdminPanel implements OnInit {
    data: any[] = [];
    checkedGrid: boolean;
    data_grid: any[] = [];
    constructor(private adminServ: AdminService, private rims: RenderInputMasterService, private router: Router, @Inject(DOCUMENT) private document: any) {
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
        else if (color == "orange-blue") {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/orange-blue.css");
        }

        this.adminServ.getMasterData().subscribe((data) => {
            this.data = JSON.parse(JSON.stringify(data));
        });
        this.rims.getInputDataGrid().subscribe((data) => {
            this.data_grid = JSON.parse(JSON.stringify(data));
        });

    }

    check0: boolean;
    check0_input: boolean[] = [];
    check0_input_grid: boolean[] = [];

    redirectToNext(id) {
        this.router.navigate(['/render2', id]);

    }


    redirectToNextGrid(i) {
        this.router.navigate(['/renderGrid', i]);
    }

    ngOnInit(): void {
        // loader js


        // $(window).load(function () {
        //     $(".loader").fadeOut(2000);
        // })



        if ($(window).width() < 767) {
            $(document).click(function (e) {
                if (!$(e.target).closest('.navbar-header, .aside').length) {
                    $('.wrapper').removeClass('hidemenu');
                }
            })
        }

        $('.aside_nav').perfectScrollbar();
        $('.drop-content').perfectScrollbar();

        $("#detail_tabs").tabs();
        $(".tab_no").click(function () {
            var active = $("#detail_tabs").tabs("option", "active");
            $("#detail_tabs").tabs("option", "active", active + 1);

        });

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

        $(".nx_btn").click(function () {
            var nextDiv = $(".modal_tabs:visible").next(".modal_tabs");
            if (nextDiv.length == 0) { // wrap around to beginning
                nextDiv = $(".modal_tabs:first");
            }
            $(".modal_tabs").hide();
            nextDiv.show();
        });

        $('#vldtn_btn').on('change', function (e) {
            if (e.target.checked) {
                $('.hide_lbl').show();
            }
            else {
                $('.hide_lbl').hide();
            }
        });

        $('#lbl_tgl').on('change', function (e) {
            if (e.target.checked) {
                $('.hide_lbl_cntrl').show();
                $('.hide_nxt').show();
                $('.hide_skip').hide();
            }
            else {
                $('.hide_lbl_cntrl').hide();
                $('.hide_skip').show();
                $('.hide_nxt').hide();
            }
        });

        // right toggle menu

        function toggle(id) {
            var el = document.getElementById(id);
            var img = document.getElementById("tgl_icn");
            var box = el.getAttribute("class");
            if (box == "thm_select") {
                el.setAttribute("class", "show");
                delay(img, "../images/toggle.png", 400);
            }
            else {
                el.setAttribute("class", "thm_select");
                delay(img, "../images/toggle.png", 400);
            }
        }

        function delay(elem, src, delayTime) {
            window.setTimeout(function () { elem.setAttribute("src", src); }, delayTime);
        }

        // side sub-menu js

        // $(document).ready(function () {
        //     $(".inner").css("display", "none");
        //     $('.sub_menu_toggle').click(function (e) {
        //         e.preventDefault();

        //         var $this = $(this);
        //         if ($this.next().hasClass('visible')) {
        //             $this.next().removeClass('visible');
        //             $this.next().slideUp(350);
        //         } else {
        //             $this.parent().parent().find('li .inner').removeClass('show');
        //             $this.parent().parent().find('li .inner').slideUp(350);
        //             $this.next().toggleClass('visible');
        //             $this.next().slideToggle(350);
        //         }
        //     });
        // });

    }



}