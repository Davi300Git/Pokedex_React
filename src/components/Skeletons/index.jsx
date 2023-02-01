import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [

];

function Skeletons(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(5)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 4, my: 5, marginLeft: "2em" }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={100} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="100%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Skeletons.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }} >
      <Skeletons loading />
      <Skeletons loading />
      <Skeletons />
    </Box>
  );
}