import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // NOTE 1
import Link from '@material-ui/core/Link'; // NOTE 위의 1과 이 라인을 모두 import해야 됨
import { withStyles } from '@material-ui/core/styles'; // NOTE
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 'auto'
  }
};

class AppShell extends React.Component {
  // NOTE React.Component에서 'React.' 빼먹지 않도록 주의
  constructor ( props ) {
    super( props );
    this.state = {
      toggle: false
    };
  }

  handleDrawerToggle = () => this.setState( { toggle: !this.state.toggle } )

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer open={this.state.toggle}>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/texts">
              Texts
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/words">
              Words
            </Link>
          </MenuItem>
        </Drawer>
        <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
          {React.cloneElement(this.props.children)}
        </div>
      </div>
    );
  }
}

export default withStyles( styles )( AppShell );