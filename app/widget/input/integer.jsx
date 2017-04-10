'use strict';

import React, { Component } from 'react';

/**
{%- block integer_widget -%}
    {%- set type = type|default('number') -%}
    {{ block('form_widget_simple') }}
{%- endblock integer_widget -%}
 */

import { setVars } from 'react-symfony-formview';
import Input from './index';

export default class Integer extends Component {
    render() {
        return <Input {...setVars.call(this.props, {
            type: this.props.vars.type || "number"
         })} />
    }
}