import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark p-4">
            <h5 className="text-warning text-center">Music is just for your own peace</h5>
            <div className="d-flex justify-content-center m-4">
                <img
                    src="/facebook.svg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top mx-5"
                    alt="React Bootstrap logo"
                />
                <img
                    src="/instagram.svg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top mx-5"
                    alt="React Bootstrap logo"
                />
                <img
                    src="/linkedin.svg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top mx-5"
                    alt="React Bootstrap logo"
                />
            </div>
        </div>
    );
};

export default Footer;