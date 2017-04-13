'use strict';

import React, { Component } from 'react';

/**
{% block money_widget -%}
    <div class="input-group">
        {% set append = money_pattern starts with '{{' %}
        {% if not append %}
            <span class="input-group-addon">{{ money_pattern|replace({ '{{ widget }}':''}) }}</span>
        {% endif %}
        {{- block('form_widget_simple') -}}
        {% if append %}
            <span class="input-group-addon">{{ money_pattern|replace({ '{{ widget }}':''}) }}</span>
        {% endif %}
    </div>
{%- endblock money_widget %}
 */

import { getWidget, setAttr } from 'react-symfony-formview';

export default class Money extends Component {
    render() {
        const Input = getWidget('text');
        return <div className="input-group">
            { this.props.vars.money_pattern.indexOf('{{') > 0 && (
                <span className="input-group-addon">
                    {this.props.vars.money_pattern.replace('{{ widget }}', '')}
                </span>
            )}
            <Input {...this.props} />
            { this.props.vars.money_pattern.indexOf('{{') == 0 && (
                <span class="input-group-addon">
                    {this.props.vars.money_pattern.replace('{{ widget }}', '')}
                </span>
            )}
        </div>
    }
}