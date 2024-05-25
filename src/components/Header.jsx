
const Header =({handleToggleDarkMode}) =>{
    const header = 'FlashNote'
    const darkMode = 'Dark Mode'

    return (
       <div className='header'>
           <h1>{header}</h1>
           <button
               className='save'
               onClick={()=> handleToggleDarkMode(
                   (previousDarkMode)=>!previousDarkMode)}>
               {darkMode}
           </button>
       </div>
    )
}

export default Header