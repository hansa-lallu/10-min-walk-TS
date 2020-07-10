// import { Options } from '../src/Classes/Options/Options'; // this will be your custom import
import { expect } from 'chai';
import {validWalk } from '../src/tenMinWalk'

describe('validWalk', () => { 
    it('returns false if walk length is not equal to 10', () => { 
        let walk = ['w', 's']
        expect(validWalk(walk)).to.equal(false); 
    });
    
    it('returns true if walk length is 10 and n equals s and e equals w', () => {
        let walk = ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']
        expect(validWalk(walk)).to.equal(true)
    })

    it('returns false if n does not equal s', () => {
       let walk = ['s', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']
       expect(validWalk(walk)).to.equal(false)
    });

    it('returns false if w does not equal e', () => {
        let walk = ['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']
        expect(validWalk(walk)).to.equal(false)
     });
});

