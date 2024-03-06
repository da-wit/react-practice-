import { useContext, useReducer } from "react";
import {
  // useState,
  useEffect,
} from "react";
import { createContext } from "react";

const CitiesContext = createContext();

const InitailState = {
  isLoading: false,
  cities: [],
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "cities/loader":
      return { ...state, isLoading: false, cities: action.payload };
    case "loader":
      return { ...state, loading: true };
    case "selectedCity":
      return { ...state, currentCity: action.payload, isLoading: false };
    case "addNewCity":
      return {
        ...state,
        cities: [action.payload, ...state.cities],
        currentCity: action.payload,
        isLoading: false,
      };
    case "removeCity":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    default:
      throw new Error("not dispatched");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    InitailState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCIty] = useState({});

  // function onDelete(id) {
  //   setCities((cities) => cities.filter((item) => item.id !== id));
  // }
  // function onAdd(data) {
  //   setCities((cities) => [data, ...cities]);
  // }

  useEffect(function () {
    async function getCities() {
      dispatch({ type: "loader" });
      try {
        const res = await fetch("http://localhost:8000/cities");
        if (!res.ok) {
          throw new Error("Data not found");
        }
        const data = await res.json();

        dispatch({ type: "cities/loader", payload: data });
      } catch (err) {
        console.log(err.message);
      }
    }
    getCities();
  }, []);

  async function getCity(id) {
    if (Number(id) === currentCity.id) return;

    try {
      dispatch({ type: "loader" });
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      if (!res.ok) throw new Error("city not found");
      const data = await res.json();
      dispatch({ type: "selectedCity", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function deletCity(id) {
    try {
      dispatch({ type: "loader" });
      const res = await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error(`city not found ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      // setCities((cities) => cities.filter((city) => city.id !== id));

      dispatch({ type: "removeCity", payload: id });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function createCity(newCity) {
    try {
      dispatch({ type: "loader" });
      const post = await fetch("http://localhost:8000/cities", {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!post.ok) {
        throw new Error("unbale to create a new city");
      }
      const data = await post.json();
      // setCities([data, ...cities]);
      dispatch({ type: "addNewCity", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deletCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used out side the provider");
  return context;
}

export { CitiesProvider, useCities };
