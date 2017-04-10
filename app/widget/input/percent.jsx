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

import Input from './index';

export default class Integer extends Component {
    render() {
        return <div className="input-group">
            <Input {...this.props} />
            <span className="input-group-addon">%</span>
        </div>
    }
}