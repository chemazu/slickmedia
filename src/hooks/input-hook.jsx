import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    change: {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      },
    },
  };
}
