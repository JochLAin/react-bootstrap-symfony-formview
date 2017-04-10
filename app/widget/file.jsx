'use strict';

import React, { Component } from 'react';

/**
{%- block password_widget -%}
    {%- set type = type|default('password') -%}
    {{ block('form_widget_simple') }}
{%- endblock password_widget -%}
 */

import { setVars } from 'react-symfony-formview';
import Input from './input';

export default class File extends Component {
    render() {
        return <Input {...setVars.call(this.props, {
            type: this.props.vars.type || "file"
         })} />
    }
}