// WindowCloseHandler.jsx
import { useEffect } from 'react';
import Neutralino from '@neutralinojs/lib';

const WindowCloseHandler = () => {
    useEffect(() => {
        const handleWindowClose = () => {
            console.log("Cerrando aplicación");
            // Aquí puedes agregar cualquier otra lógica que desees ejecutar al cerrar la ventana
        };

        // Suscribirse al evento de cierre de ventana
        Neutralino.events.on("windowClose", handleWindowClose);

        // Desuscribirse del evento de cierre de ventana cuando el componente se desmonta
        return () => {
            Neutralino.events.off("windowClose", handleWindowClose);
        };
    }, []);

    return null; // Este componente no renderiza nada
};

export default WindowCloseHandler;
