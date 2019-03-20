const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const obj = require('./gantt.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let dataArr = [];
  let objKeys = Object.keys(obj['types']);
  console.log("KEYS",objKeys);
  for(let i = 0 ; i < objKeys.length ; i++){
      // console.log(obj['data']['types'][objKeys[i]]["entities"]);
      dataArr.push({
        id: i,
        orderId: i,
        parentId: null,
        title: objKeys[i],
        summary: true,
        expanded: true,
        start: new Date(obj['types'][objKeys[i]]["timeline"][0]["startDate"]),
        end: new Date(obj['types'][objKeys[i]]["timeline"][0]["endDate"])
    })
    let innerOBJ = Object.keys(obj['types'][objKeys[i]]["entities"][0])
    console.log(i , innerOBJ)
    for(let j = 0 ; j < innerOBJ.length ; j++){
        dataArr.push(
            {
                id: j+1,
                orderId: j+1,
                parentId: 0,
                title: innerOBJ[j],
               //  percentComplete: 0.47,
                start: new Date(obj['types'][objKeys[i]]["entities"][0][innerOBJ[j]][0]["startDate"]),
                end: new Date(obj['types'][objKeys[i]]["entities"][0][innerOBJ[j]][0]["endDate"])
            }
        ) 
    }
    
  }
  res.send(JSON.stringify({ data: dataArr }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);