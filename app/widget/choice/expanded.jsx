'use strict';

import uuid from 'uuid';
import React, { Component } from 'react';

/**
{% block choice_widget_expanded -%}
    {% if '-inline' in label_attr.class|default('') -%}
        {%- for child in form %}
            {{- form_widget(child, {
                parent_label_class: label_attr.class|default(''),
                translation_domain: choice_translation_domain,
            }) -}}
        {% endfor -%}
    {%- else -%}
        <div {{ block('widget_container_attributes') }}>
            {%- for child in form %}
                {{- form_widget(child, {
                    parent_label_class: label_attr.class|default(''),
                    translation_domain: choice_translation_domain,
                }) -}}
            {% endfor -%}
        </div>
    {%- endif %}
{%- endblock choice_widget_expanded %}
 */

import { ContainerAttributes, setVars } from 'react-symfony-formview';
import Widget from '../index';

export default class Expanded extends Component {
    render() {
        const widgets = Object.keys(this.props.children).map((key, index, keys) => {
            return <Widget key={uuid.v4()} {...setVars.call(this.props.children[key], {
                parent_label_class: this.props.vars.label_attr.class,
                translation_domain: this.props.vars.choice_translation_domain
            })}/>
        })
        if ('-inline'.indexOf(this.props.vars.label_attr.class) != -1) return widgets;
        return <div {...ContainerAttributes.call(this.props)}>{widgets}</div>
    }
} 