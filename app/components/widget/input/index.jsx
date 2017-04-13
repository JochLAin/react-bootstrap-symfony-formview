'use strict';

import React, { Component } from 'react';

/**
{% block form_widget_simple -%}
    {% if type is not defined or type not in ['file', 'hidden'] %}
        {%- set attr = attr|merge({class: (attr.class|default('') ~ ' form-control')|trim}) -%}
    {% endif %}
    {{- parent() -}}
{%- endblock form_widget_simple %}
 */

import { Input as BaseInput, setAttr } from 'react-symfony-formview';

export default class Input extends Component {
    render() {
        const prefixes = this.props.vars.block_prefixes;
        const type = prefixes[prefixes.length - 2];
        const classname = ['file', 'hidden'].indexOf(type) != -1 
            ? this.props.vars.attr.class 
            : `${this.props.vars.attr.class || ''} form-control`; 
        return <BaseInput {...setAttr.call(this.props, { class: classname })} />
    }
}