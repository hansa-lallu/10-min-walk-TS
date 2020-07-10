// import { Options } from '../src/Classes/Options/Options'; // this will be your custom import
import { expect } from 'chai';
import {validWalk } from '../src/tenMinWalk'

describe('validWalk', () => { 
    it('returns false if walk length is not equal to 10', () => { 
        let walk = ['w', 's']
        expect(validWalk(walk)).to.equal(false); 
    });
});

