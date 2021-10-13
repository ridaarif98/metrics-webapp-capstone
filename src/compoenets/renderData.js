import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAPIData } from '../redux/metrics/metrics';

const CovidDataRender = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAPIData());
  }, []);
  return <></>;
};

export default CovidDataRender;
