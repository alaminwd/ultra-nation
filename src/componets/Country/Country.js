import React from 'react';

const Country = (props) => {
//    console.log(props);
    const flagStyle = {
        height:'60px',
    }
    const {name, common, population, flags} = props.country
    const addCountry = props.addCountry;
    return (
        <div>
            <deiv >
                {/* <h4>this country name is : {props.country.name.common}</h4> */}
                <h4>this country name is : {name.common}</h4>
                <img style={flagStyle} src={flags.png} alt={`${name.common} flag`} />
                <p>Population : {population} </p>
                <button onClick={() => addCountry(name.common)}>Add Country</button>

            </deiv>
            {/* <div style={{with:'10%'}}>
                <p>Population {props.country.population}</p>
            </div> */}
       
           
        </div>
    );
};

export default Country;