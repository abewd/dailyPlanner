// Write code to display the current date in the header

var todayDate = dayjs().format("dddd,MM DD YYYY");
$("currentDay").html(todayDate);

// Wrap in code which delays trigger until the page has rendered
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // obtain nearby values
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");
  });
});
