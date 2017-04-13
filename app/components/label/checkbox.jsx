'use strict';

import React, { Component } from 'react';

/**
{% block checkbox_label -%}
    {{- block('checkbox_radio_label') -}}
{%- endblock checkbox_label %}
 */

import { getLabel } from 'react-symfony-formview';

export default class Checkbox extends Component {
    render() {
        const Label = getLabel('checkbox_radio');
        return <Label {...this.props} />
    }
}