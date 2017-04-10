'use strict';

import React, { Component } from 'react';

/**
{%- block password_widget -%}
    {%- set type = type|default('password') -%}
    {{ block('form_widget_simple') }}
{%- endblock password_widget -%}
 */

import { setVars } from 'react-symfony-formview';
import Input from './index';

export default class Password extends Component {
    render() {
        return <Input {...setVars.call(this.props, {
            type: this.props.vars.type || "password"
         })} />
    }
}