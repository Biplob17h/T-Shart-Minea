import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet> 
        </div>
    );
};

export default Main;<h3>this is main</h3>