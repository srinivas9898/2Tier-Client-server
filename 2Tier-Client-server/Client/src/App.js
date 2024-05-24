
import './App.css';

function App() {
  let [players,setPlayers] = useState([]);

  let getCSKPlayers = async()=>{
    let reqOptions = {
      method:"GET"
    }
    let JSONData = await fetch("http://localhost:5678/CSKTeamMembers",reqOptions);
    let JSOData = await JSONData.json();

    console.log(JSOData);
  };

  let getKalkiActors = async ()=>{

    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:5678/kalkiActors",reqOptions);

    let JSOData = await JSONData.json();
    console.log(JSOData);
  };
  return (
    <div className="App">
<div>
  <button onClick={()=>{

getCSKPlayers();
  }}>Get CSK Players</button>
  <button onClick={()=>{
    getKalkiActors();
  }
  }>Get Kalki Actros</button>
  {players.map((ele,i)=>{
    return <h2 key={i}>{ele}</h2>;
  })}
</div>
     </div>
  );
}

export default App;
