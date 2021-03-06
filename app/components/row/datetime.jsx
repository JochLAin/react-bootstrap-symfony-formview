'use strict';

import React, { Component } from 'react';

/**
{% block datetime_row -%}
    {% set force_error = true %}
    {{- block('form_row') }}
{%- endblock datetime_row %}
 */

import { Errors, Label, Widget, setVars } from 'react-symfony-formview';

export default class DatetimeRow extends Component {
    render() {
        return <div className={`form-group ${this.props.vars.compound || this.props.vars.force_error && !this.props.vars.valid && 'has-error' || ''}`}>
            <Errors {...setVars.call(this.props, { force_error: true })}/>
            <Label {...setVars.call(this.props, { force_error: true })}/>
            <Widget {...setVars.call(this.props, { force_error: true })}/>
        </div>
    }
}