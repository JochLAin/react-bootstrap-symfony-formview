"use strict";

import React from 'react';
import { render } from 'react-dom';
import Form from '../app';

console.log('fetch form');
fetch('http://jochlain.local/form/', { mode: 'cors' })
.then(response => response.json())
.then(form => {
    console.log(form);
    render(
        <div className="container"><Form {...form} /></div>,
        document.getElementById('root')
    );
})