import React from 'react';
import { H1Date, PdfStyle } from './ReservationsInformation.style';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const Pdf = () => {
    return (
        <PdfStyle>
            <FileDownloadIcon/>
            <H1Date>تصدير Pdf</H1Date>
        </PdfStyle>
    );
}

export default Pdf;
