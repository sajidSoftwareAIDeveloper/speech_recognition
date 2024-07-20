export  function Button({clickHandle,name}){
    return <button className="bg-pink-300 m-1 p-1 rounded-xl active:bg-green-300 hover:bg-red-400" onClick={clickHandle}>{name}</button>
}

export  function Button1({name}){
    return <button className="bg-pink-300 m-1 p-1 rounded-xl active:bg-green-300 hover:bg-red-400">{name}</button>
}