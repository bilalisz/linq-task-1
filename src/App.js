import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {  Box } from "@mui/material";
import { getUserData } from "./request/apis";
import CustomTable from "./components/CustomTable";

function App() {
  const [userData, setUserData] = useState({ users: [], count: 0 });
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const style = useStyle();

  useEffect(() => {
    setIsLoading(true);
    getUserData("/Applications")
      .then((res) => {
        setIsLoading(false);
        setUserData((old) => ({ ...old, count: res.count, users: res.data }));
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <Box component="main" sx={style.mainContainer}>
<CustomTable users={userData.users}/>
    </Box>
       
  );
}

export default App;


const useStyle=()=>{
  return {
    mainContainer:{
        display: "flex", justifyContent: "center",flexDirection:"column", alignItems:'center',mt:8
    }
  }
}