import { Component, Input, OnInit } from "@angular/core";
import { Control2 } from "./Controls";
declare var $: any;
declare var perfectScrollbar: any;
declare var height: any;
declare var tabs: any;
@Component({
    selector: 'switch',
    templateUrl: './switch.component.html',
    providers: [Control2],
})




export class SwitchComponent implements OnInit {

    control: Control2;
    showTextBox: boolean;
    divclass1_tb: string = "col-md-6 col-sm-6 col-xs-12 selectdiv element_box";
    divclass0_tb: string = "col-md-6 col-sm-6 col-xs-12 klvrn_col dtl_row";
    pholder0_tb: string = "simple textbox";
    class0_tb: string = "cmn_input";
    str0_tb = "text1";
    strid0_tb = "text1";
    encodedExampleHtml: string;
    showTextBox_tb = false;


    ngOnInit(): void {

        $('.delel').on('click', function () {
            $(this).closest('.element_box').remove()

        });

        $(".element_box1").on('hover', function () {
            $(this).closest(".parentdiv #tour-action-ui-id").addClass("action-ui");
        });

    }



    @Input() id;
    @Input() value;
    @Input() pholder;
    @Input() css;

    Textboxes: Control2[] = this.con.JSONarrS;


    editElement(idx, inp_flag) {
        if (inp_flag == undefined) {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", 'TB');
        }
        else {
            localStorage.setItem("indexEle", idx);
            localStorage.setItem("inp_flag", inp_flag);
        }


    }

    jk;
    saveCntrl(ctpar, ctid, ctval, ctph, ctvbx, ctvmsg) {
        if (localStorage.getItem("inp_flag") == 'TB') {

            if (localStorage.getItem("indexEle") !== 'fg') {
                this.jk = parseInt(localStorage.getItem("indexEle"));
                localStorage.removeItem("indexEle");
                this.con.JSONarrS[this.jk - 1]["value"] = ctval;
                this.con.JSONarrS[this.jk - 1]["pholder"] = ctph;
                this.con.JSONarrS[this.jk - 1]["id"] = ctid;
                // this.con.JSONarr[parseInt(localStorage.getItem("indexEle")) - 1]["edited"] = true;
                console.log(this.Textboxes);

            }
            else {
                this.value = ctval;
                this.pholder = ctph;
                this.id = ctid;
            }
            this.showTextBox = true;
            localStorage.removeItem("inp_flag");
            $("#input_control_Modal").hide();
        }


    }




    constructor(public con: Control2) {
    }
    cloneElement(idx, inp_flag) {

        alert(idx)
        if (inp_flag == undefined) {
            if (idx == 0) {
                if (this.con.JSONarrS.length == 0) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control2();
                    this.control.idx = 1;
                    this.control.id = this.id;
                    this.control.value = this.value;
                    this.control.pholder = this.pholder;
                    this.control.css = this.css;
                    this.con.addControlS(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrS);
                    for (var i = 0; i < this.con.JSONarrS.length; i++) {
                        alert(this.con.JSONarrS[i].idx++);
                        this.con.JSONarrS[i].idx = this.con.JSONarrS[i].idx++;

                    }
                    console.log("after", this.con.JSONarrS);
                    this.control = new Control2();
                    this.control.idx = 1;
                    this.control.id = this.id;
                    this.control.value = this.value;
                    this.control.pholder = this.pholder;
                    this.control.css = this.css;
                    this.con.insertAtS(0, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarrS);
                console.log(this.showTextBox);
            }
            else {
                if (this.con.JSONarrS.length == idx) {
                    //this.Textboxes.push(this.json1);

                    this.control = new Control2();
                    this.control.idx = idx + 1;
                    this.control.id = this.con.JSONarrS[idx - 1].id;
                    this.control.value = this.con.JSONarrS[idx - 1].value;
                    this.control.pholder = this.con.JSONarrS[idx - 1].pholder;
                    this.control.css = this.con.JSONarrS[idx - 1].css;
                    this.con.addControlS(this.control);
                }
                else {
                    console.log("bfore", this.con.JSONarrS);
                    for (var j = idx - 1; j < this.con.JSONarrS.length; j++) {
                        alert(this.con.JSONarrS[j].idx++);
                        this.con.JSONarrS[j].idx = this.con.JSONarrS[j].idx++;
                    }
                    //this.con.JSONarr[j].idx = this.con.JSONarr.length;
                    console.log("after", this.con.JSONarrS);
                    this.control = new Control2();
                    this.control.idx = idx;
                    this.control.id = this.con.JSONarrS[idx - 1].id;
                    this.control.value = this.con.JSONarrS[idx - 1].value;
                    this.control.pholder = this.con.JSONarrS[idx - 1].pholder;
                    this.control.css = this.con.JSONarrS[idx - 1].css;
                    this.con.insertAtS(idx - 1, this.control);
                }
                this.showTextBox = true;
                console.log(this.con.JSONarrS);
                console.log(this.showTextBox);
            }
        }
    }


    delElement(idx, inp_flag) {
        if (inp_flag == undefined) {
            delete this.Textboxes[idx - 1];
            this.Textboxes.length = this.Textboxes.length - 1;
            this.showTextBox_tb = true;
        }

    }

}