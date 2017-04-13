'use strict';

import React, { Component } from 'react';

/**
{% block form_row -%}
    <div class="form-group{% if (not compound or force_error|default(false)) and not valid %} has-error{% endif %}">
        {{- form_label(form) -}}
        {{- form_widget(form) -}}
        {{- form_errors(form) -}}
    </div>
{%- endblock form_row %}
 */

import { Errors, Label, Widget } from 'react-symfony-formview';

export default class Row extends Component {
    render() {
        return <div className={`form-group ${this.props.vars.compound || this.props.vars.force_error && !this.props.vars.valid && 'has-error' || ''}`}>
            <Errors {...this.props}/>
            <Label {...this.props}/>
            <Widget {...this.props}/>
        </div>
    }
}
