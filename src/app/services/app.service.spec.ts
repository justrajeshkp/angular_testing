import { AuthService } from "../services/app.service";
describe('AuthService', () => {
    let service: AuthService;
    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });

    it('must True if there is a token present in storage', () => {
        localStorage.setItem('token', 'jdcblwlelcbjwk')
        expect(service.isAuthenticated()).toBe(true);
    });

    it('must False if there is no token present in storage', () => {
        expect(service.isAuthenticated()).toBe(false);
    });

});
