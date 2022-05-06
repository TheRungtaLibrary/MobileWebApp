import React, { FunctionComponent } from 'react';
import { render } from '@testing-library/react';
import HeaderBar from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Given <HeaderBar />', () => {

    let component: HTMLElement;
    let Page: FunctionComponent<any>;

    beforeEach(() => {
        Page = (): JSX.Element => (
            <ThemeProvider theme={theme}>
                <HeaderBar />
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
});
