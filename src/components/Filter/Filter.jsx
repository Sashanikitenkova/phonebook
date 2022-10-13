import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/slice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = () => {
    const dispatch = useDispatch();
    const onChangeFilter = e => {
        dispatch(filterContact(e.target.value));
    }

    return (
        <Box
        sx={{
            '& .MuiTextField-root': { my: 3, width: '500px'  },
          }}
        >
         <TextField
          label="Search field"
          type="text"
          variant="filled"
          name="filter"
          onChange={onChangeFilter}
        />
        </Box>
        
    )
} 



// {/* <div className={s.filter}>
// <label className={s.label}>Find contacts by name
// <input
//         type="text"
//         name="filter"
//         onChange={onChangeFilter}
//         className={s.input}
// />
// </label>
// </div> */}