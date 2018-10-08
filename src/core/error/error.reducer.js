export function error(state = {}, action) {
  // only match core actions
  const matches = /^(core\/[^/]*\/.*)_(REQUEST|FAIL)$/.exec(action.type);
  if (!matches) {
    return state;
  }

  // full result, saved group 1, saved group 2
  const [, requestName, requestState] = matches;
  let info;
  if (requestState === 'FAIL') {
    info = {error: action.payload, timestamp: new Date()};
  }
  return {
    ...state,
    [requestName]: info
  }
}