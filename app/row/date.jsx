'use strict';

import React, { Component } from 'react';

/**
{% block choice_row -%}
    {% set force_error = true %}
    {{- block('form_row') }}
{%- endblock choice_row %}
 */

import Row from './index';

export default class DateRow extends Component {
    render() {
        return <Row {...setVars.call(this.props, { force_error: true })}/>
    }
}