export class User {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    isActive: boolean;
}

export class TokenInfo{
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
}