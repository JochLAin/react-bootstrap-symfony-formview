'use strict';

import React, { Component } from 'react';
/**
{%- block url_widget -%}
    {%- set type = type|default('url') -%}
    {{ block('form_widget_simple') }}
{%- endblock url_widget -%}
 */

import { getWidget, setVars } from 'react-symfony-formview';

export default class Url extends Component {
    render() {
        const Input = getWidget('text');
        return <div className="input-group">
            <span className="input-group-addon">http://</span>
            <Input {...this.props} />
        </div>
    }
}