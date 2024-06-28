import React, { useEffect } from 'react';
import LoadJson from './components/LoadJson';
import DownloadData from './components/DownloadData';
import PdfDownloader from './components/PdfDownloader';
import WindowCloseHandler from './components/WindowCloseHandler';
import Neutralino from '@neutralinojs/lib';

const App = () => {
    useEffect(() => {
        setup()
    }, []);


    const setup = async ()=> {
        console.log("init");
        /*
        Neutralino.init({
            load: () => {
                console.log("Neutralino initialized");
            },
            error: (e) => {
                console.error("Neutralino initialization error:", e);
            }
        });
        */
        Neutralino.init();
        Neutralino.events.on('ready', () => {
            Neutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');
        });
        await Neutralino.window.maximize();
    }

    return (
        <>
            <LoadJson />
            <br />
            <DownloadData />
            <hr />
            <PdfDownloader />
            <WindowCloseHandler />
        </>
    );
};

export default App;