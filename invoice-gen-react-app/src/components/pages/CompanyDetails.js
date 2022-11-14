import React, { useState } from 'react'

const CompanyDetails = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyGSTIN, setCompanyGSTIN] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [companyPaymentQRCode, setCompanyPaymentQRCode] = useState('');


    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Company Details</h1>
                <p className="lead">
                    <div className="container">

                        <h6>Company Details</h6>
                        
                    </div>
                </p>
            </div>
        </div>
    );
}

export default CompanyDetails;