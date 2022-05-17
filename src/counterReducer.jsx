export function counterReducer(state, action) {
  switch (action.type) {
    case "Inc":
      return { counter: state.counter + action.payload };
    case "Dec":
      return { counter: state.counter - action.payload };
    case "Reset":
      return { counter: 0 };
    default:
      return { counter: state.counter };
  }
}
