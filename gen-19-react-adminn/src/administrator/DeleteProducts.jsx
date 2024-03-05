import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

export default function DeleteProducts() {

    const params = useParams();

    const getData = (url) => axios.get(url).then((res) => res.data);
    const { data:products , isLoading} = useSWR(`http://localhost:3000/products/${params.id}`, getData);

    return (
        isLoading ? "Tunggu" : 
        <div> Delete Coffee 
            {
                products?.nama
            }
        </div>
    )
}
