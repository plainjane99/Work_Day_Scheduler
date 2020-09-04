// Global Variables Go Here


// display current date
$('#currentDay').text(function() {
    var currentDate = moment().format('dddd, MMMM DD, YYYY');
    return currentDate.toString();
});

// save user input
// saves 6AM data
$('#sixAmButton').on("click", function() {
    var eventInput6Am = $("#sixAmEvent").val();

    function saveEvents() {
        localStorage.setItem("sixAm", JSON.stringify(eventInput6Am));
    }
    saveEvents(eventInput6Am);
})

// saves 7AM data
$('#sevenAmButton').on("click", function() {
    var eventInput7Am = $("#sevenAmEvent").val();

    function saveEvents() {
        localStorage.setItem("sevenAm", JSON.stringify(eventInput7Am));
    }
    saveEvents(eventInput7Am);
})

// audits the time
var auditTime = function() {

    // gets current time
    var today = new Date();
    var hour = today.getHours();
    console.log(hour);

    // sets time for time block
    var timeBlockArray = [];
    var numTimeBlocks = 12;
    for (var i = 0; i < numTimeBlocks; i++) {
        
        var timeBlockHour = i + 6;
        timeBlockArray.push(timeBlockHour);

        console.log(timeBlockArray);
    }



}

// load previous data from local storage
$().ready(function() {

    function loadEvents() {

        var getSixAm = JSON.parse(localStorage.getItem("sixAm"));
        var getSevenAm = JSON.parse(localStorage.getItem("sevenAm"));

        $("#sixAmEvent").val(getSixAm);
        $("#sevenAmEvent").val(getSevenAm);

    }

    loadEvents();
})

