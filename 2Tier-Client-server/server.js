let express = require("express");
let cors = require("cors");


let app = express();
app.use(cors());

app.get("/CSKTeamMembers",(req,res)=>{

  let players = ["Dhoni","Ruturaj","Jadeja","Devon Conway","Ajinkya Rahane","Shaik Rasheed","Sameer Rizvi","Shivam Dube","",]

  res.json(players);

});
  app.get("/kalkiActors",(req,res)=>{
   
    let actors = ["Prabhas","Kamal Hassan","Amitabh Bachan","Deepika Padukone","Dulquer Salman",];

    res.json(actors);

  });

app.listen(5678,()=>{
    console.log("Listening to part 5678");
});