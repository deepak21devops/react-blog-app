const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        iserror: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        iserror: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        iserror: true,
      };
    default:
      return state;
  }
};

export default Reducer;