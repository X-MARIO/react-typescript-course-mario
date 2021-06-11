import React from 'react';
import {BrowserRouter, Route, Redirect, Switch, NavLink} from 'react-router-dom';

import {EventsExample} from "./components";

import {TodoItemPage, TodosPage, UserItemPage, UsersPage} from './pages';

const App: React.FC = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/'}>Главная</NavLink>
                <NavLink to={'/users'}>Пользователи</NavLink>
                <NavLink to={'/todos'}>Список дел</NavLink>
            </div>
            <Switch>
                <Route path={'/'} component={EventsExample} exact/>
                <Route path={'/users'} component={UsersPage} exact/>
                <Route path={'/todos'} component={TodosPage} exact/>
                <Route path={'/users/:id'} component={UserItemPage}/>
                <Route path={'/todos/:id'} component={TodoItemPage}/>
                <Redirect to={'/'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;