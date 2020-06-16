import React from 'react';

const dataImportComponent = (props) => (
    <div className="m-3">
        <p>Press button and import last 30 days weather data to database</p>
        <button onClick={props.importData}>Import data </button>
    </div>
);

export default dataImportComponent;