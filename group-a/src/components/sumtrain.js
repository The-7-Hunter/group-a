import React, { Component } from "react";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';



const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 500,
  },
  paper: {
    margin: theme.spacing.unit,
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
  bkground:{
    backgroundColor: "#87e8e8ff"
  },
  paper1:{
      maxWidth:600
  },
});


class sumtrain extends Component {
    render() {
            const { classes } = this.props;
            const message1 = `نأخذ في عين الإعتبار في منهج التدريب أفضل المهارات المطلوبة في سوق العمل السعوديّ والعالمي، ثم نُسند المهام إلى المتدرّب كي نحدّد من خلالها مدى امتلاك المتدرّب مهارةً ما من عدمها. `;
            const message2 = 'نضع بين يدي المتدرّب 9 مسارات مختلفة، يتعلّم منها شيئًا جديدًا، يستكشفُ نفسه من خلالها، ويحلّل ويطوّر أنظمةً ويضمن توفّرها، ثمّ يختبرها، ويعثر على ثغراتها، إضافةً إلى مواضيع أخرى.';
            const message3 = 'نقدّم تدريبًا مكثّفًا في فترةٍ وجيزةٍ للذكور والإناث، ومن خلال الإنترنت فقط (عن بُعد)، يتحدّى فيها المتدرّب نفسه، وينظّم وقته، ويعرف مدى التزامه من عدمه. نضمن تجربةً فريدةً لا يُمكن لها أن تُنسى.'
        return (
          <div className={classes.bkground}>
           <Grid container spacing={24}>
           <Grid item xs={12} sm={6}>

           <center>
           <br/>
           <br/>
           <br/>
           <br/>
           <div>
                 <Paper className={classes.root} className={classes.paper1} elevation={1}>
                   <Typography variant="display1" component="h3">
                     برنامج التدريب الصيفي
                   </Typography>
                   <Typography component="headline">
                     كجزءٍ من مسؤوليّتنا الإجتماعيّة، يسرّ مؤسّسة أنظمة غيمة (Cloud Systems) أن تقدّم برنامج تدريبٍ صيفي لطلاّب كليّات الحاسب والكليّات ذات العلاقة ولكلّ المُهتمين بمجالات التقنيّة والإنترنت. تمّ تصميم هذا البرنامج من قبل نخبةٍ من الموهوبين والذين يمتلكون خبرةً مهنيّةً وأكاديميّةً في مجالاتٍ تقنيّةٍ مختلفة.
                   </Typography>
                   <br/>
                   <br/>
                   <Button variant="contained" color="secondary" className={classes.button}>
                   إنضم إلينا
                   </Button>
                   <br/>
                   <br/>
                 </Paper>
               </div>
            </center>
            </Grid>
            <Grid item xs={12} sm={6}>
            <br/>
            <br/>
              <div className={classes.root}>
                <div className={classes.wrapper}>
                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={16}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={image1} />
                      </ButtonBase>
                    </Grid>
                      <Grid item xs>
                        <Typography variant="title" gutterBottom>
                          مهارات مطلوبة
                        </Typography>
                        <Typography>{message1}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>

                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={16}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={image2} />
                      </ButtonBase>
                    </Grid>
                      <Grid item xs>
                      <Typography variant="title" gutterBottom>
                         مسارات متنوّعة
                      </Typography>
                        <Typography>{message2}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>

                    <Paper className={classes.paper}>
                      <Grid container wrap="nowrap" spacing={16}>
                      <Grid item>
                        <ButtonBase className={classes.image}>
                          <img className={classes.img} alt="complex" src={image3} />
                        </ButtonBase>
                      </Grid>
                        <Grid item xs>
                        <Typography variant="title" gutterBottom>
                        تجربة استثنائيّة
                        </Typography>
                          <Typography>{message3}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
              </div>
              </div>
          </Grid>
          </Grid>
          </div>
        );
    }

}
export default withStyles(styles)(sumtrain);
