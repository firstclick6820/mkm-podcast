import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';





export default function SideBarCard({title}) {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%', mt: '1em', padding: "0.5em" }} position="sticky">
      <MenuList>
        <Typography variant="h6">{title}</Typography>
        <Divider />

        <MenuItem>
          <ListItemText>Cut</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText>Copy</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText>Paste</ListItemText>
        </MenuItem>
        
        <MenuItem>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>

      </MenuList>
    </Paper>
  );
}