/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$("#menu-toggle").click(function(e) {
        e.preventDefault(); 
        $("#wrapper").toggleClass("toggled"); 
    });            


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var epoch_now = today.getTime();
    m = checkTime(m);
    s = checkTime(s);
    e = checkTime(epoch_now);
    document.getElementById('running_epoch').innerHTML = e;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return Math.round(i/1000);
}

