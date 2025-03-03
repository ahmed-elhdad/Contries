// "use client";
// import Item from "@/components/items";
// import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const InfoPage=()=>{
//     const [info, setInf]=useState([]);
//         useEffect(() => {
//             // fetch("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/refs/heads/master/PeriodicTableJSON.json")
//             // .then(response => response.json())
//             // .then(data => {
//             //     setInf(data);
//             //     for (let i = 0; i > DataTransfer.length; i++){
//             //         console.log(i);
                    
//             //     }

//             // })
//             // .catch(err => console.log(err)
//             // )
//             }
//         )
//         return(
//             <>
//                 <div className="container main">
//                     <Link href="page.tsx"><FontAwesomeIcon icon={faArrowLeftLong}/><button type="button">back</button></Link>
//                     {info.map((inf, index) => (
//                         <div key={index} className="item">
                            
//                         </div>
//                     ))} 
//                 </div>
//             </>
//         );


// } 
// export default InfoPage;
"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ItemInfo = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [item, setItem] = useState<any>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(data => {
                const selectedItem = data[parseInt(id as string)];
                setItem(selectedItem);
            })
            .catch(err => console.log(err));
        }
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div>
            <h1>{item.name.common}</h1>
            <img src={item.flags.png} alt="" />
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
        </div>
    );
};

export default ItemInfo;