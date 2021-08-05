import React from 'react';

const Home = () => {
    const personalDetails = [
        {
            name: 'Mamender Shaw',
            position: 'Front-End Developer',
            countryCode: '+91',
            Mobile1: '7045593618',
            Mobile2: '8626065289',
            Email: 'mamendershaw1418@gmail.com',
        }
    ]
    return (
        <div>
            {
                personalDetails.map((p, i) => {
                    //console.log(e);
                    return (
                        <div className="persanal-info" key={i}>
                            <h4>{p.name}</h4>
                            <p><a href={'tel:'+p.countryCode+p.Mobile1}>{p.Mobile1}</a>
                            /
                            
                            <a href="">{p.Mobile2}</a></p>
                        </div>
                    )

                })
            }
        </div>

    )
}

export default Home;