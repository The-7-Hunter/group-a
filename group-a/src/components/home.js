import React, { Component } from "react";
import {
    Card, Avatar, CardContent, CardMedia, Button, Typography, CardActions, withStyles,
    Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText
} from '@material-ui/core';



const styles = theme => ({
    card: {
        maxWidth: 700,
    },
    media: {
        height: 10,
        paddingTop: '50.25%', // 16:9
    },
    button: {
        margin: theme.spacing.unit,
        width: 200,
        backgroundColor: "#c1c5cc",
        color: "#000000",
    },
});
class home extends Component {
    state = {
        open: false,
        open1: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClickOpen1 = () => {
        this.setState({ open1: true });
    };
    handleClose = () => {
        this.setState({ open: false });
        this.setState({ open1: false});
    };


    render() {
        const { classes } = this.props;
        return (
            <center>
                <div>
                    <br />
                    <br />
                    <Card className={classes.card} dir="rtl">
                        <CardMedia
                            className={classes.media}
                            image="https://preview.ibb.co/gojh3z/cloudes.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                            <Typography variant="Title">
                                مرحباً بكم في موقع أنظمة غيمة Cloud Systems رجائاً قم بالتسجيل او تسجيل الدخول اذا كنت تملك حساب مسبقاً
          </Typography>

                        </CardContent>

                        <Button onClick={this.handleClickOpen} variant="contained" size="large" className={classes.button}>
                        تسجيل الدخول
        </Button>
                        <Dialog
                            open={this.state.open1}
                            onClose={this.handleClose}

                        >
                            <DialogTitle id="form-dialog-title" dir="rtl">إنشاء حساب جديد</DialogTitle>
                            <DialogContent>
                                <DialogContentText>

                                </DialogContentText>
                                <TextField
                                dir="rtl"
                                    autoFocus
                                    placeholder="الإسم"
                                />
                                <br />
                                <TextField
                                dir="rtl"
                                    autoFocus
                                    placeholder="البريد الإلكتروني"
                                />
                                <br />
                                <TextField
                                dir="rtl"
                                    autoFocus
                                    placeholder="رقم الجوال"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    إلغاء
            </Button>
                                <Button onClick={this.handleClose} color="primary">
                                    تسجيل
            </Button>
                            </DialogActions>
                        </Dialog>



                        <Button onClick={this.handleClickOpen1} variant="contained" size="large" className={classes.button}>

                            تسجيل
        </Button>

        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}

                        >
                            <DialogTitle id="form-dialog-title" dir="rtl"> الدخول</DialogTitle>
                            <DialogContent>
                                <DialogContentText>

                                </DialogContentText>
                                <TextField
                                dir="rtl"
                                    autoFocus
                                    placeholder="البريد الإلكتروني"
                                />
                                <br />
                                <TextField
                                dir="rtl"
                                    autoFocus
                                    placeholder="كلمة المرور"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    إلغاء
            </Button>
                                <Button onClick={this.handleClose} color="primary">
                                تسجيل دخول
            </Button>
                            </DialogActions>
                        </Dialog>
                        <br />
                        <br />

                    </Card>

                    <br />
                    <br />
                    <br />
                </div>
            </center>
        );
    }
}
export default withStyles(styles)(home);
