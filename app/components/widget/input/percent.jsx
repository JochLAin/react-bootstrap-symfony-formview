'use strict';

import React, { Component } from 'react';

/**
{% block percent_widget -%}
    <div class="input-group">
        {{- block('form_widget_simple') -}}
        <span class="input-group-addon">%</span>
    </div>
{%- endblock percent_widget %}
 */

import { getWidget } from 'react-symfony-formview';

export default class Integer extends Component {
    render() {
        const Input = getWidget('text');
        return <div className="input-group">
            <Input {...this.props} />
            <span className="input-group-addon">%</span>
        </div>
    }
}