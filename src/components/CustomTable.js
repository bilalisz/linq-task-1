import * as React from 'react';
import { Avatar, Box, Typography } from "@mui/material";







const CustomTable=({users})=> {
  const style=useStyle()

  return (
    <Box component="div" >
     
      
      <Box component="div" sx={style.container}>
        <Box component="div" sx={style.colStyle}>
          <Box sx={style.tableCell} >App Code</Box>
          <Box sx={style.tableCell}>App Name</Box>
          <Box sx={style.tableCell}>Active</Box>
        </Box>

        {users? users.map((user) => (
          <Box key={user.appCode} component="div" sx={style.tableRow}>
            <Box
            sx={style.tableCell}
            
            >
              <Avatar>{user?.appCode ? user.appCode[0] : "A"}</Avatar>
              {user?.appCode}
            </Box>
            <Box sx={style.tableCell}>{user?.appName}</Box>
            <Box sx={style.tableCell}>{user?.active ? "1" : "0"}</Box>
          </Box>
        )):<Box>
          <Typography>No Data to Display</Typography>
          </Box>}
          </Box>
      </Box>

  );
}

export default CustomTable

const useStyle = () => {
  return {
    colStyle: {
      mx: 2,
      display: "flex",
      justifyContent: "space-between",
      gap: 2,
      borderBottom: "1px solid gray",
      px: 2,
      py: 4,
      textAlign: "center",
    },
    container: {  border: "1px solid gray", width: 700, minHeight: 400 },
    tableRow: {
      mx: 2,
      display: "flex",
      justifyContent: "space-between",
      gap: 2,
      borderBottom: "1px solid gray",
      px: 2,
      py: 3,
      textAlign: "center",
    },
    tableCell:{
      flexGrow:1,
      display:"flex",
      justifyContent:'center',
      alignItems:'center',
      gap:2

    }
  };
};