import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function DateAndTimePickers({ onSave }) {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Set Expiry"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        onChange={(newValue) => {
            onSave(newValue.target.value);
        }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
