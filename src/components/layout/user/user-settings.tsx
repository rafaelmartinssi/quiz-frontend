import { Avatar, Button, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function UserSettings () {
  return (
    <div>
      <Button sx={{
        textTransform: 'none',
        borderRadius: '5px'
      }} variant="text" startIcon={
        <Avatar sx={{ width: 30, height: 30 }}>
          <AccountCircle fontSize="small" />
        </Avatar>
      }>
        <Typography fontWeight={'500'} variant="subtitle2" sx={{
          color: '#262626'
        }}>Rafael Martins</Typography>
      </Button>
    </div>
  )
}
