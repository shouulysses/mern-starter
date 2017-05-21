import * as Actions from '../../client/actions/UserActions';

export function fetchIsAuthenticated(dispatch, request, passport) {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt-session', {session: false}, (err, user) => {
      if (user) {  
        dispatch(Actions.tokenValid());
      } else {
        dispatch(Actions.tokenInvalid());
      }
      resolve();
    })(request); 
  });
}