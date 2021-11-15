// Display Todays Date in the Header
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

// Initialize data from localstorage
function getSavedInput() {
    $(".inputField").each(function () {
        const inputValue = $(this).attr("id");
        $(this).val(localStorage.getItem(inputValue));
    }
    )
};
// Change hour block colors based on current time (using Moment)
function colorCodeBlocks() {
    $(".inputField").each(function () {
    const currentHour = moment().format("H")
    const blockHour = parseInt($(this).attr("id"))
}
// save button functionality and localstorage save

// function calls