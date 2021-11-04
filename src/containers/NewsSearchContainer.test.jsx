import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewsSearchContainer';


describe('displays articles', () => {
    it('should show articles related to LSD', async ()=> {

        render(<NewsSearchContainer />);
        screen.getByText('Loading...')}
    )});


