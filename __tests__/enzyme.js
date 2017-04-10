import React from 'react';
import { mount } from 'enzyme';

import Counter from '../src/containers/Counter';
import store from '../src/store';

describe('Counter component',() => {
    it('should render without throwing an error', ()=>{
        expect(mount(<Counter store={store}/>).find('h1').length).toBe(1);
    });
    it('should be selectable by id "counter"', ()=>{
        expect(mount(<Counter store={store}/>).find('#counter').length).toBe(1);
    });
});