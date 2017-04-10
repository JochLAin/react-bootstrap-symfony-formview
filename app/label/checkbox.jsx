'use strict';

import React, { Component } from 'react';

/**
{% block checkbox_label -%}
    {{- block('checkbox_radio_label') -}}
{%- endblock checkbox_label %}
 */

import CheckboxRadioLabel from './checkbox_radio';

export default class Checkbox extends Component {
    render() {
        return <CheckboxRadioLabel {...this.props} />
    }
}