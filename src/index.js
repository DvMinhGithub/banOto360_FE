import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import GlobalStyle from './components/globalStyle/globalStyle';
import './index.css';
import ProtectedComponent from './layout/protectedComponent/protectedComponent';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <ProtectedComponent>
                        <GlobalStyle>
                            <App />
                        </GlobalStyle>
                    </ProtectedComponent>
                </Router>
            </PersistGate>
        </Provider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
