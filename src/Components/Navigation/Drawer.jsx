import {Drawer as Sidebar, Typography} from "@mui/material"
import React from 'react'

function Drawer() {
    function PersistentDrawerLeft() {
        // const theme = useTheme();
        const [open, setOpen] = React.useState(false);
      
        const handleDrawerOpen = () => {
          setOpen(true);
        };
      
        const handleDrawerClose = () => {
          setOpen(false);
        };      

  return (
    <Sidebar variant="persistent" anchor="right"
     open={open} sx={{width:240}}>
    <div>
        <Typography>
            Drawer
        </Typography>
    </div>
    </Sidebar>
    )
  }
}

export default Drawer