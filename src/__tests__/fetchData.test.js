const fetchData = require("../Util/fetchData");
// import { fetchData } from ".././Util/fetchData";

describe("", () => {
  test("Should return an obj with two keys - teamScores and teamNames", () => {
    return fetchData().then((data) => {
      expect(data.hasOwnProperty("teamScores")).toBe(true);
      expect(data.hasOwnProperty("teamNames")).toBe(true);
    });
  });

  test("awayStats should contain the following keys & each of those keys should contain the following ", () => {
    return fetchData().then((data) => {
      let arr = [
        "ontargetScoringAtt",
        "possessionPercentage",
        "totalScoringAtt",
        "totalYellowCard",
        "wonCorners",
      ];
      let arr2 = ["fh", "sh", "value"];
      for (let i = 0; i < arr.length; i++) {
        expect(data.stats.awayStats.hasOwnProperty(arr[i])).toBe(true);
        for (let j = 0; j < arr2.length; j++) {
          expect(data.stats[arr[i]].hasOwnProperty(arr2[j]));
        }
      }
    });
  });

 
});
