'use strict';

import React, { Component } from 'react';

/**
{% block datetime_widget -%}
    {% if widget == 'single_text' %}
        {{- block('form_widget_simple') -}}
    {% else -%}
        {% set attr = attr|merge({class: (attr.class|default('') ~ ' form-inline')|trim}) -%}
        <div {{ block('widget_container_attributes') }}>
            {{- form_errors(form.date) -}}
            {{- form_errors(form.time) -}}
            {{- form_widget(form.date, { datetime: true } ) -}}
            {{- form_widget(form.time, { datetime: true } ) -}}
        </div>
    {%- endif %}
{%- endblock datetime_widget %}
 */

import { ContainerAttributes, Errors, Label, Widget, getWidget, setAttr } from 'react-symfony-formview';

export default class DateTime extends Component {
    render() {
        if (this.props.vars.widget == 'single_text') {
            const Input = getWidget('text');
            return <Input {...this.props} />
        }

        const classname = `${this.props.vars.class || ''} form-inline`;
        return <article {...ContainerAttributes.call(this.props)}>
                <Errors {...setAttr.call(this.props.children.date, { class: classname })} />
                <Errors {...setAttr.call(this.props.children.time, { class: classname })} />
                <Widget {...setAttr.call(this.props.children.date, { class: classname, datetime: true })} />
                <Widget {...setAttr.call(this.props.children.time, { class: classname, datetime: true })} />
        </article>
    }
}