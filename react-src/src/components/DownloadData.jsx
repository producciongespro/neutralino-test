import React from 'react';
import Neutralino from '@neutralinojs/lib';

const DownloadData = () => {
    const usuario = {
        id: "12541478",
        nombre: "Pepito Torres"
    };

    const downloadJsonFile = () => {
        const jsonData = JSON.stringify(usuario, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const fileName = 'db.json';

        // Crear URL del blob
        const url = URL.createObjectURL(blob);

        // Crear un elemento <a> invisible para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();

        // Limpiar el elemento <a> y liberar el objeto URL
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <button onClick={downloadJsonFile}>Descargar db.json</button>
        </div>
    );
};

export default DownloadData;
