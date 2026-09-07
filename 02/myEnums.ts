const enum SeatChoice { //the "const" here changes the JavaScript code output
    AISLE = 10,
    MIDDLE, //this becomes 11
    WINDOW, //this becomes 12, and so on...
    FOURTH = "fourth" //this becomes "fourth", but the next number needs to be initialized manually
}

const aSeat = SeatChoice.MIDDLE //this is an error just because its also delcared in the JavaScript file 