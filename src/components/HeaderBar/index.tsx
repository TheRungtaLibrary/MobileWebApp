import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
    StyledAppBar,
    Logo
} from './styles';

const HeaderBar = (): JSX.Element => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <Toolbar variant="dense">
                    <Box sx={{ flexGrow: 16 }} >
                        <Logo>Car Photos</Logo>
                    </Box>
                </Toolbar>
            </StyledAppBar>
        </Box >
    );
}

export default HeaderBar;
