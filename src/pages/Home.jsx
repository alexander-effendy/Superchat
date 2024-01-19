import React from 'react';

import Login from "./Login";
import Register from "./Register";

import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.inside}>
        {/* inside home got sidebar and chat */}
        <Sidebar style={styles.sidebar}/>
        <Chat style={styles.chat}/>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#a7bcff',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inside: {
    border: '1px solid white',
    borderRadius: '10px',
    display: 'flex',
    width: '80%',
    height: '80%',
    overflow: 'hidden'
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#3e3c61',
  },
  chat: {
    flex: 2
  }
}

export default Home;