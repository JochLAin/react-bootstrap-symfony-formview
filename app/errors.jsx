'use strict';

import React, { Component } from 'react';

/**
{% block form_errors -%}
    {% if errors|length > 0 -%}
    {% if form.parent %}<span class="help-block">{% else %}<div class="alert alert-danger">{% endif %}
    <ul class="list-unstyled">
        {%- for error in errors -%}
            <li><span class="glyphicon glyphicon-exclamation-sign"></span> {{ error.message }}</li>
        {%- endfor -%}
    </ul>
    {% if form.parent %}</span>{% else %}</div>{% endif %}
    {%- endif %}
{%- endblock form_errors %}
 */

export default class Errors extends Component {
    render() {
        return <ul>
            {/*{ this.props.vars.errors != {} && this.props.vars.errors.map(error => <li>{error.message}</li> )}*/}
        </ul>
    }
}