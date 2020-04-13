import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    console.log('[C] setLoading')
    try {
      const result = await promiseCreator();
      setResolved(result);
      console.log('[C] setResolved')
    } catch (e) {
      setError(e);
    }
    setLoading(false);
    console.log('[C] setLoading')
  };

  useEffect(() => {
    process();
  }, deps || []);
  console.log(loading,resolved, error )
  return [loading, resolved, error];
}