'use strict';

import React, { Component } from 'react';

/**
{% block time_widget -%}
    {% if widget == 'single_text' %}
        {{- block('form_widget_simple') -}}
    {% else -%}
        {% set attr = attr|merge({class: (attr.class|default('') ~ ' form-inline')|trim}) -%}
        {% if datetime is not defined or false == datetime -%}
            <div {{ block('widget_container_attributes') -}}>
        {%- endif -%}
        {{- form_widget(form.hour) }}{% if with_minutes %}:{{ form_widget(form.minute) }}{% endif %}{% if with_seconds %}:{{ form_widget(form.second) }}{% endif %}
        {% if datetime is not defined or false == datetime -%}
            </div>
        {%- endif -%}
    {% endif %}
{%- endblock time_widget %}
 */

import { ContainerAttributes, setAttr } from 'react-symfony-formview';
import Input from './index';
import Widget from '../index';

export default class Time extends Component {
    render() {
        if (widget == 'single_text') return <Input {...this.props} />
        
        const classname = `${this.props.vars.class || ''} form-inline`;
        const inputs = [ <Widget key={uuid.v4()} {...setAttr(this.props.children.hour, { class: classname })} /> ];
        if (with_minutes) inputs.push(<span>: <Widget key={uuid.v4()} {...setAttr(this.props.children.minute, { class: classname })} /></span>)
        if (with_seconds) inputs.push(<span>: <Widget key={uuid.v4()} {...setAttr(this.props.children.second, { class: classname })} /></span>)

        if (!this.props.vars.datetime) return inputs
        return <article {...ContainerAttributes.call(this.props)}>{inputs}</article>
    }
}