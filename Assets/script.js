// Display the current date under the title
var todayDate = dayjs().format("dddd, MMM DD YYYY");
$("#currentDay").html(todayDate);

// Wrap the code in a delay so it renders this code after the
// page has completed loading
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage so it doesnt clear when you
    // refresh
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    // Retrieve current hour
    var timeNow = dayjs().hour();

    // Loop over the components and split the ID's
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      // Past present or future class to each time blocks
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // Code for any user to save in LS and set valus to ID's
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  timeTracker();
});
