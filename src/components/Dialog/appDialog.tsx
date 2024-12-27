import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


// تعریف نوع پراپ برای کامپوننت
interface CustomizedDialogsProps {
    open: boolean;
    onClose: () => void;
    cardData: {
        name: string;
        description: string;
        image: string;
        download_link: string;
        lastUpdated: string;
    };
}
const Footer = styled(DialogActions)(({ theme }) => ({
    background: '#4CAF50',
    color: 'white',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#45A049',
    },


}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const ActionButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#4CAF50',
    color: 'white',
    '&:hover': {
        backgroundColor: '#45A049',
    },
}));

const CustomizedDialogs: React.FC<CustomizedDialogsProps> = ({ open, onClose, cardData }) => {
    return (
        <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {cardData.name} {/* نمایش عنوان کارت */}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {cardData.description} {/* نمایش توضیحات کارت */}
                </Typography>
                <img
                    src={cardData.image}
                    alt={cardData.name}
                    style={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'contain',
                        marginTop: '16px',
                    }}
                />
                <Typography variant="caption" display="block" sx={{ marginTop: 2 }}>
                    آخرین به‌روزرسانی: {cardData.lastUpdated} {/* نمایش تاریخ */}
                </Typography>
            </DialogContent>
            <Footer onClick={() => { window.open(cardData.download_link, '_blank', 'noopener,noreferrer') }} >
                <Typography

                    padding='4px'
                    variant="h6"
                    fontWeight="bold"
                >
                    دانلود
                </Typography>
            </Footer>
        </BootstrapDialog>
    );
};

export default CustomizedDialogs;
