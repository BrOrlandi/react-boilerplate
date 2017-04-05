import React from 'react';
import { shallow } from 'enzyme';

import Counter from '../src/Counter';

describe('Counter component',() => {
    it('should render without throwing an error', ()=>{
        expect(shallow(<Counter />).find('h2').length).toBe(1);
    });
    it('should be selectable by class "counter"', ()=>{
        expect(shallow(<Counter />).find('.counter').length).toBe(1);
    });
});