import React from 'react';
import {Card} from "./components";
import {CardVariant} from "./components/Card";

const App: React.FC = (): React.ReactElement => {
    return (
        <div>
            <Card width='200px' height='200px' variant={CardVariant.primary}>
                <button>Кнопка</button>
            </Card>
        </div>
    );
};

export default App;