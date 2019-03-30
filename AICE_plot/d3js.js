var w = 380;
var h = 300;
var pad = 50;
var step = 300;
var xstart = -10;
var xend = 10;
var ystart = 0;
var yend = 2;

var mu = 0;
var sigma = 0;
var constant = 0.5;

var x = d3.scale.linear().domain([xstart, xend]).range([0,w]);
var y = d3.scale.linear().domain([ystart, yend]).range([h,0]);

var svg = d3.select(".graph-view")
    .append("svg:svg")
    .attr("height", h + pad)
    .attr("width",  w + pad)

var vis = svg.append("svg:g")
    .attr("transform", "translate(40,20)")

var graph = vis.append("svg:g")
    .classed("series", true)

var true_path = graph.append("svg:path")

var legend = d3.select("body").append("div")
    .classed("legend", true)



//-------------------Default Setting--------------
//
var continuous = make_gaussian_func(-1, .7);
//var continuous = simple_function(mu, sigma);
make_rules();
plot();
make_mouseover_guides();

//--------------------RangeSlider in D3-------------------
//when input change, reset f(x) and draw again
d3.select('#input-1')
        .on('input', function () {
            mu = Number(this.value)
            d3.select('.mu')
               .text(this.value);
            continuous = make_gaussian_func(mu, sigma);
            //continuous = simple_function(mu, sigma);
            plot();           
        });

d3.select('#input-2')
        .on('input', function () {
            sigma = Number(this.value)
            d3.select('.sigma')
               .text(this.value);
            continuous = make_gaussian_func(mu, sigma);
            //continuous = simple_function(mu, sigma);
            plot();
        });

d3.select('#check-box')
        .on('click', function () {
            if (this.checked){
            constant = Number(this.value)
            } else constant = 0.5
            
            continuous = make_gaussian_func(mu, sigma);
            //continuous = simple_function(mu, sigma);
            plot();
        });


//--------------------Below are the functions----------------------
//-----------------------------------------------------------------

function plot(){
    d3.select('path')
      .transition()
      .duration(200)
      .attr("d", function(d) { 
           return d3.svg.line()(
               x.ticks(step).map(function(xi) {
                   return [ x(xi), y(continuous(xi)) ]
           })
           )}
         )
}

//set f(x)
function make_gaussian_func(mu, sigma_squared) {
    var sqrt = Math.sqrt, pow = Math.pow, e = Math.E, pi = Math.PI;
    var sigma = sqrt(sigma_squared);
    var a = 1 / (sigma * sqrt(2 * pi));
    return (function(xi) {
        return pow( a * e, - pow(xi - mu, 2) / (2 * pow(sigma, 2)) ) + constant
      });
  }
  
  function simple_function(mu, sigma){
    return (function(xi) {
        return (mu + sigma +1) * xi
      }); 
  }
  
  
  //画网格的函数
  function make_rules() {
      var rules = vis.append("svg:g").classed("rules", true)
    
      function make_x_axis() {
        return d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(10)
      }
    
      function make_y_axis() {
        return d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10)
      }
    
      rules.append("svg:g").classed("grid x_grid", true)
          .attr("transform", "translate(0,"+h+")")
          .call(make_x_axis()
            .tickSize(-h,0,0)
            .tickFormat("")
          )
    
      rules.append("svg:g").classed("grid y_grid", true)
          .call(make_y_axis()
            .tickSize(-w,0,0)
            .tickFormat("")
          )
    
      rules.append("svg:g").classed("labels x_labels", true)
          .attr("transform", "translate(0,"+h+")")
          .call(make_x_axis()
            .tickSize(5)
            // .tickFormat(d3.time.format("%Y/%m"))
          )
    
      rules.append("svg:g").classed("labels y_labels", true)
          .call(make_y_axis()
            .tickSubdivide(1)
            .tickSize(10, 5, 0)
          )
    }
  
    //鼠标位置
  function make_mouseover_guides() {
      var guides = vis.append("svg:g")
              .classed("guides", true)
      var y_guides = guides.append("svg:g")
      guides.append("svg:line")
              .attr("y1",h)
      y_guides.append("svg:circle")
              .attr("r",7)
      y_guides.append("svg:line")
              .attr("x1",-20)
              .attr("x2",+20)
    
      vis.append("svg:rect")
          .classed("mouse_area", true)
          .attr("width",  w)
          .attr("height", h)
          .on("mousemove", update_legend_values)
          .on("mouseout",   blank_legend_values)
    
      blank_legend_values();
    
      var format_5f = d3.format(".5f");
    
      function update_legend_values() {
        var xi = x.invert(d3.svg.mouse(this)[0]);
    
        legend
            .text("x: "+format_5f(xi)+ " | y: "+format_5f(continuous(xi)));
    
        guides
            .attr("transform", "translate("+(x(xi))+",0)")
            .attr("visibility", "visible")
    
        y_guides
            .attr("transform", "translate(0,"+y(continuous(xi))+")")
      }
    
      function blank_legend_values() {
        legend
            .text("Mouse over the graph...")
    
        guides
            .attr("visibility", "hidden")
      }
    }




