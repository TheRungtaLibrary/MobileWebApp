import styled from 'styled-components';
import Box from '@mui/material/Box';

export const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    background: ${({ theme }) => theme.palette.tertiary.light};
    color: ${({ theme }) => theme.palette.background.light};
    box-shadow: 5px 0px 5px ${({ theme }) => theme.palette.background.light};
`

