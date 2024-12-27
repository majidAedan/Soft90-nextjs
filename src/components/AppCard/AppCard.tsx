import * as React from 'react';
import { FC } from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AppType } from '@/Types/AppType';
import { styled } from '@mui/material/styles';
import CustomizedDialogs from '@/components/Dialog/appDialog'; // Adjust path

const CustomCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  direction: 'rtl',
  textAlign: 'right',

}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  color: '#4CAF50',
  fontWeight: 'bold',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4CAF50',
  color: 'white',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: '#45A049',
  },
}));

const AppCard: FC<AppType> = (data) => {
  const [expanded, setExpanded] = React.useState(false);

  console.log(data.data.id)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  return (
    <Card>

      <CardHeader
        title={
          <HeaderTypography variant="subtitle1">{data.data.name}</HeaderTypography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            {data.data.last_updated} • {"22"} بازدید • {"majid"}
          </Typography>
        }
        sx={{ backgroundColor: '#F9F9F9', paddingBottom: 1 }}


      />
      <Divider />

      <Box sx={{ display: 'flex', padding: 2 }}>

        <CardMedia
          component="img"
          sx={{ width: 100, height: 100, marginLeft: 2 }}
          image={data.data.image}
          alt={"title"}

        />

        <CardContent sx={{ padding: 0 }}>
          <Typography variant="body2" color="textSecondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3, // تعداد خطوط مجاز
              WebkitBoxOrient: 'vertical',
            }}        >
            {data.data.description}
          </Typography>
        </CardContent>
      </Box>

      <Divider />

      <CardActions sx={{ justifyContent: 'flex-end', backgroundColor: '#F9F9F9' }}>
        <CustomizedDialogs
          open={dialogOpen} onClose={handleDialogClose}

          cardData={{
            name: data.data.name,
            description: data.data.description,
            image: data.data.image,
            lastUpdated: data.data.last_updated,
            download_link: data.data.download_link
          }}

        />
        <CardActions sx={{ justifyContent: 'flex-end', backgroundColor: '#F9F9F9' }}>
          <ActionButton onClick={handleDialogOpen}>ادامه مطلب</ActionButton>
        </CardActions>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>

    </Card>
  );
}
export default AppCard;