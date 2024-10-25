import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const bull = (
    <Box
        component="span"
        sx={{ backgroundColor: "yellow", display: 'inline-flex', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function AllNews({ tag, title, author, text, id }) {
    const navigation = useNavigate()
    const handleClick = () => {
        navigation(`/news/${id}`, {
            state: { id, tag, title, author, text }
        })
    }
    return (
        <>
            <Card
                onClick={handleClick}
                sx={{ minWidth: 275, maxWidth: 359, flex: '1 1 300px', margin: '5px', backgroundColor: '#f5f5f5', boxShadow: 3, padding: 1, borderRadius: '14px' }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {tag} {id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{author}</Typography>
                    <Typography variant="body2">
                        {text}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Read More</Button>
                </CardActions>
            </Card>

        </>

    );
}

// props
// tag title author text