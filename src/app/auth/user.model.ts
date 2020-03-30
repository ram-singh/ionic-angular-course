export class User {
    constructor(public id: string,
                public email: string,
                private pToken: string,
                private tokenExpirationDate: Date) {}

    get token() {
        if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
            return null;
        }
        return this.pToken;
    }

    set token(value: string) {
        this.pToken = value;
    }
    get tokenDuration() {
        if (!this.token) {
            return 0;
        }
        return  this.tokenExpirationDate.getTime() - new Date().getTime();
    }
}
