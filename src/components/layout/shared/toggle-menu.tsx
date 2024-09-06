import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function ToggleMenu ({ handleDrawerOpen }: { handleDrawerOpen: () => void }) {
  return (
    <IconButton
      color="default"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
        marginRight: 5,
      }}
    >
      <MenuIcon />
    </IconButton>
  )
}
