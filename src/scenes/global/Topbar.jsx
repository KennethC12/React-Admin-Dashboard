import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useNavigate, Route, Routes } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationslinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';


const Topbar = () => {
    const theme = useTheme(); 
    const colors = tokens(theme.palette.mode); //Anytime we want to access the colorMode in materialUI we can grab it from use theme and we can pass into tokens which is created in the themes.js
    const colorMode = useContext(ColorModeContext); //We are going to use this to allow us to access different states for the color mode
    const navigate = useNavigate();

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box 
                display ="flex" 
                backgroundColor = {colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx = {{ ml: 2, flex: 1}} placeholder = "Search" />
                <IconButton type = "button" sc = {{ p : 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */} 
            <Box display="flex"> 
                <IconButton onClick={colorMode.toggleColorMode}> 
                    {theme.palette.mode === 'dark' ?( 
                        < DarkModeOutlinedIcon />
                    ) : (
                        < LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    < NotificationslinedIcon />
                </IconButton>
                <IconButton>
                    < SettingsOutlinedIcon/>
                </IconButton>
                <IconButton >
                    < PersonOutlinedIcon />  
                </IconButton>
            </Box>
        </Box>// The <Box> allows us to write CSS components right into the code instead of going into the CSS file, also p = padding
    );
};

export default Topbar;