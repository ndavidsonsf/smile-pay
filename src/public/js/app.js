$(document).ready(function () {
  $('#scan').click(function () {
    $('.millie').addClass('scanning');
    setTimeout(function () {
     $('.millie').removeClass('scanning');
   }, 3 * 1000);
  });
  $('.cam').click(function () {
    take_snapshot()
    $('#myModal').modal()
  })
  Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });

  Webcam.attach( '#my_camera' );
});

function take_snapshot() {
    Webcam.snap( function(data_uri) {
        document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
    } );
}
