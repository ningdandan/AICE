//--------------------rangeSlider in JQ-------------------
var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
    console.log(value);
    
    slider.each(function(){
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
        console.log($(this).html(value));
      });
  
      range.on('input', function(){
        //$(this).next(value).html(this.value);
        console.log(this.value)
        //continuous = make_gaussian_func(this.value, .7);
        //chart_line();
      });
    });
  };
  //rangeSlider();


  function update_plot(){
    //var svg = d3.select("body").transition();
}

//画图1. 每次都clear再重画
function chart_line() {
    graph.select("path").remove();

    graph.append("svg:path")
     .attr("d", function(d) { 
            return d3.svg.line()(
                x.ticks(100).map(function(xi) {
                    return [ x(xi), y(continuous(xi)) ]
            })
            )}
          )
};
  

///slider
<div>
        <div class="range-slider">
            <p>this is mu</p>
            <input class="range-slider__range" type="range" id="mu" value="0" min="-5" max="5" step="1">
            <span class="range-slider__value mu">0</span>
        </div>

        <div class="range-slider">
            <p>this is sigma</p>
            <input class="range-slider__range" type="range" id="sigma" value="0" min="0" max="1" step="0.05">
            <span class="range-slider__value sigma">0</span>
        </div>
</div>