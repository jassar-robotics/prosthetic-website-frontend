import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '@/apis/handleData.js';
export function useFetchData(resource) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetchData(`/${resource}/detail/${id}/`);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${resource}:`, error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [resource, id]);

  return { data, isLoading, isError };
}
