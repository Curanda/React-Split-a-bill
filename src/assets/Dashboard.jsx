import React, {useState} from "react"
import SplitBoard from "./SplitBoard.jsx";

function Dashboard({ friends, onSetFriend }) {
    const [splitOpen, setSplitO] = useState(false)
    const [friendID, setFriendID] = useState(null)

    return (
        <>
            <ul className={'sidebar'}>
                {friends.map((friend)=>{return <li key={friend.id}>
                    <img src={friend.image} alt={'friend photo'}/>
                    <h3>{friend.name}</h3>
                    <p>{friend.balance === 0 ? `You and ${friend.name} are even` : (friend.balance < 0 ? `You owe ${friend.name} ${friend.balance * -1} $` : `${friend.name} owes you ${friend.balance} $`)}</p>
                    <button className={'button'} onClick={()=> {
                        setSplitO(prev => !prev);
                        setFriendID(friend.id)
                    }}>Select</button>
                </li>})}
                {splitOpen && <SplitBoard friendID={friendID} friends={friends} onSetFriend={onSetFriend} onSetSplit={setSplitO}/>}
            </ul>
        </>
)
}

export default Dashboard
