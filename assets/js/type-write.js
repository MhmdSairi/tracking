// inisialisasi
var TxtWrite = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;

    // fungsi untuk menentukan lama tulisan tidak loop
    this.period = parseInt(period, 10) || 2000;
    // 

    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

// fungsi untuk mengatur tulisan
TxtWrite.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="TextWrite">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;
    
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

// fungsi untuk load tulisan ke website
window.onload = function() {
    var elements = document.getElementsByClassName('getwrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtWrite(elements[i], JSON.parse(toRotate), period);
        }
    }
};

