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

    // gets the hours of the current time
    function curTimeHour() {
        var currentHour = new Date().getHours();
        console.log(currentHour);
        return(currentHour);
    };
    switch (curTimeHour()) {
        case 9:
            console.log("It's 9.");
            break;
        case 10: 
            console.log("It's 10.");
    };

    

    // sets time for time block

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

