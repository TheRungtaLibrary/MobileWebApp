import React from 'react';
import { StyledCardContainer, StyledCardTitle } from './styles';
import { createImageUrl } from '../../utils/utils';
import { size200 } from '../constants';
import Typography from '@mui/material/Typography';

export interface Props {
  uri: string;
  idx: number;
  onClickHandler: (uri: string) => void
}

export const ImageCard = ({ uri, idx, onClickHandler }: Props): JSX.Element => {
  const onClick = () => onClickHandler(uri);

  return (
    <StyledCardContainer
      data-testid='image-card'
      onClick={onClick}
    >
      <figure>
        <img src={createImageUrl(uri, size200)} alt="image" />
        <StyledCardTitle>
          <Typography variant='h3'>
            photo {++idx}
          </Typography>
        </StyledCardTitle>
      </figure>
    </StyledCardContainer>
  );
};

export default ImageCard;