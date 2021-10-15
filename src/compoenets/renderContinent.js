import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAPIData } from '../redux/continent/continent';

const CovidDataRender = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAPIData());
  }, []);
  return <></>;
};

export default CovidDataRender;
