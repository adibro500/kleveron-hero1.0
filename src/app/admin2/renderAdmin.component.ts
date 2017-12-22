import { Component, Renderer, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { AdminService } from './admin-input.service';
import { ActivatedRoute } from '@angular/router';
import { IsMobileService } from 'ngx-datetime-picker/services/isMobile.service';
import { DateService } from 'ngx-datetime-picker/services/date.service';
import { DatePipe } from '@angular/common';
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;

@Component({
    selector: 'app-root',
    templateUrl: './render2.html',
})

export class RenderAdmin2 implements OnInit {
    id: string;
    order: number;
    type: string;
    values: string[];
    placeholder: string;
    lnames: string[];
    lclasses: string[];
    lids: string[];
    selectRadio;

    pholder: string = 'New Company';
    strid0 = "cmn_input0";
    str0: string = "";
    pholder0: string = 'New Company';
    strid0_CHA = "Textarea1";
    str0_CHA: string = '';
    pholder0_CHA = "Company Head Office Address";
    strid0_CEO = "Text";
    str0_CEO: string = '';
    pholder0_CEO = "Name Of CEO/MD";
    strid0_city = "TextCity";
    str0_city: string = '';
    pholder0_city = "City";
    strid0_aob = "Areas";
    aob0: string[] = ['Area of Business', 'XYz', 'ABC'];
    pholder0_aob = "Areas of Business";
    strid0_fb = "Text";
    str0_fb: string = '';
    pholder0_fb = "Facebook Address";
    pholder0_ll = "Linkedin Address";
    strid0_ll = "Text";
    str0_ll: string = '';
    pholder0_gp = "Google Plus Address";
    strid0_gp = "Text";
    str0_gp: string = '';
    pholder0_tw = "Twitter Handle";
    strid0_tw = "Text";
    str0_tw: string = '';
    pholder0_ctry = "Country";
    strid0_ctry = "Text";
    str0_ctry: string[] = ['Country', 'China', 'Dubai', 'Russia'];
    pholder0_state = "Country";
    strid0_state = "Text";
    str0_state: string[] = ['State', 'Andhra Pradesh', 'Gujarat', 'Maharahtra'];
    pholder0_info = "input text for a single line field with a max";
    strid0_info = "Textarea1";
    str0_info: string = "";
    lid0_info = "label";
    lname0_info = "Other Information";
    lclass0_info: string = "lbl_hdr";
    strid0_noe = "Text";
    str0_noe: string[] = ['Number of employees', 'ABC', 'XYZ'];
    strid0_cbox: string[] = ["Checkbox1", "checkbox2"];
    str0_cbox: string[] = ['Compliant With PF(India)', 'Compliant With ESIC(India)'];
    isval0: boolean = false;
    valmsg0: string = "";
    Textboxes: any[] = [];

    options: any;

    temp2: any;
    data: any;
    index;

    filesToUpload: Array<File>;


    constructor(dragulaService: DragulaService, private route: ActivatedRoute, private adminService: AdminService) {

        this.options = {
            revertOnSpill: true
        };
        this.filesToUpload = [];

        // dragulaService.out.subscribe((value: any[]) => {
        //     const [bagName, e, el] = value;
        //     console.log("ll", e);
        //     console.log("kk", el);
        //     console.log('id is:', e.dataset.id);
        //     this.temp2 = ;

        // });
        dragulaService.drop.subscribe((value: any[]) => {
            this.onDrop(value);

        });

        this.adminService.getMasterData().subscribe(data => {
            this.data = JSON.parse(JSON.stringify(data));
            this.route.params.subscribe(params => {
                this.index = params['id'];
                if (this.data && this.data.length > 0 && this.index)
                    this.getTemplateByIndex(this.index);
            }
            )
        });


    }

    upload() {
        this.makeFileRequest("http://localhost:5000/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }




    texts: any[] = [];



    getTemplateByIndex(i) {
        this.Textboxes = this.data[i].controls;
        for (var k = 0; k < this.Textboxes.length; k++) {
            this.Textboxes[k].order = k;
        }
        console.log("textboxes", this.Textboxes);
    }



    saveData() {
        this.adminService.putMasterData(this.Textboxes);
        console.log("done");
    }



    onDrop(args) {

        const [el, e, target, source, sibling] = args;
        //console.log("kk", e.dataset.id);
        console.log("kk", el);
        console.log('id is:', source.children[0]);
        console.log('id is:', target.children[2]);
        //sconsole.log('id is:', sibling.dataset.id);
        if (sibling !== null && e !== null && this.Textboxes[parseInt(e.dataset.id)] !== undefined) {
            let tmp = this.Textboxes[e.dataset.id].order;
            this.Textboxes[e.dataset.id].order = this.Textboxes[sibling.dataset.id].order;
            this.Textboxes[sibling.dataset.id].order = tmp;

            // for (var i = sibling.dataset.id + 1; i < this.Textboxes.length; i++) {
            //     if (this.Textboxes[i] !== undefined) {
            //         alert(this.Textboxes[i].order);
            //         this.Textboxes[i].order = this.Textboxes[i].order++;



            //     }

            // }
            //  console.log('id2 is:', args[4].getAttribute("data-id"));

            //console.log("other id is", value[4].getAttribute("data-id"));

            // console.log(e.type, e);
            // if (args[4] !== null && this.Textboxes[parseInt(args[4].getAttribute("data-id"))] !== undefined) {
            //     console.log("inside condition");
            //     let temp = this.Textboxes[parseInt(e.dataset.id)].order;
            //     this.Textboxes[parseInt(e.dataset.id)].order = this.Textboxes[parseInt(args[4].getAttribute("data-id"))].order;
            //     this.Textboxes[parseInt(args[4].getAttribute("data-id"))].order = temp;
            // this.Textboxes.sort((a, b) => {
            //     if (a.order < b.order) return -1;
            //     else if (a.order > b.order) return 1;
            //     else return 0;
            // });
            console.log(this.Textboxes);
        }
        // }
        // else

        //     console.log("outside condition");


    }

    selectedValue;
    clickRad(tb) {

        alert(tb);
        this.selectedValue = tb;

    }



    nextData() {
        alert(this.selectRadio);
    }


    cloneElement(idx) {

        for (var i = idx + 1; i < this.Textboxes.length; i++) {

            this.Textboxes[i].order = this.Textboxes[i].order++;

        }
        this.Textboxes.splice(idx + 1, 0, this.Textboxes[idx]);
        console.log(this.Textboxes);
    }

    defValues;
    getDef(i) {
        return this.Textboxes[i].values[0];

    }

    // onDrop(args) {
    //     let [e, el, source, target] = args;

    //     //        let id = source.id;
    //     console.log(source);
    //     console.log(target);
    // }

    ngOnInit() {

        var num = 0;
        $(".save_btn").click(function () {
            console.log($("#contra").html());

        });

        // $(".delel").click(function () {
        //     $(this).closest(".element_box").remove();
        // });


        // $('#datetimepicker3').datetimepicker({
        //     icons: {
        //         time: 'fa fa-clock-o',
        //         date: 'fa fa-calendar',
        //         up: 'fa fa-chevron-up',
        //         down: 'fa fa-chevron-down',
        //         previous: 'fa fa-chevron-left',
        //         next: 'fa fa-chevron-right',
        //         today: 'fa fa-crosshairs',
        //         clear: 'fa fa-trash'
        //     },
        //     format: 'MM/DD/YYYY'
        // });

        // $(function () {
        //     $('#datetimepicker1').datetimepicker();
        // });



        $(function () {
            $('#datetimepicker2').datetimepicker({
                format: 'LT'
            });
        });

        $(document).ready(function () {
            //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
            $(".add-more").click(function () {
                var html = $(".copy-fields").html();
                $(".add_field").after(html);
            });
            $("body").on("click", ".remove", function () {
                $(this).parents(".remove_field").remove();
            });
        });






        $('.sv_btn').on('click', function () {
            $("#input_label_Modal").hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        })


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
            // $('.wrapper ').css('min-height', H);
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
                // $('.wrapper ').css('min-height', H);
                $('.aside_nav ').css('height', S);
                //$('.bgwhite').css('min-height', C);
                if ($(window).width() < 767) {
                    $('.aside_nav ').css('min-height', S - nD - 20);
                }
            });
        });

        $("#clone0").click(function () {
            $(this).parent().find('.element-box').eq(0).clone().appendTo(this);
        });

        $(".nx_btn").click(function () {
            var nextDiv = $(".modal_tabs:visible").next(".modal_tabs");
            if (nextDiv.length == 0) { // wrap around to beginning
                nextDiv = $(".modal_tabs:first");
            }
            $(".modal_tabs").hide();
            nextDiv.show();
        });

        $('#vldtn_btn1').on('change', function (e) {
            if (e.target.checked) {
                $('.hide_lbl').show();
            }
            else {
                $('.hide_lbl').hide();
            }
        });





    }
    is_submit: boolean;
    jsonObj: any[] = [];
    selectedValues: any[] = [];
    dateValues: any[] = [];
    timeValues: any[] = [];
    checkValues: any[] = [];
    selectValues: any[] = [];
    selectValues2: any[] = [];
    sendData() {


        this.is_submit = true;


        let bjson = {};

        for (var i = 0; i < this.Textboxes.length; i++) {
            var k = 0;
            alert("inside " + this.Textboxes[i].type);
            alert("more in " + i);

            if (this.Textboxes[i].type === 'textbox' && this.Textboxes[i].values[0] !== "") {
                alert("text");


                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder + "_" + i] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'select' && this.selectValues[i] !== "") {
                alert("select");
                bjson["control_id"] = this.Textboxes[i].id;

                bjson[this.Textboxes[i].values[0] + "-" + i] = this.selectValues[i];

            } else if (this.Textboxes[i].type === 'password' && this.Textboxes[i].values[0] !== "") {
                alert("pass");
                bjson["control_id"] = this.Textboxes[i].id;

                bjson[this.Textboxes[i].placeholder + "_" + i] = this.Textboxes[i].values[0];


            } else if (this.Textboxes[i].type === 'checkbox' && this.Textboxes[i].boolvals[0] != undefined) {
                alert("checkbox");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].lnames[0] + "_" + i] = this.Textboxes[i].boolvals[0];


            } else if (this.Textboxes[i].type === 'radio' && this.selectRadio != undefined) {
                alert("radio");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].lnames[0] + "_" + i] = this.selectRadio;


            } else if (this.Textboxes[i].type === 'switch' && this.Textboxes[i].values[0] !== "") {
                alert("switch");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder + "_" + i] = this.Textboxes[i].values[0];



            } else if (this.Textboxes[i].type === 'datepicker' && this.dateValues[i] !== undefined) {
                alert("datepicker");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.dateValues[i];

            } else if (this.Textboxes[i].type === 'timepicker' && this.timeValues[i] !== undefined) {
                alert("timepicker");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.timeValues[i];

            } else if (this.Textboxes[i].type === 'search' && this.Textboxes[i].values[0] !== "") {
                alert("search");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'fbook' && this.Textboxes[i].values[0] !== "") {
                alert("fbook");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'linkedin' && this.Textboxes[i].values[0] !== "") {
                alert("linkedin");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'gplus' && this.Textboxes[i].values[0] !== "") {
                alert("gplus");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];

            } else if (this.Textboxes[i].type === 'twitter' && this.Textboxes[i].values[0] !== "") {
                alert("twitter");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];
            }
            else if (this.Textboxes[i].type === 'select_text' && this.Textboxes[i].values[0] !== "" && this.Textboxes[i].boolvals[0] !== undefined && this.Textboxes[i].boolvals[0] != false) {
                alert("select_text");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];
                bjson["active for " + this.Textboxes[i].placeholder] = this.Textboxes[i].boolvals[0];
            } else if (this.Textboxes[i].type === 'select_options' && this.Textboxes[i].values[0] !== "" && this.Textboxes[i].boolvals[0] !== undefined && this.Textboxes[i].boolvals[0] != false) {
                alert("select_opts");
                bjson["control_id"] = this.Textboxes[i].id;
                bjson[this.Textboxes[i].placeholder] = this.Textboxes[i].values[0];
                bjson["active for " + this.Textboxes[i].placeholder] = this.Textboxes[i].boolvals[0];
            }

        }
        this.jsonObj.push(bjson);

        let Obj = {
            "formValues": this.jsonObj
        }
        this.adminService.putFormData(Obj);
        alert("Data sent successfully");


        console.log(this.jsonObj);
    }

    log(e: any) {
        console.log(e.type, e);
    }

    selectfnValues(idx) {




    }

}
