import { useCallback } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const usePDFExport = (refArray) => {
    const exportToPDF = useCallback(async () => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const canvases = await Promise.all(
            refArray.map(async (ref) => {
                const element = ref.current;
                if (!element) {
                    console.error(`Un des elements ref n'existe pas.`);
                    return null;
                }

                const scale = window.devicePixelRatio;
                const windowWidth = element.offsetWidth * scale;
                return await html2canvas(element, {
                    scale: scale,
                    useCORS: true,
                    logging: true,
                    width: windowWidth,
                });
            })
        );

        canvases.forEach((canvas, index) => {
            if (canvas) {
                const imgWidth = 210; 
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
                
                if (index < canvases.length - 1) {
                    pdf.addPage();
                }
            }
        });
        
        pdf.save('document.pdf');
    }, [refArray]);

    return exportToPDF;
};

export default usePDFExport;
