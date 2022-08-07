// returns an obj with the following keys: ontargetScoringAtt,  possessionPercentage, totalScoringAtt, totalYellowCard, wonCorners,

export const stats = (info) => {
  let home = {};
  let away = {};

  let homeStats = info.match.liveData.lineups.home.stats;

  for (let i = 0; i < homeStats.length; i++) {
    let homeStatsModified = { ...homeStats[i] };
    delete homeStatsModified.type;
    home[homeStats[i].type] = homeStatsModified;
  }

  let awayStats = info.match.liveData.lineups.away.stats;

  //repeated code can be refactored
  
  for (let i = 0; i < awayStats.length; i++) {
    let awayStatsModified = { ...awayStats[i] };
    delete awayStatsModified.type;
    away[awayStats[i].type] = awayStatsModified;
  }

  return { awayStats: away, homeStats: home };
};
