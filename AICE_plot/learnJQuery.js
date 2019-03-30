

$(selector).action()

$(this).hide() //hides the current element.

$("p").hide() //hides all <p> elements.


//当button发出click动作时，隐藏所有的<p>
$("button").click(function(){
    $("p").hide();
    $(this).hide(); //隐藏他本人
}

//当鼠标进入时
$("#p1").mouseenter(function(){
    alert("You entered p1!");
  });

//一次性多个
$("p").on({
mouseenter: function(){
    $(this).css("background-color", "lightgray");
}, 
mouseleave: function(){
    $(this).css("background-color", "lightblue");
}, 
click: function(){
    $(this).css("background-color", "yellow");
} 
});

$('.name')

$(this).prev().attr('value');

$(this).html(value);


slider.each