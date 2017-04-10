'use strict';

import React, { Component } from 'react';

/**
{%- block hidden_widget -%}
    {%- set type = type|default('hidden') -%}
    {{ block('form_widget_simple') }}
{%- endblock hidden_widget -%}
 */

import { setVars } from 'react-symfony-formview';
import Input from './index';

export default class Hidden extends Component {
    render() {
        return <Input {...setVars.call(this.props, {
            type: this.props.vars.type || "hidden"
         })} />
    }
}