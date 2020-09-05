var click_tag = document.getElementById('changeDep')
var res_date = document.getElementsByClassName('DepChange')
var ct_date = res_date.length
var res_date_text = document.getElementsByClassName('DepChange_text')
var res_date_text_ts = document.getElementsByClassName('Dep_ts')
var ct_ts = res_date_text_ts.length


$(document).ready(function(){
    $('#changeDep').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date; i++){
                var y_1 = res_date[i];
                var y_2 = res_date_text_ts[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts; j++) {
                var y_3 = res_date_text_ts[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-c olor', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date; i++){
                var y_1 = res_date[i];
                var y_2 = res_date_text_ts[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts; j++) {
                var y_3 = res_date_text_ts[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});


var click_tag_SB = document.getElementById('springBreak')
var res_date_SB = document.getElementsByClassName('springBreakDate')
var ct_date_SB = res_date_SB.length
var res_date_text_SB = document.getElementsByClassName('springBreak_text')
var res_date_text_ts_SB = document.getElementsByClassName('springBreak_ts')
var ct_ts_SB = res_date_text_ts_SB.length


$(document).ready(function(){
    $('#springBreak').click(function(){
        if ($(this).css('background-color') === 'rgb(243, 58, 41)'){
            $(this).css('background-color') === 'rgb(243, 58, 41)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_SB; i++){
                var y_1 = res_date_SB[i];
                var y_2 = res_date_text_ts_SB[i];
                 $(y_1).attr('fill', 'rgb(243, 58, 41)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_SB; j++) {
                var y_3 = res_date_text_ts_SB[j];
                $(y_3).attr('dy','40');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(243, 58, 41)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_SB; i++){
                var y_1 = res_date_SB[i];
                var y_2 = res_date_text_ts_SB[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_SB; j++) {
                var y_3 = res_date_text_ts_SB[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_mid = document.getElementById('midterm')
var res_date_mid = document.getElementsByClassName('midtermDate')
var ct_date_mid = res_date_mid.length
var res_date_text_mid = document.getElementsByClassName('midterm_text')
var res_date_text_ts_mid = document.getElementsByClassName('midterm_ts')
var ct_ts_mid = res_date_text_ts_mid.length


$(document).ready(function(){
    $('#midterm').click(function(){
        if ($(this).css('background-color') === 'rgb(41, 136, 243)'){
            $(this).css('background-color') === 'rgb(41, 136, 243)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_mid; i++){
                var y_1 = res_date_mid[i];
                var y_2 = res_date_text_ts_mid[i];
                 $(y_1).attr('fill', 'rgb(41, 136, 243)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_mid; j++) {
                var y_3 = res_date_text_ts_mid[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(41, 136, 243)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_mid; i++){
                var y_1 = res_date_mid[i];
                var y_2 = res_date_text_ts_mid[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_mid; j++) {
                var y_3 = res_date_text_ts_mid[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_quit = document.getElementById('quitCourse')
var res_date_quit = document.getElementsByClassName('quitCourseDate')
var ct_date_quit = res_date_quit.length
var res_date_text_quit = document.getElementsByClassName('quitCourse_text')
var res_date_text_ts_quit = document.getElementsByClassName('quitCourse_ts')
var ct_ts_quit = res_date_text_ts_quit.length


$(document).ready(function(){
    $('#quitCourse').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_quit; i++){
                var y_1 = res_date_quit[i];
                var y_2 = res_date_text_ts_quit[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_quit; j++) {
                var y_3 = res_date_text_ts_quit[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_quit; i++){
                var y_1 = res_date_quit[i];
                var y_2 = res_date_text_ts_quit[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_quit; j++) {
                var y_3 = res_date_text_ts_quit[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_pay = document.getElementById('payment')
var res_date_pay = document.getElementsByClassName('paymentDate')
var ct_date_pay = res_date_pay.length
var res_date_text_pay = document.getElementsByClassName('payment_text')
var res_date_text_ts_pay = document.getElementsByClassName('payment_ts')
var ct_ts_pay = res_date_text_ts_pay.length


$(document).ready(function(){
    $('#payment').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_pay; i++){
                var y_1 = res_date_pay[i];
                var y_2 = res_date_text_ts_pay[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_pay; j++) {
                var y_3 = res_date_text_ts_pay[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','105');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_pay; i++){
                var y_1 = res_date_pay[i];
                var y_2 = res_date_text_ts_pay[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_pay; j++) {
                var y_3 = res_date_text_ts_pay[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_graduate = document.getElementById('graduateCer')
var res_date_graduate = document.getElementsByClassName('graduateCerDate')
var ct_date_graduate = res_date_graduate.length
var res_date_text_graduate = document.getElementsByClassName('graduateCer_text')
var res_date_text_ts_graduate = document.getElementsByClassName('graduateCer_ts')
var ct_ts_graduate = res_date_text_ts_graduate.length


$(document).ready(function(){
    $('#graduateCer').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_graduate; i++){
                var y_1 = res_date_graduate[i];
                var y_2 = res_date_text_ts_graduate[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_graduate; j++) {
                var y_3 = res_date_text_ts_graduate[j];
                $(y_3).attr('dy','30');
                $(y_3).attr('x','50');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_graduate; i++){
                var y_1 = res_date_graduate[i];
                var y_2 = res_date_text_ts_graduate[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_graduate; j++) {
                var y_3 = res_date_text_ts_graduate[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_work = document.getElementById('work')
var res_date_work = document.getElementsByClassName('workDate')
var ct_date_work = res_date_work.length
var res_date_text_work = document.getElementsByClassName('work_text')
var res_date_text_ts_work = document.getElementsByClassName('work_ts')
var ct_ts_work = res_date_text_ts_work.length


$(document).ready(function(){
    $('#work').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_work; i++){
                var y_1 = res_date_work[i];
                var y_2 = res_date_text_ts_work[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_work; j++) {
                var y_3 = res_date_text_ts_work[j];
                $(y_3).attr('dy','30');
                $(y_3).attr('x','50');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_work; i++){
                var y_1 = res_date_work[i];
                var y_2 = res_date_text_ts_work[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_work; j++) {
                var y_3 = res_date_text_ts_work[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_fin = document.getElementById('final')
var res_date_fin = document.getElementsByClassName('finalDate')
var ct_date_fin = res_date_fin.length
var res_date_text_fin = document.getElementsByClassName('final_text')
var res_date_text_ts_fin = document.getElementsByClassName('final_ts')
var ct_ts_fin = res_date_text_ts_fin.length


$(document).ready(function(){
    $('#final').click(function(){
        if ($(this).css('background-color') === 'rgb(41, 136, 243)'){
            $(this).css('background-color') === 'rgb(41, 136, 243)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_fin; i++){
                var y_1 = res_date_fin[i];
                var y_2 = res_date_text_ts_fin[i];
                 $(y_1).attr('fill', 'rgb(41, 136, 243)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_fin; j++) {
                var y_3 = res_date_text_ts_fin[j];
                $(y_3).attr('dy','30');
                $(y_3).attr('x','50');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(41, 136, 243)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_fin; i++){
                var y_1 = res_date_fin[i];
                var y_2 = res_date_text_ts_fin[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_fin; j++) {
                var y_3 = res_date_text_ts_fin[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_dragon = document.getElementById('dragonBreak')
var res_date_dragon = document.getElementsByClassName('dragonBreakDate')
var ct_date_dragon = res_date_dragon.length
var res_date_text_dragon = document.getElementsByClassName('dragonBreak_text')
var res_date_text_ts_dragon = document.getElementsByClassName('dragonBreak_ts')
var ct_ts_dragon = res_date_text_ts_dragon.length


$(document).ready(function(){
    $('#dragonBreak').click(function(){
        if ($(this).css('background-color') === 'rgb(243, 58, 41)'){
            $(this).css('background-color') === 'rgb(243, 58, 41)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_dragon; i++){
                var y_1 = res_date_dragon[i];
                var y_2 = res_date_text_ts_dragon[i];
                 $(y_1).attr('fill', 'rgb(243, 58, 41)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_dragon; j++) {
                var y_3 = res_date_text_ts_dragon[j];
                $(y_3).attr('dy','30');
                $(y_3).attr('x','50');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(243, 58, 41)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_dragon; i++){
                var y_1 = res_date_dragon[i];
                var y_2 = res_date_text_ts_dragon[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_dragon; j++) {
                var y_3 = res_date_text_ts_dragon[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_thesis = document.getElementById('thesis')
var res_date_thesis = document.getElementsByClassName('thesisDate')
var ct_date_thesis = res_date_thesis.length
var res_date_text_thesis = document.getElementsByClassName('thesis_text')
var res_date_text_ts_thesis = document.getElementsByClassName('thesis_ts')
var ct_ts_thesis = res_date_text_ts_thesis.length


$(document).ready(function(){
    $('#thesis').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_thesis; i++){
                var y_1 = res_date_thesis[i];
                var y_2 = res_date_text_ts_thesis[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_thesis; j++) {
                var y_3 = res_date_text_ts_thesis[j];
                $(y_3).attr('dy','30');
                $(y_3).attr('x','50');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_thesis; i++){
                var y_1 = res_date_thesis[i];
                var y_2 = res_date_text_ts_thesis[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_thesis; j++) {
                var y_3 = res_date_text_ts_thesis[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_graduateQual1 = document.getElementById('graduateQualFirst')
var res_date_graduateQual1 = document.getElementsByClassName('graduateQualFirstDate')
var ct_date_graduateQual1 = res_date_graduateQual1.length
var res_date_text_graduateQual1 = document.getElementsByClassName('graduateQualFirst_text')
var res_date_text_ts_graduateQual1 = document.getElementsByClassName('graduateQualFirst_ts')
var ct_ts_graduateQual1 = res_date_text_ts_graduateQual1.length


$(document).ready(function(){
    $('#graduateQualFirst').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_graduateQual1; i++){
                var y_1 = res_date_graduateQual1[i];
                var y_2 = res_date_text_ts_graduateQual1[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_graduateQual1; j++) {
                var y_3 = res_date_text_ts_graduateQual1[j];
                $(y_3).attr('dy','40');
                $(y_3).attr('x','105');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_graduateQual1; i++){
                var y_1 = res_date_graduateQual1[i];
                var y_2 = res_date_text_ts_graduateQual1[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_graduateQual1; j++) {
                var y_3 = res_date_text_ts_graduateQual1[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_graduateQual2 = document.getElementById('graduateQualLast')
var res_date_graduateQual2 = document.getElementsByClassName('graduateQualLastDate')
var ct_date_graduateQual2 = res_date_graduateQual2.length
var res_date_text_graduateQual2 = document.getElementsByClassName('graduateQualLast_text')
var res_date_text_ts_graduateQual2 = document.getElementsByClassName('graduateQualLast_ts')
var ct_ts_graduateQual2 = res_date_text_ts_graduateQual2.length


$(document).ready(function(){
    $('#graduateQualLast').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_graduateQual2; i++){
                var y_1 = res_date_graduateQual2[i];
                var y_2 = res_date_text_ts_graduateQual2[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_graduateQual2; j++) {
                var y_3 = res_date_text_ts_graduateQual2[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_graduateQual2; i++){
                var y_1 = res_date_graduateQual2[i];
                var y_2 = res_date_text_ts_graduateQual2[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_graduateQual2; j++) {
                var y_3 = res_date_text_ts_graduateQual2[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_summerCourse = document.getElementById('summerCourse')
var res_date_summerCourse = document.getElementsByClassName('summerCourseDate')
var ct_date_summerCourse = res_date_summerCourse.length
var res_date_text_summerCourse= document.getElementsByClassName('summerCourse_text')
var res_date_text_ts_summerCourse = document.getElementsByClassName('summerCourse_ts')
var ct_ts_summerCourse = res_date_text_ts_summerCourse.length


$(document).ready(function(){
    $('#summerCourse').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_summerCourse; i++){
                var y_1 = res_date_summerCourse[i];
                var y_2 = res_date_text_ts_summerCourse[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_summerCourse; j++) {
                var y_3 = res_date_text_ts_summerCourse[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_summerCourse; i++){
                var y_1 = res_date_summerCourse[i];
                var y_2 = res_date_text_ts_summerCourse[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_summerCourse; j++) {
                var y_3 = res_date_text_ts_summerCourse[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_summerVac = document.getElementById('summerVac')
var res_date_summerVac = document.getElementsByClassName('summerVacDate')
var ct_date_summerVac = res_date_summerVac.length
var res_date_text_summerVac= document.getElementsByClassName('summerVac_text')
var res_date_text_ts_summerVac = document.getElementsByClassName('summerVac_ts')
var ct_ts_summerVac = res_date_text_ts_summerVac.length


$(document).ready(function(){
    $('#summerVac').click(function(){
        if ($(this).css('background-color') === 'rgb(243, 58, 41)'){
            $(this).css('background-color') === 'rgb(243, 58, 41)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_summerVac; i++){
                var y_1 = res_date_summerVac[i];
                var y_2 = res_date_text_ts_summerVac[i];
                 $(y_1).attr('fill', 'rgb(243, 58, 41)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_summerVac; j++) {
                var y_3 = res_date_text_ts_summerVac[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(243, 58, 41)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_summerVac; i++){
                var y_1 = res_date_summerVac[i];
                var y_2 = res_date_text_ts_summerVac[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_summerVac; j++) {
                var y_3 = res_date_text_ts_summerVac[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});

var click_tag_semesterEnd = document.getElementById('semesterEnd')
var res_date_semesterEnd = document.getElementsByClassName('semesterEndDate')
var ct_date_semesterEnd = res_date_semesterEnd.length
var res_date_text_semesterEnd= document.getElementsByClassName('semesterEnd_text')
var res_date_text_ts_semesterEnd = document.getElementsByClassName('semesterEnd_ts')
var ct_ts_semesterEnd = res_date_text_ts_semesterEnd.length


$(document).ready(function(){
    $('#semesterEnd').click(function(){
        if ($(this).css('background-color') === 'rgb(245, 171, 45)'){
            $(this).css('background-color') === 'rgb(245, 171, 45)';
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('color','white');
            for (i = 0; i < ct_date_semesterEnd; i++){
                var y_1 = res_date_semesterEnd[i];
                var y_2 = res_date_text_ts_semesterEnd[i];
                 $(y_1).attr('fill', 'rgb(245, 171, 45)');
                 $(y_1).attr('stroke', '#1A1203');
                 $(y_2).attr('font-size','50');
                 $(y_2).attr('fill','#FFFFFF');
                 $(y_2).attr('stroke','#0E0900');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','1');

            };
            for (j = 0; j < ct_ts_semesterEnd; j++) {
                var y_3 = res_date_text_ts_semesterEnd[j];
                $(y_3).attr('dy','35');
                $(y_3).attr('x','110');
                }
        }
        else{
            $(this).css('background-color', 'rgba(107, 101, 91, 0.49)');
            $(this).css('background-color','rgb(245, 171, 45)');
            $(this).css('color','black');
            for (i = 0; i < ct_date_semesterEnd; i++){
                var y_1 = res_date_semesterEnd[i];
                var y_2 = res_date_text_ts_semesterEnd[i];
                 $(y_1).attr('fill', 'rgb(255, 255, 255)');
                 $(y_1).attr('stroke', 'rgb(105, 105, 105)');
                 $(y_2).attr('font-size','20.6388');
                 $(y_2).attr('fill','rgb(0, 0, 0)');
                 $(y_2).attr('stroke','rgb(0, 0, 0)');
                 $(y_2).attr('stroke-opacity','1');
                 $(y_2).attr('stroke-width','0');
            };
            for (j = 0; j < ct_ts_semesterEnd; j++) {
                var y_3 = res_date_text_ts_semesterEnd[j];
                $(y_3).attr('dy','6');
                $(y_3).attr('x','0');
                }
        }
    });
});