import { useState } from "react";

export function useLoading () {
  const [ loadingState, setLoadingState ] = useState(false)
  return {
    loadingState,
    setLoadingState
  }
}