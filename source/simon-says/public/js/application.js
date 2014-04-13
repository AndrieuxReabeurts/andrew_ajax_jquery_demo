$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    console.log('submit')

    $('#get_color').on('click', changeColor)

    var changeColor = $.ajax({
      type: 'POST',
      data: $(this),
      url: '/color',
      success: function(data){
        console.log(data)
        $("#color_me li:nth-child(" + data.cell + ")").css("background-color", data.color);
      },
      fail: function(){
        alert('fail')
      }
    });
  });
});