import React,{ useState,useEffect} from "react";
import StudentTable from "./StudentTable";
import axios from "axios";


export default function StudentSearchBar() {
  const [student, setStudent] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getStudentUsers();
  }, []);

  const getStudentUsers = async () => {
    const response = await axios.get("http://localhost:5000/StudentUsers");
    console.log(response.data)
    setStudent(response.data);

  };
  const keys = [ "name", "email"];
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
    {<StudentTable data={Search(student)} />}
  </div>
);
}
