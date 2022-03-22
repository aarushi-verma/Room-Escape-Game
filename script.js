
let bmusic = document.getElementById('back_music');
bmusic.play();



let pause_music = document.getElementById('sound_pause_btn');
pause_music.onclick  = function(){
    bmusic.pause();
}
let play_music = document.getElementById('sound_play_btn');
play_music.onclick  = function(){
    bmusic.play();
}



let selected_count = 0;

function light_1(){
    document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
    selected_paper = 0;
    document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";
    selected_2 = 0;
    document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";
    document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
    selected_mag_glass =0;
    document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";
    selected_4 = 0;
    document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";
    selected_5 = 0;
}

function light_2(){
    document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";
    selected_1 = 0;
    document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";
    selected_2 = 0;
    document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";
    selected_3 = 0;
    document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
    selected_mag_glass =0;
    document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";
    selected_4 = 0;
    document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";
    selected_5 = 0;
}

function light_3(){
    document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";
    selected_1 = 0;
    document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
    selected_paper= 0;
    document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";
    selected_3 = 0;
    document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
    selected_mag_glass =0;
    document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";
    selected_4 = 0;
    document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";
    selected_5 = 0;
}

function light_4(){
    document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";
    selected_1 = 0;
    document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
    selected_paper= 0;
    document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";
    selected_2 = 0;
    document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
    selected_mag_glass =0;
    document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";
    selected_4 = 0;
    document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";
    selected_5 = 0;
}

function light_5(){
    document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";
    selected_1 = 0;
    document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
    selected_paper= 0;
    document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";
    selected_2 = 0;
    document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";
    selected_3 = 0;
    document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";
    selected_4 = 0;
    document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";
    selected_5 = 0;
}

function light_6(){
    document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";
    selected_1 = 0;
    document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
    selected_paper= 0;
    document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";
    selected_2 = 0;
    document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";
    selected_3 = 0;
    document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
    selected_mag_glass =0;
    document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";
    selected_5 = 0;
}

function light_7(){
    document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";
    selected_1 = 0;
    document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
    selected_paper= 0;
    document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";
    selected_2 = 0;
    document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";
    selected_3 = 0;
    document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
    selected_mag_glass =0;
    document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";
    selected_4 = 0;
}

//**************HINT 1********** */

let cover = document.getElementById('hint_1_cover');
cover.onclick = function () {
    cover.style.opacity = 0;
}

//**************HINT 1 PUZZLE********** */
//BUTTON -1
let b1 = document.getElementById('hint_1_btn_1');
let a1 = ["red", "green", "blue", "yellow"];
let ind1 = 0;
b1.onclick = function () {
    document.getElementById('circle_1').style.backgroundColor = a1[ind1];
    ind1++;

    if (ind1 == 4) {
        ind1 = 0;
    }
}
//BUTTON -2
let b2 = document.getElementById('hint_1_btn_2');
let a2 = ["red", "green", "blue", "yellow"];
let ind2 = 0;
b2.onclick = function () {
    document.getElementById('circle_2').style.backgroundColor = a2[ind2];
    ind2++;
    if (ind2 == 4) {
        ind2 = 0;
    }
}
//BUTTON -3
let b3 = document.getElementById('hint_1_btn_3');
let a3 = ["red", "green", "blue", "yellow"];
let ind3 = 0;
b3.onclick = function () {
    document.getElementById('circle_3').style.backgroundColor = a3[ind3];
    ind3++;
    if (ind3 == 4) {
        ind3 = 0;
    }
}

//Submit Button
let out_text;

let sub_btn = document.getElementById('submit_btn');
let cir1 = document.getElementById('circle_1');
let cir2 = document.getElementById('circle_2');
let cir3 = document.getElementById('circle_3');
let count_token_1 = 0;
sub_btn.onclick = function () {
    if (cir1.style.backgroundColor == "red" && cir2.style.backgroundColor == "yellow" && cir3.style.backgroundColor == "green" && count_token_1 == 0) {
        diamond_1.style.opacity = 1;
        count_token_1 = 1;
    }
    let audio_btn = document.getElementById('btn_music');
    audio_btn.play();

}

//COLLECTING TOKEN 1
let token1 = document.getElementById('diamond_1');
let token1_count = 0;
token1.onclick = function () {
    if(token1_count==0 && count_token_1 ==1){
    document.getElementById('diamond_1').style.opacity = 0;
    document.getElementById('token_1').style.opacity = 1;
    token1_count = 1;
    }
}

//SELECTING TOKEN 1
let selected_1 = 0;
let select_circle_1 = document.getElementById('token_1');
select_circle_1.onclick = function () {
    if (select_circle_1.style.opacity == 1 && selected_1 == 0) {


        light_1();
        document.getElementById('store_box_sub_1').style.boxShadow = "0px 1px 10px 5px white";
        selected_1 = 1;
    }
    else if (select_circle_1.style.opacity == 1 && selected_1 == 1 ){
        document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";
        selected_1 = 0;
    }

}

//PLACING TOKEN 1,2,3,4,5 ON DOOR LOCK

let door_lock = document.getElementById('door_lock');
door_lock.onclick = function () {
    if (selected_1 == 1 && select_circle_1.style.opacity == 1) {
        document.getElementById('door_lock_circle_1').style.backgroundColor = "blue";
        select_circle_1.style.opacity = 0;
        document.getElementById('store_box_sub_1').style.boxShadow = "0px 0px 0px 0px white";

    }
    else if (selected_2 == 1 && select_circle_2.style.opacity == 1) {
        document.getElementById('door_lock_circle_2').style.backgroundColor = "blue";
        select_circle_2.style.opacity = 0;
        document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";

    }
    else if (selected_3 == 1 && select_circle_3.style.opacity == 1) {
        document.getElementById('door_lock_circle_3').style.backgroundColor = "blue";
        select_circle_3.style.opacity = 0;
        document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";

    }
    else if (selected_4 == 1 && select_circle_4.style.opacity == 1) {
        document.getElementById('door_lock_circle_4').style.backgroundColor = "blue";
        select_circle_4.style.opacity = 0;
        document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";

    }
    else if (selected_5 == 1 && select_circle_5.style.opacity == 1) {
        document.getElementById('door_lock_circle_5').style.backgroundColor = "blue";
        select_circle_5.style.opacity = 0;
        document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";

    }
}
//**************HINT 2********** */

let books = document.getElementById('hint_2');
let paper = document.getElementById('hint_2_paper');
let count_paper = 0;
books.onclick = function () {

    if (count_paper == 0) {
        paper.style.opacity = 1;
        count_paper = 1;
    }
}
let paper_count = 0;
paper.onclick = function () {
    if(paper_count ==0 && count_paper == 1){
    paper.style.opacity = 0;
    document.getElementById('paper').style.opacity = 1;
    paper_count = 1;
    }
}

//SELECTING PAPER FROM STORE BOX  
let selected_paper = 0;
let select_paper = document.getElementById('paper');
select_paper.onclick = function () {
    if (select_paper.style.opacity == 1 && selected_paper == 0) {
        light_2();
        document.getElementById('store_box_sub_2').style.boxShadow = "0px 1px 10px 5px white";
        selected_paper = 1;
    }
    else if(select_paper.style.opacity == 1 && selected_paper == 1){
        document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
        selected_paper = 0;
    }


}

//SETTING PAPER ON THE FIREPLACE

let fireplace = document.getElementById('paper_fireplace');
fireplace.onclick = function () {
    if (selected_paper == 1 && select_paper.style.opacity == 1) {
        select_paper.style.opacity = 0;
        fireplace.style.opacity = 1;
        fireplace.style.backgroundColor = "rgb(252, 223, 96)";
        fireplace.innerHTML = "2 6 1 9"

        fireplace.style.height = "50px";
        fireplace.style.width = "100px";
        document.getElementById('store_box_sub_2').style.boxShadow = "0px 0px 0px 0px white";
    }
}

//**************HINT 2 PUZZLE********** */

//FINDING THE TOKEN
let hint_2_btn = document.getElementById('hint_2_btn');
let count_token_2 = 0;
hint_2_btn.onclick = function () {
    let hint_2_input_1 = document.getElementById('hint_2_input_1').value;
    let hint_2_input_2 = document.getElementById('hint_2_input_2').value;
    let hint_2_input_3 = document.getElementById('hint_2_input_3').value;
    let hint_2_input_4 = document.getElementById('hint_2_input_4').value;
    if (hint_2_input_1 == '2' && hint_2_input_2 == '6' && hint_2_input_3 == '1' && hint_2_input_4 == '9' && count_token_2 == 0) {
        document.getElementById('diamond_2').style.opacity = 1;
        count_token_2 = 1;
    }
    let audio_btn = document.getElementById('btn_music');
    audio_btn.play();
}

//CLICKING THE TOKEN FOR STORING IN THE BOX

let token2 = document.getElementById('diamond_2');
let token2_count =0;
token2.onclick = function () {
    if(token2_count == 0 && count_token_2 == 1){
    token2.style.opacity = 0;
    document.getElementById('token_2').style.opacity = 1;
    token2_count =1;
    }
}





//SELECTING TOKEN 2
let selected_2 = 0;
let select_circle_2 = document.getElementById('token_2');
select_circle_2.onclick = function () {
    if (select_circle_2.style.opacity == 1 && selected_2 ==0) {
        light_3();
        document.getElementById('store_box_sub_3').style.boxShadow = "0px 1px 10px 5px white";
        selected_2 = 1;
    }
    else if (select_circle_2.style.opacity == 1 && selected_2 == 1 ){
        document.getElementById('store_box_sub_3').style.boxShadow = "0px 0px 0px 0px white";
        selected_2 = 0;
    }

}

//PLACING TOKEN 2 ON DOOR LOCK
//WRITTEN WITH PLACING TOKEN 1 ON DOOR LOCK


//**************HINT 3 PUZZLE********** */

let plant = document.getElementById('hint_3');
let count_token_3 = 0;
plant.onclick = function () {
    if (count_token_3 == 0) {
        document.getElementById('diamond_3').style.opacity = 1;
        count_token_3 = 1;
    }
}

//CLICKING THE TOKEN 3 FOR STORING IN THE BOX

let token3 = document.getElementById('diamond_3');
let token3_count = 0;
token3.onclick = function () {
    if(token3_count==0 && count_token_3 == 1){
    token3.style.opacity = 0;
    document.getElementById('token_3').style.opacity = 1;
    token3_count = 1;
    }
}

//SELECTING TOKEN 3
let selected_3 = 0;
let select_circle_3 = document.getElementById('token_3');
select_circle_3.onclick = function () {
    if (select_circle_3.style.opacity == 1 && selected_3 == 0) {
        light_4();
        document.getElementById('store_box_sub_4').style.boxShadow = "0px 1px 10px 5px white";
        selected_3 = 1;
    }
    else if (select_circle_3.style.opacity == 1 && selected_3 == 1 ){
        document.getElementById('store_box_sub_4').style.boxShadow = "0px 0px 0px 0px white";
        selected_3 = 0;
    }

}


//**************HINT 4 SWITCHING ON LAMP********** */

let lamp = document.getElementById('hint_4');
let light_on = 0;
lamp.onclick = function () {
    document.getElementById('light_area').style.opacity = 1;
    light_on = 1;
}

//**************STORING MAG GLASS IN STORE BOX********** */

let mag_glass = document.getElementById('mag_glass');
let mag_glass_count = 0;
mag_glass.onclick = function () {
    if(mag_glass_count ==0){
    document.getElementById('mag_glass_store_box').style.opacity = 1;
    mag_glass.style.backgroundColor = "rgb(241,236,236)";
    mag_glass_count = 1;
    }
}

//**************SELECTING MAG GLASS FROM STORE BOX********** */

let selected_mag_glass = 0;
let select_mag_glass = document.getElementById('mag_glass_store_box');
select_mag_glass.onclick = function () {
    if (select_mag_glass.style.opacity == 1 && selected_mag_glass == 0) {
        light_5();
        document.getElementById('store_box_sub_5').style.boxShadow = "0px 1px 10px 5px white";
        selected_mag_glass = 1;
    }
    else if(select_mag_glass.style.opacity == 1 && selected_mag_glass == 1){
        document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
        selected_mag_glass = 0;
    }
}

//**************PLACING MAG GLASS ON THE WALL********** */

let mag_wall = document.getElementById('mag_area');
mag_wall.onclick = function () {
    if (selected_mag_glass == 1 && light_on == 1) {
        document.getElementById('mag_area_mag_glass').style.opacity = 1;
        document.getElementById('mag_glass_store_box').style.opacity = 0;
        document.getElementById('store_box_sub_5').style.boxShadow = "0px 0px 0px 0px white";
        document.getElementById('light_area').innerHTML = "1932"
    }
}

let hint_4_btn = document.getElementById('hint_4_btn');
let count_token_4 = 0;
hint_4_btn.onclick = function () {
    let hint_4_input_1 = document.getElementById('hint_4_input_1').value;
    let hint_4_input_2 = document.getElementById('hint_4_input_2').value;
    let hint_4_input_3 = document.getElementById('hint_4_input_3').value;
    let hint_4_input_4 = document.getElementById('hint_4_input_4').value;
    if (hint_4_input_1 == '1' && hint_4_input_2 == '9' && hint_4_input_3 == '3' && hint_4_input_4 == '2' && count_token_4 == 0) {
        document.getElementById('diamond_4').style.opacity = 1;
        count_token_4 = 1;
    }
    let audio_btn = document.getElementById('btn_music');
    audio_btn.play();
}

//CLICKING THE TOKEN 4 FOR STORING IN THE BOX

let token4 = document.getElementById('diamond_4');
let token4_count = 0;
token4.onclick = function () {
    if(token4_count == 0 && count_token_4 == 1){
    token4.style.opacity = 0;
    document.getElementById('token_4').style.opacity = 1;
    token4_count = 1;
    }
}

//SELECTING TOKEN 4
let selected_4 = 0;
let select_circle_4 = document.getElementById('token_4');
select_circle_4.onclick = function () {
    if (select_circle_4.style.opacity == 1 && selected_4 == 0) {
        light_6();
        document.getElementById('store_box_sub_6').style.boxShadow = "0px 1px 10px 5px white";
        selected_4 = 1;
    }
    else if(select_circle_4.style.opacity == 1 && selected_4 == 1){
        document.getElementById('store_box_sub_6').style.boxShadow = "0px 0px 0px 0px white";
        selected_4 = 0;
    }

}


//**************HINT 5 PUZZLE********** */

//CLICKING THE TOKEN 5 FOR STORING IN THE BOX


let table = document.getElementById('hint_5');
let count_token_5 = 0;
table.onclick = function () {
    if (count_token_5 == 0) {
        document.getElementById('diamond_5').style.opacity = 1;
        count_token_5 = 1;
    }
}

let token5 = document.getElementById('diamond_5');
let token5_count =0;
token5.onclick = function () {
    if(token5_count ==0 && count_token_5 == 1){
    token5.style.opacity = 0;
    document.getElementById('token_5').style.opacity = 1;
    token5_count = 1;
    }
}

//SELECTING TOKEN 5
let selected_5 = 0;
let select_circle_5 = document.getElementById('token_5');
select_circle_5.onclick = function () {
    if (select_circle_5.style.opacity == 1 && selected_5 ==0) {
        light_7();
        document.getElementById('store_box_sub_7').style.boxShadow = "0px 1px 10px 5px white";
        selected_5 = 1;
    }
    else if(select_circle_5.style.opacity == 1 && selected_5 ==1){
        document.getElementById('store_box_sub_7').style.boxShadow = "0px 0px 0px 0px white";
        selected_5 = 0;
    }

}


//**************DOOR LOCK OPEN********** */

let door_lock_open_1 = document.getElementById('door_lock_open');
let door_btn = document.getElementById('door_lock_btn');
let d1 = document.getElementById('door_lock_circle_1');
let d2 = document.getElementById('door_lock_circle_2');
let d3 = document.getElementById('door_lock_circle_3');
let d4 = document.getElementById('door_lock_circle_4');
let d5 = document.getElementById('door_lock_circle_5');

door_btn.onclick = function(){
if (d1.style.backgroundColor == "blue" &&
    d2.style.backgroundColor == "blue" &&
    d3.style.backgroundColor == "blue" &&
    d4.style.backgroundColor == "blue" &&
    d5.style.backgroundColor == "blue") {
    door_lock_open_1.innerHTML = "ESCAPED";
    door_lock_open_1.style.opacity = 1;
}
let audio_btn = document.getElementById('btn_music');
    audio_btn.play();
}
