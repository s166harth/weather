
import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  let [list1, setList1] = useState([])
  let [list2,setList2] = useState([])
  let [list3,setList3] = useState([])

  
  useEffect(() => {
    fetch("https://api.reliefweb.int/v1/reports?appname=apidoc&limit=10&query[value]=earthquake&preset=latest")
    .then(res=>res.json())
    .then(data=>console.log(data.data)&setList1(data.data))
  },[])
  useEffect(()=>{
    fetch("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$top=10")
    .then(res=>res.json())
    .then(data=>console.log(data.data)&setList2(data.DisasterDeclarationsSummaries))

  },[])
  useEffect(()=>{
    fetch("https://api.weather.gov/gridpoints/TOP/31,80/forecast")
    .then(res=>res.json())
    .then(data=>console.log(data.data)&setList3(data.properties.periods))

  },[])
  
console.log(list3);
  return (
    <div className='App'>


   
      <h1>Relief web api</h1>
      
      {list1.map(name => (<li>
          {name.fields.title} --- <a>{name.href}</a>
        </li>
        
      ))}
      <h1>FEMA api</h1>
      
      {list2.map(name => (<li>
          {name.title} --- {name.state} ---- {name.id}
        </li>
        
      ))}

<h1>NWS api(for grid 31,80)</h1>
      
      {list3.map(name => (<li>
          {name.name} --- {name.detailedForecast} 
        </li>
        
      ))}
      <script>list1.onchange = function(){alert("This is an Alert!")}</script>
</div> 
  
  );
}

export default App;
