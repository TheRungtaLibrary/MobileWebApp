import React, { FunctionComponent } from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { ImageGallery, Props as ImageGalleryProps } from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { size640 } from '../constants';

describe('Given <ImageGallery />', () => {
  let defaultProps: ImageGalleryProps;
  let component: HTMLElement;
  let Page: FunctionComponent<any>;

  beforeAll(() => {
    defaultProps = {
      imageData: [
        {
          "uri": "img.classistatic.de/api/v1/mo-storytest/images/HqEAAOxyIPNTcg-F",
          "set": "fe4cfedffdffffffff",
        },
        {
          "uri": "img.classistatic.de/api/v1/mo-storytest/images/GpoAAOxyZzlTcg-F",
          "set": "fe4cfedffdffffffff",
        },
      ],
      title: 'title',
      desc: 'description text',
    };
  })

  beforeEach(() => {
    Page = (): JSX.Element => (
      <ThemeProvider theme={theme}>
        <ImageGallery {...defaultProps} />
      </ThemeProvider>
    );

    const { container } = render(<Page />);

    component = container;
  })

  describe('When it initializes', () => {
    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('renders as many cards as images', () => {
      const cards = screen.getAllByTestId('image-card');
      expect(cards.length).toEqual(defaultProps.imageData.length);
    });

    describe('when a card is clicked', () => {
      it('renders image modal', () => {
        const cards = screen.getAllByTestId('image-card');
        fireEvent.click(cards[0]);

        const modal = screen.getByTestId('modal-container');

        expect(modal).toBeInTheDocument();
      });

      it('renders image of size 640 inside modal', () => {
        const cards = screen.getAllByTestId('image-card');
        fireEvent.click(cards[0]);

        const modal = screen.getByTestId('modal-container');

        expect(modal).toBeInTheDocument();

        const image = screen.getByTestId('modal-image') as HTMLImageElement;
        expect(image.src).toContain(size640.toString());
      });
    });
  })
});
