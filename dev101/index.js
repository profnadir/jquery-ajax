//document.getElementById('demo').innerText = 'hi dev101'
/* setAttribute('href','val') */

/* jQuery(document).ready(function(){
    jQuery('#demo').text('hi dev101')
}); */

$(document).ready(function(){

    $('#inp1').clockTimePicker();
    $('#inp2').clockTimePicker();
    //$('.your-time-field').clockTimePicker(options);

    // $('#demo').text('<i>hi dev101</i>')
    $('#demo').html('<i>hi dev101</i>');
    

    $('#btn1').click(function() {
        // $('#demo').hide();
        $('#demo').slideUp(2000);

        $("#link").attr('href','https://www.ofppt.ma').attr('title','ofppt');
        $("#link").addClass('link');


    })

    $('#btn2').click(function() {
        // $('#demo').show();
        
        /* $('#demo').css('color','red');
        $('#demo').slideDown(3000); */

        $('#demo').css('color','red').slideDown(3000);

        // $(this).hide();
    })

    $('#btn2').on('click',function() {
        // $('#demo').show();
        
        /* $('#demo').css('color','red');
        $('#demo').slideDown(3000); */

        $('#demo').css('color','red').slideDown(3000);

        // $(this).hide();
    })
});