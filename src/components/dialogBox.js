import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { AppContext } from '../context/AppContext';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function CustomizedDialogs() {
    let { height, weight, gender, age } = React.useContext(AppContext);
    const [text, setText] = React.useState('');
    const [open, setOpen] = React.useState(false);
    let bmi = (weight / height ** 2) * 10000;
    const handleClickOpen = () => {
        setOpen(true);
        bmi < 18.5 ? setText(`Your gender is ${gender} and your age is ${age}, 
        According to Our Calculaion your BMI is ${Math.floor(bmi)} which is less than 18.5, 
        it falls within the underweight range.`) : bmi <= 18.5 || bmi < 24.9 ? setText(`Your gender is ${gender} and your age
         is ${age}, According to Our Calculaion your BMI is ${Math.floor(bmi)}, which is b/w 18.5 to 24.9, it falls within the Healthy weight 
         range.`) : bmi <= 24.9 || bmi < 29.9 ? setText(`Your gender is ${gender} and your age is ${age}, According to Our Calculaion your BMI is ${Math.floor(bmi)}, which is b/w 24.9 to 29.9, 
         it falls within the Over weight range.`) : setText(`Your gender is ${gender} and your age is ${age}, According to Our Calculaion your BMI is ${Math.floor(bmi)}, which is b/w 30.0 or higher, it falls within the obese range.`)
    }
    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };

    return (
        <div>
            <button className='dialog-btn' onClick={handleClickOpen}>
                Start
            </button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Your BMI
                </DialogTitle>

                <DialogContent dividers>
                    <Typography gutterBottom>
                        {text}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Back
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
export default CustomizedDialogs;