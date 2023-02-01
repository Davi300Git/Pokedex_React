import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function PokemonCard({ name, image, types }) {
    const typeHandler = () => {
        if(types[1]){
            return types[0].type.name+" | "+types[1].type.name;
        }
        return types[0].type.name;
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="Pokémon" />
      <CardContent> 
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
            {typeHandler()}
            </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}