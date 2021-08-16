import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core"
import { useStyles } from "./Form.style"

export const Form = (props) => {
  const classes = useStyles();

    return (
        <div className={classes.root}>
        <FormControl variant="outlined">
            <InputLabel htmlFor="name">{props.t1}</InputLabel>
            <OutlinedInput 
            id="name"
            labelWidth={50}
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="cpf">{props.t2}</InputLabel>
            <OutlinedInput 
            id="cpf"
            labelWidth={50}
            />
          </FormControl>
          <FormControl variant="outlined">
          <InputLabel htmlFor="telefone">{props.t3}</InputLabel>
            <OutlinedInput 
            id="telefone"
            labelWidth={70}
            />
          </FormControl>
        </div>
    );
}