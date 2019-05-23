import React from 'react';

import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import VerticalLinearStepper from '@src/components/VerticalLinearStepper';

interface InitialProps {
  query: string;
}

interface Props extends InitialProps { }

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

class Index extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    return { query };
  }

  public render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            {this.props.query}
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <VerticalLinearStepper/>
        </ThemeProvider>
      </div>
    );
  }
}

export default Index;
