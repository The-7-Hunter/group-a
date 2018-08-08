import React, { Component } from "react";
import { Card, withStyles } from '@material-ui/core';

const styles = theme => ({
    subcard: {
        backgroundColor: "#754b4b",
        justifyContent: "left"
    },
    Card:{
        margin: theme.spacing.unit,
        backgroundColor: "#754b4b",
    },
    bkground:{
        backgroundColor: "#754b4b"
    },
});
class aboutus extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bkground}>
             <center>
             <Card className={classes.subcard}>
            <img alt="About Us" className="aboutimgg" src="/img/aboutus.jpg" />
                </Card>
                </center>
            <Card className={classes.Card}>
            <h2 className="about">ﻋﻦ اﻟﻤﻮﻗﻊ</h2>

            <h3 className="about">ﻣﺎ ﻫﻮ ﻣﻮﻗﻊ ﻓﻮﺭﺗﻲ ﺩاﻳﺰ:</h3>
            <p className="aboutp">ﻓﻮﺭﺗﻲ ﺩاﻳﺰ ﻫﻮ ﻭﺟﻬﺘﻚ اﻷﻭﻟﻰ ﻟﻠﺤﺼﻮﻝ ﻋﻠﻰ ﺩﻭﺭاﺕ ﻭﺷﺮﻭﺣﺎﺕ؛ ﻭﻳﻘﺪﻡ ﻟﻚ اﻟﻤﻮﻗﻊ ﺩﻭﺭاﺕ ﻓﻲ ﻣﺨﺘﻠﻖ اﻧﻮاﻉ اﻟﻤﺠﺎﻻﺕ؛ ﻓﺎﻟﻤﻮﻗﻊ ﻳﺨﺘﺺ ﻓﻲ ﺗﻌﻠﻴﻢ ﻭﻧﺸﺮ اﻟﻌﻠﻢ ﻟﺠﻤﻴﻊ ﻓﺌﺎﺕ اﻟﻤﺠﺘﻤﻊ.
            </p> 

            <h3 className="about">:ﻣﻬﻤﺘﻨﺎ ﻭﻫﺪﻓﻨﺎ</h3>
            <p className="aboutp">
            .ﻣﻬﻤﺘﻨﺎ اﻷﻭﻟﻰ ﻫﻲ ﺃﻥ ﻧﻘﺪﻡ ﻟﻠﺠﻤﻴﻊ ﺩﻭﺭاﺕ ﻭﻧﺸﺮ ﻟﻠﻌﻠﻢ اﻟﻌﻠﻤﻲ ﻭاﻟﺘﻄﺒﻴﻘﻲ، ﺑﺎﻹﺿﺎﻓﺔ ﺇﻟﻰ ﻣﺠﻤﻮﻋﺔ ﻛﺒﻴﺮﺓ ﻣﻦ اﻟﺪﻭﺭاﺕ ﻓﻲ ﺷﺘﻰ اﻟﻤﺠﺎﻻﺕ ﺔﻴﻓﺮﻌﻤﻟا ﻭاﻟﺘﻲ ﺗﺸﻤﻞ: اﻟﺪﻭﺭاﺕ اﻟﺒﺮﻣﺠﻴﺔ, ﺩﻭﺭاﺕ ﻟﻠﻤﻮﻧﺘﺎﺝ ﻭاﻟﺘﺼﻤﻴﻢ, ﺩﻭﺭاﺕ ﻟﻠﻄﺒﺦ, ﺩﻭﺭاﺕ ﻟﻠﺮﺳﻢ, ﻭﻏﻴﺮﻫﺎ اﻟﻜﺜﻴﺮ. ﻓﻮﺭﺗﻲ ﺩاﻳﺰ ﻫﻮ ﻣﻘﺼﺪﻙ اﻷﻭﻝ ﻟﻠﺘﻌﻠﻢ ﺣﻴﺚ اﻝﻣﻤﺘﻌﺔ ﻭاﻹﻧﺠﺎﺯ 
            </p>
            <h3 className="about">ﻣﻦ ﻧﺤﻦ؟! </h3>
            <p className="aboutp">ﻧﺤﻦ ﻣﺠﻤﻮﻋﺔ ﻣﻦ اﻟﺸﺒﺎﺏ، ﻭﺟﺪﻧﺎ اﻹﻟﻬﺎﻡ ﻓﻲ ﻧﺸﺮ اﻟﻌﻠﻢ ﻭاﻟﻤﻌﺮﻓﺔ. ﻧﻄﺮﺣ ﻟﻜﻢ ﻓﻲ ﺩﻭﺭاﺕ ﻭﺷﺮﻭﺣﺎﺕ. ﻭﻧﻌﻤﻞ ﺟﺎﻫﺪﻳﻦ ﻷﻥ ﻳﺘﻢ ﺗﻄﻮﻳﺮ اﻟﻤﻮﻗﻊ ﺑﺼﻔﺔ ﺩاﺋﻤﺔ ﻭﻣﺴﺘﻤﺮﺓ. ﻣﻬﻤﺘﻨﺎ اﻷﻭﻟﻰ ﻫﻲ ﺗﺰﻭﻳﺪ اﻟﻤﺠﺘﻤﻊ ﺑﻜﻞ ﻣﺎ ﻫﻮ ﺟﺪﻳﺪ ﻓﻲ ﻋﺎﻟﻢ اﻟﻌﻤﻞ ﻭاﻟﻤﻌﺮﻓﺔ اﻟﻤﺒﺘﻜﺮﺓ ﺑﺸﻜﻞ ﻳﻨﺎﺳﺒﻚ. </p>
            <br/>
<br/>
</Card>
<br/>
<br/>

            </div>
        );
    }
}
export default withStyles(styles)(aboutus);

