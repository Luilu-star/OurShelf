import KirbyPic from '../../assets/Kirby profile pic.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
library.add(fas,faMagnifyingGlass)



function Header(){

    const API = "https://www.googleapis.com/books/v1/volumes?q=";
    
    const [typed, setTyped] = useState<string>("");

    async function handleSearch(typed: string){
        
        const response = await fetch(API + typed + "&key=ablubleble&maxResults=3");
        const data = await response.json();
        console.log(data);
    }

    return(
        <>
            <div className='flex justify-between p-7'>
                <h1 className="font-bold text-[37px] text-[#9CD17F] font-[Recursive]">OurShelf</h1>
                <div className='flex items-center gap-7'>
                    <input value={typed} onChange={(e) => {setTyped(e.target.value); handleSearch(typed)}} type="text" name="pesquisa" id="pesquisa" placeholder='Pesquise pelo livro desejado...' className="bg-[#D5E6AB] indent-6.5 placeholder:text-[#3A3A3A] text-[#3A3A3A] h-13.5 w-119 rounded-[50px] focus:outline-none" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-35'/>
                    <img src={KirbyPic} className='rounded-[100%] w-15'></img>
                </div> 
            </div>
        </> 
    )
}

export default Header;