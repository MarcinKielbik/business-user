import { UserPayload } from "../interfaces/user-payload";

export class LoadUsers {
    static readonly type = '[User] Load Users';
}

export class AddUser {
    static readonly type = '[User] Add User';
    constructor(public payload: UserPayload) {}
}