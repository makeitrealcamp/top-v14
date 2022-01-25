import { useState } from "react";


export const useLocalStorage = (key, initialValue = null) => {

  const [storedValue, setStoredValue] = useState(() => {

    try {
      const element = window.localStorage.getItem(key)
      return element ? JSON.parse(element) : initialValue
    } catch (error) {
      return initialValue
    }
  });



  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return [storedValue, setValue];

};
