'use strict';

import React, { Component } from 'react';

/**
{%- block email_widget -%}
    {%- set type = type|default('email') -%}
    {{ block('form_widget_simple') }}
{%- endblock email_widget -%}
 */

import { setVars } from 'react-symfony-formview';
import Input from './index';

export default class Email extends Component {
    render() {
        return <Input {...setVars.call(this.props, {
            type: this.props.vars.type || "email"
         })} />
    }
}