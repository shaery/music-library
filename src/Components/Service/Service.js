import React, { useEffect , useState} from 'react';
import Card from '../Card/Card';
import './Service.css';



const Service = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, []); 

    return (
        <div className="service-main">
            <h2 className="text-center service-heading">We hope you can enjoy our services</h2>

            {
                data.map(item => <Card key={item.id} data={item} />)
            }
        </div>
    );
};

export default Service;