'use strict';

import React, { Component } from 'react';

/**
{% block radio_label -%}
    {{- block('checkbox_radio_label') -}}
{%- endblock radio_label %}
 */

import CheckboxRadioLabel from './checkbox_radio';

export default class Radio extends Component {
    render() {
        return <CheckboxRadioLabel {...this.props} />
    }
}