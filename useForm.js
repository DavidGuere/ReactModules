// This hook takes the values from an input and puts it in the "value" object.
// To use it:
// import the hook: import useForm from "./useForm"
// In the function, call the hook: const { HandleChange, value } = useForm();
// In the input, we have to set the value to match the key of our "value" object (object.key): value={value.key_name}
// In the input, we have to set the onChange property to: onChange={handleChange}

import { useState, useEffect } from "react";

function useForm() {
  // initializing keys with empty values. Key's names must match input name!
  const [value, setValue] = useState({
    searchBar: "",
    // key2:"",
    // key3:"",
  });

  // This will put the values in the "value" array
  function HandleChange(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return { HandleChange, value };
}

export default useForm;
