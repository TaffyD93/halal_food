import {React, useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image1 from '../images/Bill_or_beak.jpeg'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RestaurantCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
      bgcolor: 'rgba(255, 255, 255, 0.7)',
      boxShadow: 1,
      borderRadius: 2,
      minWidth: "30%",
      maxWidth: "30%",
      width: "200px"
    }}>
      <CardHeader
        title="Bill or Beak"
      />
      <CardMedia
        component="img"
        height="200px"
        image={image1}
        alt="Bill or Beak"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          KERB Camden Market The West Yard, NW1 8AF
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent>
          <Typography paragraph>
          Making some of London's best burgers since 2014. Bill or Beak, its one hell of a question
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}