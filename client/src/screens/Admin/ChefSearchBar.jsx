import React,{ useState,useEffect} from "react";
import ChefTable from "./ChefTable";
import axios from "axios";


export default function ChefSearchBar() {
  const [chefusers, setChef] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getChefUsers();
  }, []);

   const getChefUsers = async () => {
    const response = await axios.get("http://localhost:5000/ChefUsers");
    console.log(response.data)
    setChef(response.data);

  };
  const keys = ["cin", "name", "email"];
  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
return (
  <div >
      <input
        style={{padding:"5px",borderRadius:"15px",marginBottom:"5px",width:"300px"}}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<ChefTable data={Search(chefusers)} />}
  </div>
);
}
