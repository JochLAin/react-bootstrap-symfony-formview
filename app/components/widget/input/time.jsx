'use strict';

import uuid from 'uuid';
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

import { ContainerAttributes, Widget, getWidget, setAttr } from 'react-symfony-formview';

export default class Time extends Component {
    render() {
        if (this.props.vars.widget == 'single_text') {
            const Input = getWidget('text');
            return <Input {...this.props} />
        }
        
        const classname = `${this.props.vars.class || ''} form-inline`;
        const inputs = [ <Widget key={uuid.v4()} {...setAttr.call(this.props.children.hour, { class: classname })} /> ];
        if (this.props.vars.with_minutes) inputs.push(<span key={uuid.v4()}>: <Widget {...setAttr.call(this.props.children.minute, { class: classname })} /></span>)
        if (this.props.vars.with_seconds) inputs.push(<span key={uuid.v4()}>: <Widget {...setAttr.call(this.props.children.second, { class: classname })} /></span>)

        if (!this.props.vars.datetime) return <span>{inputs}</span>
        return <article {...ContainerAttributes.call(this.props)}>{inputs}</article>
    }
}