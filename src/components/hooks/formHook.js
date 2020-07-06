import React, { useState } from 'react';

const useForm = (callback) => {
    const [item, setItem ] = useState({});

    const handleSubmit = event => {
         event.preventDefault();
         event.target.reset();
        callback(item);
        // console.log("_submit_ values: ", items);
    }

    const handleChange = event => {
        event.persist(); 
        // console.log("values : ",items)
        setItem(({ ...item, [event.target.name]: event.target.value }));
       
    //    console.log('__change__values: ', items);
    }




    return [handleSubmit, handleChange, item];
}

export default useForm;