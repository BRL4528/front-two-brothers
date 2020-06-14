import produce from 'immer';

const INITIAL_STATE = {
  url: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@file/SIGN_IN_SUCCESS': {
        draft.url = action.payload.url;
        break;
      }

      default:
    }
  });
}
