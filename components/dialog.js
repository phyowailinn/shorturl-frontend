import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Picker from './picker';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import DialogActions from '@material-ui/core/DialogActions';

const FormDialog = ({open, close, data}) => {
  
  const [value,setValue] = useState();
  const [snapOpen,setSnapOpen] = useState(false);

  const onSubmit = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/url/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value, data }),
      });
      
      if (response?.status == 201) {
        close()
        setSnapOpen(true)
      }
      
    } catch (error) {
      console.log("Fetch error: ", error);
    }
  };

  return (
    <>
    <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Make specify expired date
          </DialogContentText>
          <Picker onSave={setValue} />
          <DialogActions>
            <Button onClick={close} color="primary">
              Cancel
            </Button>
            <Button onClick={onSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </DialogContent>
    </Dialog>

    <Snackbar
        open={snapOpen}
        autoHideDuration={6000}
        message="Your submitted is success!"
      />
    </>
  );
}

export default FormDialog;