'use strict';

import React, { Component } from 'react';

/**
{% block checkbox_radio_label %}
    {# Do not display the label if widget is not defined in order to prevent double label rendering #}
    {% if widget is defined %}
        {% if required %}
            {% set label_attr = label_attr|merge({class: (label_attr.class|default('') ~ ' required')|trim}) %}
        {% endif %}
        {% if parent_label_class is defined %}
            {% set label_attr = label_attr|merge({class: (label_attr.class|default('') ~ ' ' ~ parent_label_class)|trim}) %}
        {% endif %}
        {% if label is not same as(false) and label is empty %}
            {%- if label_format is not empty -%}
                {% set label = label_format|replace({
                    '%name%': name,
                    '%id%': id,
                }) %}
            {%- else -%}
                {% set label = name|humanize %}
            {%- endif -%}
        {% endif %}
        <label{% for attrname, attrvalue in label_attr %} {{ attrname }}="{{ attrvalue }}"{% endfor %}>
            {{- widget|raw }} {{ label is not same as(false) ? (translation_domain is same as(false) ? label : label|trans({}, translation_domain)) -}}
        </label>
    {% endif %}
{% endblock checkbox_radio_label %}
 */

import { Attributes } from 'react-symfony-formview';

export function format() {
    this.props.vars.label_format
        .replace('%name%', this.props.vars.name)
        .replace('%id%', this.props.vars.id)
};

export default class CheckboxRadio extends Component {
    render() {
        if (!this.props.vars.widget) return <span></span>

        let label_attr = this.props.vars.label_attr;
        label_attr = Object.assign({}, label_attr, { class: `${label_attr && label_attr.class || ''} ${this.props.vars.parent_label_class || ''}` });
        if (this.props.vars.required) Object.assign(label_attr, { class: `${label_attr.class || ''} required` });

        let label = this.props.vars.label;
        if (label !== false && !label) label = format.call(this);
        else label = this.props.vars.name;

        return <label {...Attributes.call(this.props, label_attr)}>
            {this.props.vars.widget}
            {label}
        </label>
    }
}