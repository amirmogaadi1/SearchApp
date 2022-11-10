import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";

export default function ButtonAppBar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 5 }}>
            <AppBar position="static">
                <Toolbar>
                    <ArrowBackIcon onClick={(() => navigate('/search'))}/>
                    <h1 className="header">goodCarbon</h1>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
