import React, { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import { ImageCard, Props as ImageCardProps } from './index';
import { size200 } from '../constants';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Given <ImageCard />', () => {
    let defaultProps: ImageCardProps;
    let component: HTMLElement;
    let Page: FunctionComponent<any>;

    beforeAll(() => {
        defaultProps = {
            uri: '',
            idx: 1,
            onClickHandler: () => { },
        };
    })

    beforeEach(() => {
        Page = (): JSX.Element => (
            <ThemeProvider theme={theme}>
                <ImageCard {...defaultProps} />
            </ThemeProvider>
        );

        const { container } = render(<Page />);

        component = container;
    })

    describe('When it initializes', () => {
        it('matches snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    it('renders image of thumbnail size', () => {
        const image = screen.getByRole('img') as HTMLImageElement;
        expect(image.src).toContain(size200.toString());
    });
});
