var countClic = 0;

$("#my_button").click(function() {
    countClic = (countClic + 1) % 10;
    $("#count").text(countClic);
});