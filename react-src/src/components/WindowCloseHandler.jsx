import { useEffect } from 'react';
import Neutralino from '@neutralinojs/lib';

const WindowCloseHandler = () => {
    useEffect(() => {
        const handleWindowClose = async () => {
            console.log("Cerrando app");
            await Neutralino.os.showMessageBox({
                title: "Cerrando aplicación",
                content: "Cerrando aplicación. Por favor espere.",
                type: "INFO",
                buttons: ["OK"]
            });
            Neutralino.app.exit();
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
