// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculate").click(function () {
        // Get the values from input fields
        var value1 = $("#hours").val();
        var value2 = 50;

        // Convert values to numbers and perform multiplication
        var result = parseFloat(value1) * parseFloat(value2);

        // Set the result in the result input field
        $("#res").val(result);
    });
});