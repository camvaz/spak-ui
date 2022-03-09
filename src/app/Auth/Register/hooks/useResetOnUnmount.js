import { useEffect } from 'react';
import { useRegisterActions } from '../RegisterActions';

export default function useResetOnUnmount() {
    const { resetSlice } = useRegisterActions()

    useEffect(() => {
      return () => {
          resetSlice();
      }
    }, [resetSlice])
}