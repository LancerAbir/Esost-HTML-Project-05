$(document).ready(function(){
    // $(".text-one).click(function(){
    //     $(".core-value-one").slideToggle(400);
    // });
    // $(".click-two").click(function(){
    //     $(".show-two").slideToggle(400);
    // });
    // $(".click-three").click(function(){
    //     $(".show-three").slideToggle(400);
    // });
    // $(".box-click-one").click(function(){
    //     $(".box-show-one").slideToggle(400);
    // });
    // $('.text-one').click(function() {
    //     $('.core-value-default').toggle(800).addClass("flex");
    //     $('.core-value-one').hide();
    //     $('.core-value-two').hide();
    //     $('.core-value-three').hide();
    //     $('.core-value-four').hide();
    //     $('.core-value-five').hide();
    // });

    $('.text-one').click(function() {
        $('.core-value-one').toggle(800);
        $('.core-value-default').hide();
        $('.core-value-two').hide();
        $('.core-value-three').hide();
        $('.core-value-four').hide();
        $('.core-value-five').hide();
    });
    $('.text-two').click(function() {
        $('.core-value-two').toggle(800);
        $('.core-value-default').hide();
        $('.core-value-one').hide();
        $('.core-value-three').hide();
        $('.core-value-four').hide();
        $('.core-value-five').hide();
    });
    $('.text-three').click(function() {
        $('.core-value-three').toggle(800);
        $('.core-value-default').hide();
        $('.core-value-two').hide();
        $('.core-value-one').hide();
        $('.core-value-four').hide();
        $('.core-value-five').hide();
    });
    $('.text-four').click(function() {
        $('.core-value-four').toggle(800);
        $('.core-value-default').hide();
        $('.core-value-two').hide();
        $('.core-value-three').hide();
        $('.core-value-one').hide();
        $('.core-value-five').hide();
    });
    $('.text-five').click(function() {
        $('.core-value-five').toggle(800);
        $('.core-value-default').hide();
        $('.core-value-two').hide();
        $('.core-value-three').hide();
        $('.core-value-four').hide();
        $('.core-value-one').hide();
    }); 
});

