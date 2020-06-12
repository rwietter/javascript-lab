import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<Tipo> = [Tipo, Dispatch<SetStateAction<Tipo>>]; // Create type on state theme, with params on App to usePersistedState hook

function usePersistedState<Tipo>(
  key: string,
  initialState: Tipo
): Response<Tipo> {
  const [state, setState] = useState(() => {
    const getThemeOnLocalStorage = localStorage.getItem(key);
    return getThemeOnLocalStorage
      ? JSON.parse(getThemeOnLocalStorage)
      : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
export default usePersistedState;
