// using d3 for convenience
var main = d3.select('main')
var scrolly = main.select('#scrolly');
var figure = scrolly.select('figure'); //这里
var image = document.getElementById("scroll-image");
var article = scrolly.select('article');
var step = article.selectAll('.step'); //在里面要加一个中间才能选中吗

// initialize the scrollama
var scroller = scrollama();


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// generic window resize listener event
function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.5);
    step.style('width', stepH + 'px'); //step盒子的高度 0.75浏览器高度

    var figureHeight = window.innerHeight * 0.75;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2  

    figure
        .style('height', figureHeight + 'px') 
        .style('top', figureMarginTop + 'px'); //figure盒子的高度 0.5浏览器高度 margin 手动设一下

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    //console.log(response)
    // response = { element, direction, index }

    // add color to current step only
    step.classed('is-active', function (d, i) {
        return i === response.index;
    })
    //var $newLink = $( "<a href='BookController/delete/" + bookId + "'></a>" ),
    
    // update graphic based on step
    image.src=response.element.dataset.step;
 
}

function setupStickyfill() {
    d3.selectAll('.sticky').each(function () {
        Stickyfill.add(this);
    });
}

function init() {
    setupStickyfill();

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller.setup({
        step: '#scrolly article .step',
        offset: 0.33,
        //debug: true,
    })
        .onStepEnter(handleStepEnter)

    // setup resize event
    window.addEventListener('resize', handleResize);
}

// kick things off
init();