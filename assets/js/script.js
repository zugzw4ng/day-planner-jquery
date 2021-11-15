// Display Todays Date in the Header
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

// Initialize data from localstorage
function getSavedInput() {
    $(".inputField").each(function () {
        var inputValue = $(this).attr("id");
        $(this).val(localStorage.getItem(inputValue));
    }
    )
}
// Change hour block colors based on current time (using Moment)

// save button functionality and localstorage save

// function calls