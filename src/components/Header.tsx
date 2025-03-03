'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
function Header(){
    // let divRef = useRef<HTMLDivElement>(null);
    // function handleDarkMode() {
    //     divRef.current?.className = "d-none";
    // }
    return(
        <>
            <header className='header main d-flex space-between'>
                <h2>where in the world?</h2>
                <div className='d-flex'><FontAwesomeIcon icon={faMoon}/><span>dark mode</span></div>
            </header>
        </>
    );
}
export default Header;