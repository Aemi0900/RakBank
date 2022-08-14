import {useState} from 'react';

export default () => {
  const [name, setName] = useState('Chat');
  return {name, setName};
};
