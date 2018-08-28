
$(document).ready(function () {
	jQuery('a[href="#sheldure"]').on('click', function (e) {
    e.preventDefault(); 
    modalShow();
	});
	function modalShow () {
		$('.overlay').fadeIn('slow');
		$('.modal').animate({
			height: 'toggle',
			opacity: 'toggle'
		}, 1000);
		$('#formx')[0].reset();
	}
	function modalHide () {
		$('.overlay').fadeOut('slow');
		$('.modal').animate({
			height: 'toggle',
			opacity: 'toggle'
		}, 1000);
		$('#formx')[0].reset();
	}
		
	$('.main_btn, .main_btna, a:eq(1)').on('click', function(){
		modalShow();
	});
	$('.close').on('click', function(){
		modalHide();
	});

	$('.back').on('click', function(){
		$('.thanks').fadeOut('slow');
		modalHide();
	});

	function call() {
 	  var msg  = $('#formx').serialize();
        $.ajax({
          type: 'POST',
          url: '../server.php',
          data: msg,
          success: function() {
            $('.thanks').fadeIn('slow');
            $('#formx')[0].reset();
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }    
    $('#formx').on('submit', function(){
    	call();
    })
})