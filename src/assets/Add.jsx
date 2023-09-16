import React, {useRef} from "react"

function Add({onSetPop, onSetFriend}) {
    const nameRef = useRef(null)
    const imageRef = useRef(null)
    function handleSubmit(e) {
        e.preventDefault()
        const name = nameRef.current.value
        const image = imageRef.current.value
        onSetFriend(prevFriends => [...prevFriends, {
            id: Date.now(),
            name: name,
            image: image,
            balance: 0,
            }]
        )
        nameRef.current.value = ''
        imageRef.current.value = ''
    }

    return (
        <form className={'form-add-friend'} style={{marginTop: '2rem'}} onSubmit={(e)=>handleSubmit(e)}>
            <p>👯  Friend's name</p>
            <input type={'text'} ref={nameRef}/>
            <p>📷  Image URL</p>
            <input type={'url'} ref={imageRef}/>
            <button type={'submit'} className={'button'}>Add</button>
            <button type={'button'} className={'button'} onClick={()=>onSetPop(prev=>!prev)}>Close</button>
        </form>
    )
}

// function handleAdd(event, prevFriends, name, image) {
//     event.preventDefault()
//     onSetFriend(prevFriends => [...prevFriends, {
//             id: Date.now(),
//             name: name,
//             image: image,
//             balance: 0,
//         }]
//     )
//     inputRef.current.value = ''
// }

export default Add
