function megjelenites(tipus) {
    var kep = document.getElementById("peldakep");
    var fent = document.getElementById("body");
    var nemLehet = document.getElementById("nemLehet");
    var pdfuzenet = document.getElementById("pdfuzenet");

    pdfuzenet.style.display = "none";
    nemLehet.style.display = "none";
    fent.scrollIntoView({ behavior: 'smooth' });

    if (tipus == "bmp") {
        kep.style.display = "block";
        kep.style.backgroundImage = "url('src/bmp.bmp')"
    } else if (tipus == "jpg") {
        kep.style.display = "block";
        kep.style.backgroundImage = "url('src/jpg.jpeg')"
    } else if (tipus == "gif") {
        kep.style.display = "block";
        kep.style.backgroundImage = "url('src/gif.gif')"
    } else if (tipus == "png") {
        kep.style.display = "block";
        kep.style.backgroundImage = "url('src/png.png')"
    } else if (tipus == "wmf") {
        kep.style.display = "none";
        nemLehet.style.display = "unset";
    } else if (tipus == "pdf") {
        var pdfuzenet = document.getElementById("pdfuzenet");
        pdfuzenet.style.display = "unset";
        kep.style.display = "none";
    }
}

function nyomtat() {
    print('src/pdf.pdf')
}