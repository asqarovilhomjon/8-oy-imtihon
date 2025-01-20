import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
  {
    src: '',
    title: '',
    channel: '',
    views: '',
    createdAt: '',
  },
  {
    src: '',
    title: '',
    channel: '',
    views: '',
    createdAt: '',
  },
  {
    src: '',
    title: '',
    channel: '',
    views: '',
    createdAt: '',
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container spacing={2} className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[30px]' justifyContent="center">
      {(loading ? Array.from(new Array(8)) : data).map((item, index) => (
        <Grid
          item
          xs={3}
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%' }}>
            {item ? (
              <img
                style={{ width: '100%', height: 118 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton variant="rectangular" width="100%" height={118} />
            )}
            {item ? (
              <Box sx={{ mt: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: 'block', color: 'text.secondary' }}
                >
                  {item.channel}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}
