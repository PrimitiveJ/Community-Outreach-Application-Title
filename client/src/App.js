
// import native react modules
import React, { useState } from 'react';
import { ThemeSelectionProvider } from './providers/ThemeSelectionProvider';
import { Route, Routes } from 'react-router-dom';

// import page components
import {
  LandingPage,
  UserHomePage,
  EventPage,
  EventCreationPage,
  LandingPageIntro,
  TestPage
} from './pages';


function App() {
  return (
    <ThemeSelectionProvider>
      <Routes>
        <Route path="/" element={<LandingPageIntro/>}/>
        <Route path="/home" element={<EventPage/>}/>
        <Route path="/user-home" element={<UserHomePage/>}/>
        <Route path="/event/:id" element={<EventPage/>}/>
        <Route path="/dev" element={<TestPage/>}/>
      </Routes>
    </ThemeSelectionProvider>
  );
}

export default App;
