import {useState} from 'react';

export default () => {
  const [name, setName] = useState('RakToken');
  return {name, setName};
};
