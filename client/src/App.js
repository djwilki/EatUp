import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pages from './pages/Pages'
import { setUser } from "./store/auth"
import { CssBaseline } from '@material-ui/core';



function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
        dispatch(setUser(res.data.user));
      }
      setLoading(false);
    }
    loadUser();
  }, [dispatch]);


  //change to only redirect if not logged in for certain pages
  if (loading) return null;

  return (
    <CssBaseline>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </CssBaseline>

  );
}

export default App;
