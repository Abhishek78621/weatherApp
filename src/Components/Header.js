function Header({setquery}) {
    const cities =[
      {
        title: "America",
        id: 1
      },
      {
        title: "Tokyo",
        id: 2
      },
      {
        title: "Shimla",
        id: 3
      },
      {
        title: "Nepal",
        id: 4
      },
      {
        title: "Paris",
        id: 5
      },
  
    ]
    return (
      <div className ="flex flex-row justify-around my-6">
    {cities.map((city)=>{
          return(
            <button key={city.id} onClick={()=>setquery({q:city.title})} className = "text-white text-lg text-md mx-4">{city.title}</button>
          )
        })}
      </div>
    );
  }
  export default Header;