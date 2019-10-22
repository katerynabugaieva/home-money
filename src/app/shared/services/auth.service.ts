export class AuthService {
    private isAuthencated = false;

    login() {
        this.isAuthencated = true;
    }
    logout() {
        this.isAuthencated = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        return this.isAuthencated;
    }
}