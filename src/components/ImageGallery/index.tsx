import React, { useState } from 'react';
import ImageCard from '../ImageCard';
import { StyledContainer, StyledHeader } from './styles';
import { Image } from '../../store/types';
import ModalComponent from '../Modal';
import Typography from '@mui/material/Typography';

export interface Props {
  imageData: Image[],
  title: string;
  desc: string;
}

export const ImageGallery = ({ imageData, title, desc }: Props): JSX.Element => {
  const [selectedImg, setSelectedImg] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const onClickThumbnail = (imgUri: string) => {
    setSelectedImg(imgUri);
    setShowModal(true);
  }

  const onCloseModal = () => setShowModal(false);

  return (
    <StyledContainer>
      <StyledHeader>
        <Typography variant='h2'>
          {title}
        </Typography>
      </StyledHeader>
      <div>
        {
          imageData && imageData?.map(({ uri }, index) =>
            <ImageCard
              key={index}
              uri={uri}
              idx={index}
              onClickHandler={onClickThumbnail}
            />
          )
        }
      </div>
      <ModalComponent
        open={showModal}
        onClose={onCloseModal}
        imagePath={selectedImg}
        title={title}
        description={desc}
      />
    </StyledContainer>
  );
};

export default ImageGallery;
