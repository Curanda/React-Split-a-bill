import React, { useState } from 'react'
import './App.css'
import initialFriends from "../public/initialFriends.jsx";
import Dashboard from "./assets/Dashboard.jsx";
import Add from "./assets/Add.jsx";
import SplitBoard from "./assets/SplitBoard.jsx";
function App() {
    const [friends, setFriend] = useState(initialFriends)
    const [popOpen, setPopOpen] = useState(false)


  return (
    <div className={''}>
        <Dashboard friends={friends} onSetFriend={setFriend}/>
        {popOpen ? <button className={'button'} onClick={()=>setPopOpen(prev=>!prev)}>Add</button> : <Add onSetPop={setPopOpen} onSetFriend={setFriend}/>}
    </div>
  )
}

export default App
