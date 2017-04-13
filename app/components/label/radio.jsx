'use strict';

import React, { Component } from 'react';

/**
{% block radio_label -%}
    {{- block('checkbox_radio_label') -}}
{%- endblock radio_label %}
 */

import { getLabel } from 'react-symfony-formview';

export default class Radio extends Component {
    render() {
        const Label = getLabel('checkbox_radio');
        return <Label {...this.props} />
    }
}