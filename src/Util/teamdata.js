export const teamdata = (info) => {
  //Data needed for TeamScores component
  let obj = {};

  //teamscores - given in a {home: 2, away: 1} format
  obj.teamScores = info.match.liveData.matchDetails.scores.total;

  //teams names - given in a {name:germany, position:home} format
  obj.teamNames = {
    [info.match.contestant[0].position]: info.match.contestant[0].name,

    [info.match.contestant[1].position]: info.match.contestant[1].name,
  };

  //competition details - given as a string
  obj.competitionDetails = info.match.meta.competition.name;

  return obj;
};
