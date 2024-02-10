namespace HobbiesForJuan.wwwroot.js
{
    public class calculator
    {
        $(document).ready(function() {
            $("#calculate").click(function () {
                // Get the values from input fields
                var value1 = $("#hours").val();
                var value2 = 50;

                // Convert values to numbers and perform multiplication
                var result = parseFloat(value1) * parseFloat(value2);

                // Set the result in the result input field
                $("#result").val(result);
            });
        });
    }
}
