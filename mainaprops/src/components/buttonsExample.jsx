import { ThemeProvider, Button } from '@material-ui/core';
import React from 'react';
import theme from '../theme';

function ButtonsExample() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">Primari</Button>
        <Button variant="contained" color="secondary">Secundari</Button>
      </ThemeProvider>
    </>
  );
}

export default ButtonsExample;
