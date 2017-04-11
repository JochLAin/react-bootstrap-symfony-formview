'use strict';

import React, { Component } from 'react';

/**
{% block radio_row -%}
    <div class="form-group{% if not valid %} has-error{% endif %}">
        {{- form_widget(form) -}}
        {{- form_errors(form) -}}
    </div>
{%- endblock radio_row %}
 */

import Errors from '../errors';
import Widget from '../widget';

export default class RadioRow extends Component {
    render() {
        return <div className={`form-group ${this.props.vars.valid && 'has-error' || ''}`}>
            <Widget {...this.props}/>
            <Errors {...this.props}/>
        </div>
    }
}