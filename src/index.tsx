import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RecoilRoot} from 'recoil';
import {recoilPersist} from 'recoil-persist';
import CssBaseline from '@material-ui/core/CssBaseline';

const {RecoilPersist, updateState} = recoilPersist();

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot initializeState={updateState}>
            <RecoilPersist/>
            <CssBaseline/>
            <App/>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals((x) => console.log(JSON.stringify(x, null, 2)));
