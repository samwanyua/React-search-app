import Table from "./Table";
import { Users } from "./User";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const keys = ['first_name','last_name','email']

  // console.log(Users[0])

  const search = (data) => {
    return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query))
    
  )}
  return (
    <div className="App">
      <input type="text" className="search" placeholder='Search...' onChange={(e) => setQuery(e.target.value)}/>
      {/* <ul className="list">
        {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user) => (
          <li className="listItem" key={user.id}>{user.first_name}</li>
        ))}

      </ul> */}
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
