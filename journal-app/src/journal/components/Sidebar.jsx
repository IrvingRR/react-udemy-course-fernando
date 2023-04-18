import { Box, Divider, Drawer, Toolbar, List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SidebarItem } from './SidebarItem';

export const Sidebar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer variant='permanent' open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>{ displayName }</Typography>
            </Toolbar>
            <Divider/>
                
            <List>
                {
                    notes.map((note, index) => (
                        <SidebarItem note={note} key={`${note}-${index}`}/>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}