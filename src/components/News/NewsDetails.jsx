import React from 'react';
import { useParams } from 'react-router-dom';

export default function NewsDetail() {
    const { newsId } = useParams();

    return (
        <div>
            <h1>News Detail for ID: {newsId}</h1>
        </div>
    );
}
