$(document).ready(function() {

});

/*
 *  ICONS FROM: https://iconmonstr.com/
 */

$("#name").hover(function() {
    $("#me").animate({
        opacity: '0.9',
    })
    $("#me").attr("src", "images/me.jpg");
})

$("#contact").hover(function() {
    /*
    $("#me").animate({
            opacity: '1',
        })
    */
    $("#me").attr("src", "images/me.jpg");
    $("#me").animate({
        opacity: '1',
    })


})
$("#education").hover(function() {
    $("#me").animate({
        opacity: '0.8',
    })
    $("#me").attr("src", "images/ucd_cs.jpg");
    $("#me").animate({
        opacity: '0.9',
    })
})

$("#experience").hover(function() {
    $("#me").animate({
        opacity: '0.8',
    })
    $("#me").attr("src", "images/intel.jpg");
    $("#me").animate({
        opacity: '0.9',
    })
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/*
 *  PIEPLOT SOURCE: https://canvasjs.com/docs/charts/chart-types/html5-pie-chart/
 */

window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: ""
        },
        legend: {
            maxWidth: 0,
            itemWidth: 0
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            dataPoints: [{
                    y: 40,
                    indexLabel: "Python"
                },
                { y: 20, indexLabel: "C++" },
                { y: 3, indexLabel: "C" },
                { y: 3, indexLabel: "Java" },
                { y: 2, indexLabel: "R" },
                { y: 2, indexLabel: "Matlab" },
                { y: 30, indexLabel: "HTML/CSS/JS" }
            ]
        }]
    });
    chart.render();
}