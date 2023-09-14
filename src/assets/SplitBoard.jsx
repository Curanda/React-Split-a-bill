import React, {useRef, useState} from "react"
import Select from "react-select";

function SplitBoard({ friends, friendID, onSetFriend, onSetSplit }) {
    const friend = friends.find(obj => obj.id === friendID)
    const billRef = useRef(0)
    const youRef = useRef(0)
    const [friendExpense, setFriendE] = useState(0)
    const [calcBalance, setBalance] = useState(0)
    const [whoPays, setWhoPays] = useState(1)
    const options = [
        {value: 1, label: "You"},
        {value: 2, label: `${friend.name}`}
    ]

    function handleInput() {
        const bill = +billRef.current.value
        const you = +youRef.current.value
        setFriendE(bill-you);
    }

    function handleSelect(e) {
        setWhoPays(Number(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault();

        onSetFriend(prev =>{
            return prev.map(friend => {
                if (friend.id === friendID) {
                    const updatedBalance = whoPays === 1 ? (friend.balance + friendExpense) : (friend.balance - friendExpense);
                    return { ...friend, balance: updatedBalance };
                }
                return friend;
            });
        });
        billRef.current.value = 0
        youRef.current.value = 0
        setFriendE(0)
        onSetSplit(false)
    }


    return (
        <div className={'form'}>
            <form className={'form-split-bill'} style={{marginTop: '2rem'}} onSubmit={handleSubmit}>
                <h2>split a bill with {friend.name}</h2>
                <p>🤑 Bill value</p>
                <input type={'number'} ref={billRef}/>
                <p>💪 Your expense</p>
                <input type={'number'} ref={youRef} onChange={handleInput}/>
                <p>😇 {`${friend.name}`}'s expense</p>
                <input readOnly style={{backgroundColor: 'lightyellow'}} value={friendExpense}/>
                <p>🤩 Who is paying the bill</p>
                <select onChange={handleSelect}>
                    <option value={1}>You</option>
                    <option value={2}>{friend.name}</option>
                </select>
                {/*<Select options={options} value={(e)=>e.target.value} onChange={handleSelect}/>*/}
                <button type={'submit'} className={'button'}>Split bill</button>
            </form>
        </div>
    )
}

export default SplitBoard
