import {useSelector} from 'react-redux';

export default () => {
  const userData = useSelector(state => state.login);


  return {userData};
};
