import React, { useState } from 'react';
import DownloadData from './components/DownloadData';

const App = () => {
    const [data, setData] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const fileContent = e.target.result;
                    const jsonData = JSON.parse(fileContent);
                    setData(jsonData);
                } catch (error) {
                    console.error('Error reading file:', error);
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <input type="file" accept=".json" onChange={handleFileChange} />
            {data && (
                <div>
                    {data.modulos.map((modulo) => (
                        <div key={modulo.id}>
                            <h2>{modulo.nombre}</h2>
                        </div>
                    ))}
                </div>
            )}
            <br />
            <DownloadData />
                    </div>
    );
};

export default App;
