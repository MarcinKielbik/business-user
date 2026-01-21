import { Injectable } from "@angular/core";
import { Action, Selector, StateContext } from "@ngxs/store";
import { AddUser, LoadUsers } from "./user.action";
import { UserPayload } from "../interfaces/user-payload";


export interface UserStateModel {
    user: UserPayload[];
}

@Injectable()
export class UserState {

    @Selector()
    static users(state: UserStateModel) {
        return state.user;
    }

    @Action(LoadUsers)
    loadUsers(ctx: StateContext<UserStateModel>) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        ctx.patchState({ user: users });
    }

    @Action(AddUser)
    addUser(ctx: StateContext<UserStateModel>, action: AddUser) {
        const state = ctx.getState();
        const updated = [...state.user, action.payload];

        localStorage.setItem('users', JSON.stringify(updated));
        ctx.patchState({ user: updated });
    }
}