import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Card.css';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 255,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="container">

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/help.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Projects
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          LAAD’s mission is to help finance small and medium-size agribusiness companies in Latin America.
          </Typography>
        </CardContent>
        <Button size="small" color="green">
          Learn More
        </Button>
      </CardActionArea>
    </Card>


    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/growth.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Developmental Impact
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          LAAD provided full and part-time employment to almost 11,000 people in 2018 (fiscal year), primarily in rural areas.
          </Typography>
        </CardContent>
        <Button size="small" color="green">
          Learn More
        </Button>
      </CardActionArea>
    </Card>


    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/fact.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            $287.9 Million
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          In 2018 LAAD disbursed US287.9 million increasing the agribusiness loan portfolio by 16%.
          </Typography>
        </CardContent>
        <Button size="small" color="green">
          Learn More
        </Button>
      </CardActionArea>
    </Card>




 </div>
  );
}

