import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from '../counter/Counter';
import { MainPage } from '../MainPage';
import TasksPage from '../Tasks/pages/TasksPage';

export const MainApp = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />
        } />
      </Routes>

    </BrowserRouter>

  );
};
