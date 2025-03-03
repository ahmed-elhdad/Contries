"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const Control=() => {
  const divRef= useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick =  () => {
    if (inputRef.current) {
      inputRef.current?.focus()
      console.log(inputRef.current?.value);
      
    }
    
  }
    let btnRef=useRef("fdfd");
    useEffect(() => {
    },[])
      
    return(
      <div className="control d-flex space-between">
          <button onClick={handleClick()}>clickc</button>
          <div className="search d-flex">
            <FontAwesomeIcon icon={faSearch}/>
            <input ref={inputRef} type="search" placeholder='searsh for a country...'/>
          </div>
          <div className="dropdown">
            <button onClick={handleClick()} className='d-flex' type='button'>filter by regrion <FontAwesomeIcon icon={faCaretDown} /></button>
            <ul ref={divRef} className='ul-dropdown d-none dir-col'>
              <li><a href="#">africa</a></li>
              <li><a href="#">america</a></li>
              <li><a href="#">asia</a></li>
              <li><a href="#">europe</a></li>
              <li><a href="#">oceania</a></li>
            </ul>
          </div>
      </div>
    );
}
export default Control;