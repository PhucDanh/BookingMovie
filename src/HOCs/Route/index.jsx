import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"

const createRoute = (condition) => { 
    return class extends Component {
        render() {
            const { path, component: RouteComponent, redirectPath } = this.props;
            return (
                <Route
                    path={path}
                    render={(routeProps) => {
                        // console.log("routeProps", routeProps);
                        if (condition()) {
                            return <RouteComponent {...routeProps}></RouteComponent>
                        }
                        return <Redirect to={redirectPath}></Redirect>;
                    }}>
                </Route>
            )
        }
    }
    
}

export const AuthRoute = createRoute(() => !localStorage.getItem("tokenSignIn"));
export const PrivateRoute = createRoute(() => localStorage.getItem("tokenSignIn"));
export const NormalRoute = createRoute(() => localStorage.getItem("tokenSignIn"));