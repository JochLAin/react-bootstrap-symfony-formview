'use strict';

import React, { Component } from 'react';

/**
{%- block hidden_row -%}
    {{ form_widget(form) }}
{%- endblock hidden_row -%}
 */

import Widget from '../widget';

export default class HiddenRow extends Component {
    render() {
        return <Widget {...this.props} />
    }
}