const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const USER_DETAILS = "USER_DETAILS";
const FILTERED_DATA = "FILTERED_DATA";

export interface UserDetails {
  id: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: { age: string };
  email: string;
  username :string
  login:{
    username :string
  }
  phone :string;
  location:{
    country:string;
  }
}

// Define initial state
const initialState: AuthState = {
  isLoggedIn: false,
  username: "",
  user: undefined,
  filteredData: [],
};

export const storeUserDetails = (user: UserDetails) => ({
  type: USER_DETAILS,
  payload: { user },
});

export const storeFilteredData = (filteredData: UserDetails[]) => ({
  type: FILTERED_DATA,
  payload: { filteredData },
});

export const loginSuccess = (username: string) => ({
  type: LOGIN,
  payload: { username },
});

export const logout = () => ({
  type: LOGOUT,
});

export interface AuthState {
  isLoggedIn: boolean;
  username: string;
  user?: UserDetails;
  filteredData: UserDetails[];
}

export type AuthAction =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof logout>
  | ReturnType<typeof storeUserDetails>
  | ReturnType<typeof storeFilteredData>;

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      if ("payload" in action && "username" in action.payload) {
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload.username,
        };
      }
      break;
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        user: undefined,
      };
    case USER_DETAILS:
      if ("payload" in action && "user" in action.payload) {
        return {
          ...state,
          user: action.payload.user,
        };
      }
      break;
    case FILTERED_DATA:
      if ("payload" in action && "filteredData" in action.payload) {
        return {
          ...state,
          filteredData: action.payload.filteredData,
        };
      }
      break;
    default:
      return state;
  }

  return state;
};

export default authReducer;
