'use strict';

import React, { Component } from 'react';

/**
{% block button_widget -%}
    {% set attr = attr|merge({class: (attr.class|default('btn-default') ~ ' btn')|trim}) %}
    {{- parent() -}}
{%- endblock %}
 */

import { Button as BaseButton, setAttr } from 'react-symfony-formview';

export function format() {
    return this.props.vars.label_format
        .replace('%name%', name)
        .replace('%id%', id)
}

export default class Button extends Component {
    render() {
        const classname = `${this.props.vars.attr.class || 'btn-default'} btn`;
        return <BaseButton {...setAttr.call(this.props, { class: classname })} />
    }
}