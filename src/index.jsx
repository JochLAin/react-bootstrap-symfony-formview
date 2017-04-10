"use strict";

import React from 'react';
import { render } from 'react-dom';
import Form from '../app';

render(
    <div className="container"><Form {...window.__initialState__} /></div>,
    document.getElementById('root')
);