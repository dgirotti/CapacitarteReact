import React, { useEffect, useState } from 'react';

function Api() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://api.mercadolibre.com/items/MLA841413632')
            .then(response => {
                return response.json();
            })
            .then(res => {
                setData(res);
                setLoading(false);
            })

    }, [])

    useEffect(()=>{
        console.log(data);
    },[data])

    if (loading){
        return <div>Leyendo datos....</div>
    }
    return (
        <div className="nuevo">
            <h1>Producto de Mercado Libre </h1>
            <h2>{data.title}</h2>
            <img src ={data.secure_thumbnail} style={{width:"100px"}}></img> 
            <p>$ {data.price}</p>
            <p>Producto ID: {data.id}</p>
            <h2>{data.warranty}</h2>
            <h3>{data.seller_id}</h3>
            <a href={data.permalink}>Comprar Ahora</a>
        </div>
    )
}

export default Api;