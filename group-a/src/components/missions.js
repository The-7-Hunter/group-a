import React, { Component } from "react";
import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import missions1 from './missions.png';




const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
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
});



class missions extends Component {
    render() {
      const { classes } = this.props;
        return (
            <center>
            <br/>
            <br/>
            <br/>
              <Paper className={classes.root}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={missions1} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subheading">
                          <h3>مهمة اليوم</h3>
                        </Typography>
                        <Typography gutterBottom>نريد منكم تصميم هويّة مناسبة للموقع الجديد (شعار، ألوان، وما إلى ذلك). ثم نريد منكم تحديد وظائف الموقع الأساسيّة (التسجيل، الدخول، الالتحاق ببرنامج، الملف الشخصي، إرسال المهام، استقبال الإجابات، وغيرها) على أن تكون رحلة المستخدم سلسةً قدر الإمكان. نريد منكم تجهيز “Wireframes” متوسّطة الدقّة لوظائف الموقع الأساسيّة. بعد ذلك نريد منكم بناء ”Frontend“ للواجهات باستخدام HTML/CSS/JS/React دون برمجة ”Backend“. في النهاية نتوقّع من قائد المجموعة تسليم "Wireframes"، ورابط حيّ (Live demo) لنتيجة المشروع، ورابط الكود على GitHub، وفيديو ”Youtube“ (لا تزيد مدّته عن 10 دقائق) لقائد المجموعة وهو يشرح عمل المجموعة والصعاب التي واجهتها وما إلى ذلك. أرفقنا في المراجع مجموعة من الأدوات لتسهيل العملية وتسريعها.</Typography>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="secondary" className={classes.button} style={{ cursor: 'pointer' }}>
                           تسليم المهمة
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subheading">Point:10</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              </center>
        );
    }
}

export default withStyles(styles)(missions);
