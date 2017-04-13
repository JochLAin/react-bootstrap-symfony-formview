'use strict';

import React, { Component } from 'react';

/**
{% block checkbox_row -%}
    <div class="form-group{% if not valid %} has-error{% endif %}">
        {{- form_widget(form) -}}
        {{- form_errors(form) -}}
    </div>
{%- endblock checkbox_row %}
 */

import { Errors, Widget } from 'react-symfony-formview';

export default class CheckboxRow extends Component {
    render() {
        return <div className={`form-group ${this.props.vars.valid && 'has-error' || ''}`}>
            <Widget {...this.props}/>
            <Errors {...this.props}/>
        </div>
    }
}