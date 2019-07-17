// ES5
var teamScores = (function () {
    function Team(teamCaptain) {
        this.teamCaptain = teamCaptain;
    }
    Team.prototype.calcAvgScore = function () {
        var avgScores = Array.prototype.slice.call(arguments);
        var total = 0;
        avgScores.forEach(element => {
            total += element;
        });
        var avgScore = total / avgScores.length;
        this.isHighestScore(avgScore);
        return avgScore;
    }
    Team.prototype.isHighestScore = function (avgScore) {
        if (avgScore > highestScore) {
            highestScore = avgScore;
        }
    }
    var highestScore = 0;
    var mike = new Team('Mike');
    var john = new Team('John');
    var mary = new Team('Mary');
    var johnAvg = john.calcAvgScore(200, 120, 123);
    var mikeAvg = mike.calcAvgScore(116, 94, 123);
    var maryAvg = mary.calcAvgScore(300, 94, 123);

    switch (highestScore) {
        case johnAvg:
            console.log("John has the highest score");
            break;
        case mikeAvg:
            console.log("Mike has the highest score");
            break;
        case maryAvg:
            console.log("Mary has the highest score");
            break;
    }

})();