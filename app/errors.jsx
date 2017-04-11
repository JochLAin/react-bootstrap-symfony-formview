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
        if (!this.props.vars.errors) return <span></span>

        const errors = <ul className="list-unstyled">
            { this.props.vars.errors.map(error => <li>{error.message}</li>)}
        </ul>
        if (!this.props.parent) return <span class="help-block">{errors}</span>
        return <div className="alert alert-danger">{errors}</div>
    }
}