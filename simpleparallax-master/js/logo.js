function nextCol() {
    colorsArrayIndex = colorsArrayIndex < colorsArray.length - 1 ? ++colorsArrayIndex : 0;
    colors = colorsArray[colorsArrayIndex];
    render();
}

function resetEls(els) {
    els.forEach(function (el, index) {
        el.style.opacity = '0';
        el.style.fill = 'transparent';
        el.style.stroke = 'transparent';
        el.style.strokeWidth = '0.5%';
        el.style.strokeLinecap = 'round';
        el.style.transition = 'opacity ease 1s, fill .5s linear';
    });
}

function lighten(color, luminosity) {
    color = new String(color).replace(/[^0-9a-f]/gi, '');
    if (color.length < 6) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    luminosity = luminosity || 0;
    var newColor = "#",
        c, i, black = 0,
        white = 255;
    for (i = 0; i < 3; i++) {
        c = parseInt(color.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
        newColor += ("00" + c).substr(c.length);
    }
    return newColor;
}

function tween(color1, color2, steps) {
    color1 = new String(color1).replace(/[^0-9a-f]/gi, '');
    color2 = new String(color2).replace(/[^0-9a-f]/gi, '');
    if (color1.length < 6) {
        color1 = color1[0] + color1[0] + color1[1] + color1[1] + color1[2] + color1[2];
    }
    if (color2.length < 6) {
        color2 = color2[0] + color2[0] + color2[1] + color2[1] + color2[2] + color2[2];
    }
    var tweenArray = [];
    var rStep = (parseInt(color1.substr(0, 2), 16) - parseInt(color2.substr(0, 2), 16)) / steps;
    var gStep = (parseInt(color1.substr(2, 2), 16) - parseInt(color2.substr(2, 2), 16)) / steps;
    var bStep = (parseInt(color1.substr(4, 2), 16) - parseInt(color2.substr(4, 2), 16)) / steps;
    for (var i = 0; i < steps; i++) {
        var r, g, b;
        switch (i) {
            case 0:
                r = parseInt(color1.substr(0, 2), 16);
                g = parseInt(color1.substr(2, 2), 16);
                b = parseInt(color1.substr(4, 2), 16);
                break;
            case steps - 1:
                r = parseInt(color2.substr(0, 2), 16);
                g = parseInt(color2.substr(2, 2), 16);
                b = parseInt(color2.substr(4, 2), 16);
                break;
            default:
                r = parseInt(color1.substr(0, 2), 16) - Math.floor(rStep * i);
                g = parseInt(color1.substr(2, 2), 16) - Math.floor(gStep * i);
                b = parseInt(color1.substr(4, 2), 16) - Math.floor(bStep * i);
        }
        var rr = r.toString(16);
        var bb = b.toString(16);
        var gg = g.toString(16);
        newColor = '#' + ("00" + rr).substr(rr.length) +
            ("00" + bb).substr(bb.length) +
            ("00" + gg).substr(gg.length);
        tweenArray.push(newColor);
    }
    return tweenArray;
}

var colors = [];
var colorsArray = [];
var colorsArrayIndex = 0;
colorsArray.push(['#FFFFFF', '#00FFFF', '#FF0000', '#00FF00', '#88FF88', '#FFFF00', '#FF00FF', '#8888FF', '#FFFF88', '#88FF88', '#FF88FF', '#88FF88', '#FFFF88', '#88FF88', '#88FF88', '#88FF88', '#88FF88', '#88FF88']);
colors = colorsArray[colorsArrayIndex];
colorSetBases = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
colorSetBases.forEach(function (baseColor, baseIndex) {
    var tempArray = [];
    for (var i = 0; i < colors.length; i++) {
        tempArray[i] = color = lighten(baseColor, (i * 0.04));
    }
    colorsArray.push(tempArray);
    var t = (baseIndex === colorSetBases.length - 1) ? 0 : baseIndex + 1;
    var tweenArray = tween(baseColor, colorSetBases[t], colors.length);
    colorsArray.push(tweenArray);
});


var cloneit = document.querySelector('#svglogo').cloneNode(true);
// cloneit.setAttribute('id', 'svglogo2');
// document.getElementsByTagName("section")[0].appendChild(cloneit);
// cloneit = document.querySelector('#svglogo').cloneNode(true);
// cloneit.setAttribute('id', 'svglogo3');
// document.getElementsByTagName("section")[0].appendChild(cloneit);
colors = colorsArray[8];

function renderLogo() {
    els = document.querySelectorAll('#svglogo path');
    resetEls(els);

    els.forEach(function (el, index) {
        setTimeout(function () {
            el.style.fill = 'transparent';
            el.style.stroke = colors[index];
            setTimeout(function () {
                el.style.fill = lighten(colors[index], -0.25);
            }, index * 50);
        }, index * 150);
    });

    els.forEach(function (el, index) {
        el.style.opacity = 1.0;
    });
}