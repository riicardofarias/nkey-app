import React, { useEffect } from 'react';
import Routes from './routes';
import { toast, ToastContainer } from 'react-toastify';

import 'bulma/css/bulma.css';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const App = () => {
  const alert = useSelector(state => state.alert)

  useEffect(() => {
    const showToast = (alert) => {
      const { message } = alert;

      switch(alert.type){
        case 'success': 
          return toast.success(message)
        case 'error': 
          return toast.error(message)
        default: 
          return toast(message)
      }
    }

    if(alert.message)
      showToast(alert);
    }, [ alert ])

  return (
    <div className="App">
        <Routes/>
        <ToastContainer/>
    </div>
  );
}

export default App;
