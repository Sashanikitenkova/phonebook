import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

import * as React from 'react';
import Paper from '@mui/material/Paper'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BackspaceIcon from '@mui/icons-material/Backspace';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
      <Paper elevation={3} >
             <ListItem
                secondaryAction={
                <IconButton edge="end" aria-label="delete" type="button" onClick={() => dispatch(deleteContact(id))}>
                <BackspaceIcon />
                </IconButton>
               }
            >
            <ListItemAvatar>
               <AccessibilityNewIcon /> 
           </ListItemAvatar>
           {name}: {number}
           </ListItem> 
      </Paper>
      
        )
} 




// {/* <li className={s.contactItem}>
//                 {name}: {number}
//                 <button type='button' className={s.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
//            </li> */}



