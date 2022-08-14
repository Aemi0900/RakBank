import {useState} from 'react';

export default () => {
  const [name, setName] = useState('Locate Us');
  return {name, setName};
};
