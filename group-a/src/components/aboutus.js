import React, { Component } from "react";
import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import aboutus1 from './aboutus.jpg';



const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    padding: theme.spacing.unit * 2,
    margin:theme.spacing.unit,

  },
  image: {
    width: 500,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
   margin: theme.spacing.unit,
 },
 input: {
   display: 'none',
 },
bkground:{
    backgroundColor: "#87e8e8ff"
},

});


class aboutus extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bkground}>
            <center>
            <br/>
            <br/>
            <br/>
              <Paper className={classes.root}>
                <Grid container spacing={16}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subheading">
                        <Typography variant="display2" gutterBottom>
                          عن الموقع
                        </Typography>
                        <Grid item>
                        <img className={classes.image} src={aboutus1}/>
                        </Grid>
                        </Typography>
                        <Typography gutterBottom>
                        <Typography variant="display1" gutterBottom>
                          ﻣﺎ ﻫﻮ ﻣﻮﻗﻊ ﻓﻮﺭﺗﻲ ﺩاﻳﺰ
                        </Typography>
                        <Typography variant="headline" gutterBottom>
                          ﻓﻮﺭﺗﻲ ﺩاﻳﺰ ﻫﻮ ﻭﺟﻬﺘﻚ اﻷﻭﻟﻰ ﻟﻠﺤﺼﻮﻝ ﻋﻠﻰ ﺩﻭﺭاﺕ ﻭﺷﺮﻭﺣﺎﺕ؛ ﻭﻳﻘﺪﻡ ﻟﻚ اﻟﻤﻮﻗﻊ ﺩﻭﺭاﺕ ﻓﻲ ﻣﺨﺘﻠﻖ اﻧﻮاﻉ اﻟﻤﺠﺎﻻﺕ؛ ﻓﺎﻟﻤﻮﻗﻊ ﻳﺨﺘﺺ ﻓﻲ ﺗﻌﻠﻴﻢ ﻭﻧﺸﺮ اﻟﻌﻠﻢ ﻟﺠﻤﻴﻊ ﻓﺌﺎﺕ اﻟﻤﺠﺘﻤﻊ.                        </Typography>
                        </Typography>
                        <Typography variant="display1" gutterBottom>
                        :ﻣﻬﻤﺘﻨﺎ ﻭﻫﺪﻓﻨﺎ
                        </Typography>
                        <Typography variant="headline" gutterBottom>
                        .ﻣﻬﻤﺘﻨﺎ اﻷﻭﻟﻰ ﻫﻲ ﺃﻥ ﻧﻘﺪﻡ ﻟﻠﺠﻤﻴﻊ ﺩﻭﺭاﺕ ﻭﻧﺸﺮ ﻟﻠﻌﻠﻢ اﻟﻌﻠﻤﻲ ﻭاﻟﺘﻄﺒﻴﻘﻲ، ﺑﺎﻹﺿﺎﻓﺔ ﺇﻟﻰ ﻣﺠﻤﻮﻋﺔ ﻛﺒﻴﺮﺓ ﻣﻦ اﻟﺪﻭﺭاﺕ ﻓﻲ ﺷﺘﻰ اﻟﻤﺠﺎﻻﺕ ﺔﻴﻓﺮﻌﻤﻟا ﻭاﻟﺘﻲ ﺗﺸﻤﻞ: اﻟﺪﻭﺭاﺕ اﻟﺒﺮﻣﺠﻴﺔ, ﺩﻭﺭاﺕ ﻟﻠﻤﻮﻧﺘﺎﺝ ﻭاﻟﺘﺼﻤﻴﻢ, ﺩﻭﺭاﺕ ﻟﻠﻄﺒﺦ, ﺩﻭﺭاﺕ ﻟﻠﺮﺳﻢ, ﻭﻏﻴﺮﻫﺎ اﻟﻜﺜﻴﺮ. ﻓﻮﺭﺗﻲ ﺩاﻳﺰ ﻫﻮ ﻣﻘﺼﺪﻙ اﻷﻭﻝ ﻟﻠﺘﻌﻠﻢ ﺣﻴﺚ اﻝﻣﻤﺘﻌﺔ ﻭاﻹﻧﺠﺎﺯ
                        </Typography>
                        <Typography variant="display1" gutterBottom>
                        ﻣﻦ ﻧﺤﻦ؟!
                        </Typography>
                        <Typography variant="headline" gutterBottom>
                        ﻧﺤﻦ ﻣﺠﻤﻮﻋﺔ ﻣﻦ اﻟﺸﺒﺎﺏ، ﻭﺟﺪﻧﺎ اﻹﻟﻬﺎﻡ ﻓﻲ ﻧﺸﺮ اﻟﻌﻠﻢ ﻭاﻟﻤﻌﺮﻓﺔ. ﻧﻄﺮﺣ ﻟﻜﻢ ﻓﻲ ﺩﻭﺭاﺕ ﻭﺷﺮﻭﺣﺎﺕ. ﻭﻧﻌﻤﻞ ﺟﺎﻫﺪﻳﻦ ﻷﻥ ﻳﺘﻢ ﺗﻄﻮﻳﺮ اﻟﻤﻮﻗﻊ ﺑﺼﻔﺔ ﺩاﺋﻤﺔ ﻭﻣﺴﺘﻤﺮﺓ. ﻣﻬﻤﺘﻨﺎ اﻷﻭﻟﻰ ﻫﻲ ﺗﺰﻭﻳﺪ اﻟﻤﺠﺘﻤﻊ ﺑﻜﻞ ﻣﺎ ﻫﻮ ﺟﺪﻳﺪ ﻓﻲ ﻋﺎﻟﻢ اﻟﻌﻤﻞ ﻭاﻟﻤﻌﺮﻓﺔ اﻟﻤﺒﺘﻜﺮﺓ ﺑﺸﻜﻞ ﻳﻨﺎﺳﺒﻚ.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              </center>
              <br/>
              <br/>
              <br/>
            </div>
        );
    }
}
export default withStyles(styles)(aboutus);
