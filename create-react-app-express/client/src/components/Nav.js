import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>    
                    <li>Add New Users</li>
                    <li>Display Table</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
