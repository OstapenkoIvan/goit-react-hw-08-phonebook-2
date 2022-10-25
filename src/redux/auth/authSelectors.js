export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectLogIn = state => state.auth.isLoggedIn;
export const selectFetching = state => state.auth.isFetching;
