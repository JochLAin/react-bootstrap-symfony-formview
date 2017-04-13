'use strict';

import uuid from 'uuid';
import React, { Component } from 'react';

/**
{% block date_widget -%}
    {% if widget == 'single_text' %}
        {{- block('form_widget_simple') -}}
    {% else -%}
        {% set attr = attr|merge({class: (attr.class|default('') ~ ' form-inline')|trim}) -%}
        {% if datetime is not defined or not datetime -%}
            <div {{ block('widget_container_attributes') -}}>
        {%- endif %}
            {{- date_pattern|replace({
                '{{ year }}': form_widget(form.year),
                '{{ month }}': form_widget(form.month),
                '{{ day }}': form_widget(form.day),
            })|raw -}}
        {% if datetime is not defined or not datetime -%}
            </div>
        {%- endif -%}
    {% endif %}
{%- endblock date_widget %}
 */

import { ContainerAttributes, Widget, getWidget, setAttr } from 'react-symfony-formview';

export default class Date extends Component {
    render() {
        if (this.props.vars.widget == 'single_text') {
            const Input = getWidget('text');
            return <Input {...this.props} />
        }

        const classname = `${this.props.vars.class || ''} form-inline`;
        const inputs = [
            <Widget key={uuid.v4()} {...setAttr.call(this.props.children.year, { class: classname })} />,
            <Widget key={uuid.v4()} {...setAttr.call(this.props.children.month, { class: classname })} />,
            <Widget key={uuid.v4()} {...setAttr.call(this.props.children.day, { class: classname })} />
        ];

        if (!this.props.vars.datetime) return <span>{inputs}</span>;
        return <article {...ContainerAttributes.call(this.props)}>
            {inputs}
        </article>
    }
}