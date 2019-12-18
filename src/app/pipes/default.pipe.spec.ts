import { DefaultPipe } from "../pipes/default.pipe";

fdescribe('Default Pipe', () => {
    let pipe: DefaultPipe;
        const placeholderUrl = 'http://mysite.com/placeholder.svg';
    beforeEach(() => {
        pipe = new DefaultPipe();
    });

    it('providing no value returns fallback', () => {
        expect(pipe.transform('', placeholderUrl)).toEqual(placeholderUrl);
    });

    it('converts to Http url on force', ()=> {
        expect(pipe.transform('', placeholderUrl, true)).toContain('https');
    });

});
