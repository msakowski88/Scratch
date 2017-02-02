var buttz = document.getElementById('buttz');
var buttzandstuff = document.getElementById('buttz2'); 

var colorChange = function() {
    if (buttz.className === 'header-red') {
        buttz.className = 'header-blue';
    } else {
        buttz.className = 'header-red';
    }

    if (buttzandstuff.className === 'header-blue') {
        buttzandstuff.className = 'header-red';
    } else if (buttzandstuff.className === 'header-red') {
        buttzandstuff.className = 'header-green';
    } else {
        buttzandstuff.className = 'header-blue';
    }
}