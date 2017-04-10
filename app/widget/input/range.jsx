'use strict';

import React, { Component } from 'react';

/**
{%- block range_widget -%}
    {% set type = type|default('range') %}
    {{- block('form_widget_simple') -}}
{%- endblock range_widget %}
 */

import { setVars } from 'react-symfony-formview';
import Input from './index';

export default class Range extends Component {
    render() {
        return <Input {...setVars.call(this.props, {
            type: this.props.vars.type || "range"
         })} />
    }
}