import { DefaultPipe } from "../pipes/default.pipe";

describe('Default Pipe', () => {
    let pipe: DefaultPipe;
        const placeholderUrl = 'http://mysite.com/placeholder.svg';
    beforeEach(() => {
        pipe = new DefaultPipe();
    });

    it('providing no value returns fallback', ()=> {
        expect(pipe.transform('', placeholderUrl)).toEqual(placeholderUrl);
    });

});
