import React from 'react';
import './Cards.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Cards() {
    const data = [
        {
            id:1,
            name:"Adrian"
        },
        {
            id:2,
            name:"Savanna"
        },
        {
            id:3,
            name:"Michael"
        },
        {
            id:4,
            name:"Brandi"
        },
        {
            id:5,
            name:"Wakeem"
        },
        {
            id:6,
            name:"Ceasar"
        },
        {
            id:7,
            name:"Jerry"
        },
        {
            id:8,
            name:"Marc"
        },
        {
            id:9,
            name:"Precious"
        }
    ]

    function renderCardInfo() {
        return data.map(item => {
            return(
                <Card>
                    <CardActionArea>
                        <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography key={item.id}>
                        {item.name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>  
            )
        }
        )
    }

    return(
        <div id="page-container">
            <div id="content-wrap"> 
            {renderCardInfo()}
            </div>
            <footer id="footer"></footer>
        </div>
        
    )
}