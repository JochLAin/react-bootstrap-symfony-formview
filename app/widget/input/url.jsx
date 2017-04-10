'use strict';

import React, { Component } from 'react';
/**
{%- block url_widget -%}
    {%- set type = type|default('url') -%}
    {{ block('form_widget_simple') }}
{%- endblock url_widget -%}
 */

import { setVars } from 'react-symfony-formview';
import Input from './index';

export default class Url extends Component {
    render() {
        return <Input {...setVars.call(this.props, {
            type: this.props.vars.type || "url"
         })} />
    }
}