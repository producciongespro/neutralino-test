import jsPDF from 'jspdf';

export default function PdfDownloader() {

    const usuario = {
        id: "12541478",
        nombre: "Pepito Torres"
    };


    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text(`ID: ${usuario.id}`, 10, 10);
        doc.text(`Nombre: ${usuario.nombre}`, 10, 20);

        doc.save('usuario.pdf');
    };

    return (
        <button onClick={generatePDF}>Generar PDF</button>
    )
    
};
