import React from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string,
    height: string,
    variant: CardVariant,
    onClick?: () => void
}

const Card: React.FC<CardProps> = ({
                                       width,
                                       height,
                                       variant,
                                       onClick,
                                       children}): React.ReactElement => {
    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? `1px solid green` : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}>
            {children}
        </div>
    );
};

export default Card;