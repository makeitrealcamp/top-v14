import { useEffect } from "react";
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

  // const [storedValue, setStoredValue] = useState(initialValue);

  // useEffect(() => {
  //   try {
  //     const element = window.localStorage.getItem(key)
  //     setStoredValue(element ? JSON.parse(element) : initialValue)
  //   } catch (error) {
  //     setStoredValue(initialValue)
  //   }

  // }, []);



  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // remove value

  return [storedValue, setValue];

};
