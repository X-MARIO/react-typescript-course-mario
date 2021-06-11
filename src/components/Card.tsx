import React from 'react';

interface CardProps {
    width: string,
    height: string
}

const Card: React.FC<CardProps> = ({width, height}): React.ReactElement => {
    return (
        <div style={{width, height, background: `gray`}}>

        </div>
    );
};

export default Card;