import { useState, useEffect } from 'react';

const useDayTime = () => {
  const [dayTime, setDayTime] = useState('');

  useEffect(() => {
    const date = new Date();
    const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setDayTime(formattedDate);
  }, []);

  return dayTime;
};

export default useDayTime;