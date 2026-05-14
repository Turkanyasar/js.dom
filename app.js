"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        let a=$('input').val();
        let num=Number(a);

        if (a.trim() !=="" &&! isNaN(num)) {
            for (let i=0; i<num; i++) {
                $('.col-md-12').append(`<div class="todo-item">${num}</div>`);
            }
        }
        else if (a.trim() !=="") {
            $('.col-md-12').append(`<div class="todo-item">${a}</div>`);
        }
        $('input').val('');
    });
    });





