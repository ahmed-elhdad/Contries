'use client';
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Item=() => {
    const [items, setItems] = useState<any[]>([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.log(err)
        )
        }
    )
    const sendID=(e: any)=>{
        console.log(e.target.id);
    } 
    return(
        <div className="items-container d-flex dir-row">
            {items.map((item, index) => (
                <Link  key={index} href="/item_info">
                    <div key={index} onClick={(e) => sendID(e)} id={index.toString()} className="item d-flex dir-col">
                        <img key={index} src={item.flags.png} alt="" />
                        <h2>{item.name.common}</h2>
                        <span>population: {item.population}</span>
                        <span>region: {item.region}</span>
                        <span>capital: {item.capital}</span>
                    </div>
                    
                </Link>
            ))}
        </div>
    );
}
export default Item;
