import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CallMissedOutgoing from '@material-ui/icons/CallMissedOutgoing';
import { useFlexyTagStyles } from '@mui-treasury/styles/tag/flexy';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const FlexyTag = () => {
  const classes = useFlexyTagStyles();
  const gutterStyles = usePushingGutterStyles();
  return (
    <Box className={gutterStyles.parent}>
      <Button classes={{ root: classes.root, label: classes.label }}>
        Learn More
        <CallMissedOutgoing className={classes.icon} />
      </Button>
    </Box>
  );
};


export default FlexyTag;