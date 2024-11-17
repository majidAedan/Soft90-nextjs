import * as React from 'react';
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { Apps } from "@/database/Apps.data";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import { AppType } from '@/Types/AppType';



 const AppCard: FC<AppType> = (data) => {
  const [expanded, setExpanded] = React.useState(false);
console.log(data.data.name)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 1000, margin: 2}}>
      <CardHeader

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.data.name}
        subheader={'Last update: ' + data.data.last_updated}
      />
      <Box sx={{ width: 150, height: 150, margin: 2 }}>

        <CardMedia
          sx={{ objectFit: 'cover' }}
          component="img"
          image="/images/FDM.png"
          alt="Free Downlod Maager Logo"

        />

      </Box>
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.data.description}
        </Typography>
      </CardContent>
      <Container maxWidth="xl" sx={{ direction: 'rtl' }}>
        <Button variant="contained" href={data.data.download_link} >
          download
        </Button>
      </Container>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}
export default AppCard;