import { useReducer } from "react";
import { createContext, useContext } from "react";

const UserAuth = createContext();

const initialState = {
  user: {},
  isAuthenticated: false,
  error: false,
};

const FeakUser = {
  name: "dawit",
  email: "d@gmail.com",
  password: "1234",
  avater: "image",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.paylod,
        isAuthenticated: true,
        error: false,
      };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "error":
      return { ...state, error: true };
    default:
      throw new Error("Use not found");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FeakUser.email && password === FeakUser.password) {
      dispatch({ type: "login", paylod: FeakUser });
    } else {
      dispatch({ type: "error" });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <UserAuth.Provider value={{ isAuthenticated, user, login, error }}>
      {children}
    </UserAuth.Provider>
  );
}

function useAuth() {
  const context = useContext(UserAuth);
  if (context === undefined)
    throw new Error("UserAuth is used out side the contextProvider");
  return context;
}

export { AuthProvider, useAuth };
