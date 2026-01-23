import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UserPayload } from "../../interfaces/user-payload";
import { AddUser, LoadUsers } from "./users.actions";


export interface UserStateModel {
    user: UserPayload[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        user: []
    }
})



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

    addUser(ctx: StateContext<UserStateModel>, action: AddUser) {
        const state = ctx.getState();
        const updated = [...state.user, action.payload];

        localStorage.setItem('users', JSON.stringify(updated));
        ctx.patchState({ user: updated });
    }
}