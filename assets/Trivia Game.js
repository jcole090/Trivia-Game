    var counter = 0;
    function setup() {
    nocanvas();
    var timer = Selection("#timer");
    timer.html("0");


    function timeIt() {
    counter++
    timer.html(counter);

    }
     setInterval(timeIt, 1000);

    }


