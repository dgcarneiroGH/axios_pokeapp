import React from 'react';
import PokeCard from './PokeCard';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function PokeDescription({ pokeImage,
    name,
    description,
    classes,
    id,
    height,
    weight,
    types }) {
    return (
        <Grid container className={classes.centerContainer} >
            <Grid item md={6} >
                <PokeCard image={pokeImage} name={name} id={id} />
            </Grid>
            <Grid item md={6} >
                <div className={classes.descriptionContainer}>
                    <Paper className={classes.descriptionBox} >
                        <Typography variant="body1" component="p" className={classes.descriptionText} >
                            {description}
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.descriptionContainer}>
                    <Paper className={classes.descriptionBox} >
                        <Typography variant="body1" component="p" className={classes.descriptionText} >
                            {weight}
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.descriptionText} >
                            {height}
                        </Typography>
                        {types.map((item, index) => {
                            return (
                                <Typography key={index} variant="body1" component="p" className={classes.descriptionText} >
                                    {item.type.name}
                                </Typography>
                            );
                        })}
                    </Paper>
                </div>
            </Grid>
        </Grid>
    );
}

export default withStyles({
    centerContainer: {
        margin: '0 auto',
        width: '50% !important'
    },
    descriptionContainer: {
        margin: '2em'
    },
    descriptionBox: {
        padding: '2em',
        height: 'auto'
    },
    descriptionText: {
        fontSize: '1em',
        textAlign: 'justify',
        fontFamily: 'Verdana'
    }
})(PokeDescription);