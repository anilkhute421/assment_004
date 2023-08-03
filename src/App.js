import React from 'react';
import InputComponent from './component/InputPut';
import ListComponent from './component/list';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <div>
       <Provider store={store}>
      <InputComponent />
      <ListComponent />
      </Provider>
    </div>
  );
};

export default App;
