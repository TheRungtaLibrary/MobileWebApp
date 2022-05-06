import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const StyledAppBar = styled(AppBar)(({ theme }) =>
    `
    background: white;
    color: ${theme.palette.background.light};
    box-shadow: none;
    border-bottom: solid 1px ${theme.palette.border.main};
    height: 3rem;
    `
);

export const Logo = styled(Typography)`
    font-family: "DomaineDisplayNarrow", "Times New Roman", serif;
    margin-right: 1rem;
    white-space: nowrap;
    justify-content: center;
    font-size: 2rem;
`

