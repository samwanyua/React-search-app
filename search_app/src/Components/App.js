import Table from "./Table";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  
  return (
    <div className="App">
      <input type="text" className="search" placeholder='Search...' onChange={(e) => setQuery(e.target.value)}/>
     
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
