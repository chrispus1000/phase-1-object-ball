function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 5
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals:22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    }
}

const playersArray = Object.entries(players())

function homeTeamName() {
    return gameObject()['home']['teamName']
}

function getMaxEntries(array, entry) {
    return (array.map(item => item[1][entry])).reduce((a,b) => Math.max(a,b));
}
function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

function getTeam(teamNameInput) {
    if (teamNameInput === homeTeam().teamName){
        return homeTeam()
    } else if (teamNameInput === awayTeam().teamName) {
        return awayTeam()
    }
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function numPointsScored(playerName) {
    return players()[playerName].points
}

function shoeSize(playerName) {
    return players()[playerName].shoe
}

function teamColors(teamNameInput) {
    if (homeTeam().teamName === teamNameInput){
        return homeTeam().colors;
    }else {
        return awayTeam().colors
    }
}

function teamNames() {
    return [homeTeam().teamName, awayTeam().teamName]
}

function playerNumbers(teamName) {
    let team = getTeam(teamName)
    const teamArray = Object.values(team.players)
    return teamArray.map((elem) => elem.number)
}

function playerStats(playerName) {
    return players()[playerName]
}

function bigShoeRebounds() {
    const largestShoe = getMaxEntries(playersArray, "shoe")
    for (const [key, value] of playersArray) {
        if (value.shoe === largestShoe){
            return value.rebounds;
        }
    }
}

function maxPointsScored() {
    const maxPoints = getMaxEntries(playersArray, "points")
    for (const [key, value] of playersArray) {
        if (value.points === maxPoints){
            return key;
        }
    }
}

function getTeamPoints(fn) {
    return Object.values(fn.players).map(player => player.points)
}

function winningTeam() {
    const homeTeamPoints = getTeamPoints(homeTeam())
    const awayTeamPoints = getTeamPoints(awayTeam())
    const totalHome = homeTeamPoints.reduce((a,b) => a+b)
    const totalAway = awayTeamPoints.reduce((a,b) => a+b)
    if (totalAway > totalHome) {
        return awayTeam().teamName
    } else {
        return homeTeam().teamName
    }
}

function playerWithLongestName() {
    let names = Object.keys(players())
    let max = Math.max(...(names.map(el => el.length)))
    return names.filter(name => name.length === max)
}

function doesLongNameStealATon() {
    const maxsteals = getMaxEntries(playersArray, "steals")
    const longestNamePlayer = playerWithLongestName();
    return players()[longestNamePlayer].steals === maxsteals ? true : false
}

doesLongNameStealATon()


// winningTeam()
// playerWithLongestName()

// console.log(teamColors("Charlotte Hornets"));
// console.log(teamNames())
// playerNumbers("Charlotte Hornets")
// console.log(playerStats('DeSagna Diop'))
bigShoeRebounds();