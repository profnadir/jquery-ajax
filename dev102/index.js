// document.getElementById('demo').innerText = 'hi dev102'

$(document).ready(function() {

    //$('.your-time-field').clockTimePicker(options);
    $('#from').clockTimePicker()
    $('#to ').clockTimePicker()

    // ici jquery
    $('#demo').text('hi dev102');

    $('#btn1').click(function(){
        //$('#demo').hide();
        $('#demo').slideUp(5000);
        $('#link').attr('href','https://www.ofppt.ma').attr('target','_blank');
        $('#link').addClass('ofppt-link');

    });

    $('#btn2').click(function(){
        //$('#demo').show();
        /* $('#demo').css('color','red');
        $('#demo').slideDown(5000);
        $('#demo').hide(); */

        $('#demo').css('color','red').slideDown(2000);

        $(this).hide();

    });

/*     $('#btn2').on('click',function(){
        //$('#demo').show();
         $('#demo').css('color','red');
        $('#demo').slideDown(5000);
        $('#demo').hide(); 

        $('#demo').css('color','red').slideDown(2000);

        $(this).hide();

    }); */

});

/* document.getElementById('btn1').addEventListener('click',hide);

function hide() {
    document.getElementById('demo').style.display = 'none'
} */

//document.getElementById('link').setAttribute('href','https://www.ofppt.ma');