export interface ISignInPayload {
    login: string;
    password: string;
}

export interface IGenerateTokenPayload {
    id: string;
    login: string;
}