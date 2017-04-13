'use strict';

import React, { Component } from 'react';

/**
{% block choice_label -%}
    {# remove the checkbox-inline and radio-inline class, it's only useful for embed labels #}
    {%- set label_attr = label_attr|merge({class: label_attr.class|default('')|replace({'checkbox-inline': '', 'radio-inline': ''})|trim}) -%}
    {{- block('form_label') -}}
{% endblock %}
 */

import { BaseLabel, setVars } from 'react-symfony-formview';

export default class Choice extends Component {
    render() {
        return <BaseLabel {...setVars.call(this.props, { label_attr: {class: (this.props.vars.label_attr.class || '').replace('checkbox-inline', '').replace('radio-inline', '') }})}/>
    }
}