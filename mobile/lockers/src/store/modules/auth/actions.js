export function signUpRequest(email, password, displayName) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { email, password, displayName },
  };
}

export function signUpSuccess(id, user) {
  return {
    type: "@auth/SIGN_UP_SUCCESS",
    payload: { id, user },
  };
}

export function signUpFailure() {
  return {
    type: "@auth/SIGN_UP_FAILURE",
  };
}

export function signInRequest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password },
  };
}

export function signInSuccess(id, user) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { id, user },
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_IN_FAILURE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
