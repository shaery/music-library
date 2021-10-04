import React from 'react';

const Card = (props) => {
    const {id,name,price,genre,img} = props.data;
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title text-bold">Service No: {id}</h4>
                            <p className="card-text">Name: {name}</p>
                            <p className="card-text">Price: ${price}</p>
                            <p className="card-text">Genre: {genre}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;