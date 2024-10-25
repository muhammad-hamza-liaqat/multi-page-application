import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ backgroundColor: "yellow", display: 'inline-flex', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function AllNews() {
    return (
        <>
            <Card sx={{ minWidth: 300, maxWidth: 400, flex: '1 1 300px', margin: '8px', backgroundColor: '#f5f5f5', boxShadow: 3, padding: 2, borderRadius: '8px' }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        HeadLine
                    </Typography>
                    <Typography variant="h5" component="div">
                        Is Pakistan going to default?
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>author: Hamza</Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, vitae. Explicabo impedit necessitatibus deserunt harum a praesentium expedita modi dolor ea ratione. Praesentium, suscipit dolores delectus saepe architecto omnis enim?
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
