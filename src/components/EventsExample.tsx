import React, {useState} from 'react';

const EventsExample: React.FC = (): React.ReactElement => {
    const [value, setValue] = useState<string>();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(value)
    }

    return (
        <div>
            <input type='text' onChange={changeHandler} value={value}/>
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
};

export default EventsExample;