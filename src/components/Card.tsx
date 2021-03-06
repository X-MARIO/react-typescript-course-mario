import React, {useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string,
    height: string,
    variant: CardVariant
}

const Card: React.FC<CardProps> = ({
                                       width,
                                       height,
                                       variant,
                                       children
                                   }): React.ReactElement => {
    const [state, setState] = useState(0);
    return (
        <div
            style={{
                width, height,
                border: variant === CardVariant.outlined ? `1px solid green` : 'none',
                background: variant === CardVariant.primary ? 'lightgray' : ''
            }}>
            {children}
        </div>
    );
};

export default Card;