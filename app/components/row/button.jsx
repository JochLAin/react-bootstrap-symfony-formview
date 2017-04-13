'use strict';

import React, { Component } from 'react';

/**
{% block button_row -%}
    <div class="form-group">
        {{- form_widget(form) -}}
    </div>
{%- endblock button_row %}
 */

import { Widget } from 'react-symfony-formview';

export default class ButtonRow extends Component {
    render() {
        return <div className="form-group">
            <Widget {...this.props}/>
        </div>
    }
}