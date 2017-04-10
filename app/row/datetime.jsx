'use strict';

import React, { Component } from 'react';

/**
{% block datetime_row -%}
    {% set force_error = true %}
    {{- block('form_row') }}
{%- endblock datetime_row %}
 */

import Row from './index';

export default class DatetimeRow extends Component {
    render() {
        return <Row {...setVars.call(this.props, { force_error: true })}/>
    }
}