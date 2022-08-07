import { teamdata } from "./teamdata";
import { stats } from "./stats";

//Function to return main body of data for use in components

export const fetchData = () => {
  return fetch(
    "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview"
  )
    .then((response) => response.json())
    .then((info) => {
      let data = { teamData: teamdata(info), stats: stats(info) };
      return data;
    }).catch((err)=>{
      console.log(err)
      //could make an error context to display on screen
    })
};

