'use strict';

import React, { Component } from 'react';

/**
{% block time_row -%}
    {% set force_error = true %}
    {{- block('form_row') }}
{%- endblock time_row %}
 */

import Row from './index';

export default class TimeRow extends Component {
    render() {
        return <Row {...setVars.call(this.props, { force_error: true })}/>
    }
}