import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function NewsDetail() {
    const { newsId } = useParams();
    const location = useLocation();
    const { tag, title, author, text } = location.state || {};



    return (
        <div>
            <h1>News Detail for ID: {newsId}</h1>
            <h2>{title}</h2>
            <p><strong>Tag:</strong> {tag}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Description:</strong> {text}</p>

        </div>
    );
}