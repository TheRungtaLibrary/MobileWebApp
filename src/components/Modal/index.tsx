import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { createImageUrl } from '../../utils/utils';
import Typography from '@mui/material/Typography';
import { StyledBox } from './styles';
import { size640 } from '../constants';

interface Props {
    open: boolean;
    onClose: () => void;
    imagePath: string;
    title: string,
    description: string;
}

const ModalComponent = ({
    open,
    onClose,
    imagePath,
    title,
    description,
}: Props) => {
    return (
        <Modal
            aria-labelledby={title}
            aria-describedby={description}
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            data-testid="modal-container"
        >
            <Fade in={open}>
                <StyledBox>
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                    <img
                        data-testid='modal-image'
                        src={createImageUrl(imagePath, size640)}
                    />
                </StyledBox>
            </Fade>
        </Modal>
    );
}

export default ModalComponent;
