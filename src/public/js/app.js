$(document).ready(function () {

  // $('.cam').on("click", function(){
  // 	$('.loader').toggle()	

  // })
  $('.cam').click(function () {
  	take_snapshot()
  	$('#myModal').modal();
  	$('#my_result').addClass('scanning');
  	//setting timeout for function
  	setTimeout(function (){
  	$('#my_result').removeClass('scanning');
    }, 4 * 1000);
    setTimeout(function(){
    	$(".icon--order-success").show().appendTo($("#my_result")).css({ "padding-top": "20px" })
    }, 5500)
    setTimeout(function(){
    	$(".icon--order-success").append("<p>Transaction Successful!</p>")
    })

  })
  Webcam.set({
  	width: 320,
  	height: 240,
  	image_format: 'jpeg',
  	jpeg_quality: 90
  });

  Webcam.attach('#my_camera');
 

});

function take_snapshot() {
	Webcam.snap( function(data_uri) {
		document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
	});
}
