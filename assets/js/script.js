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

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (blockHour == currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
};
// save button functionality and localstorage save
$(".saveButton").on("click", function () {
    const userInput = $(this).siblings(".inputField").val();
    const timeID = $(this).siblings(".inputField").attr("id");

    localStorage.setItem(timeID, userInput);
})
// function calls

getSavedInput();
colorCodeBlocks();