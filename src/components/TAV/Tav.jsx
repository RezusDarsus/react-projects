import React from 'react';
import { useParams } from 'react-router-dom';

const Tav = () => {
    const { id } = useParams();
    return (
        <div>
            Rez{id}
        </div>
    );
}

export default Tav;
