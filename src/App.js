import './App.css';
import { ThemeProvider } from 'styled-components';
import { vehicleDataReducer } from './store/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';
import { theme } from './theme/theme';
import Home from './pages/Home';

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(vehicleDataReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
