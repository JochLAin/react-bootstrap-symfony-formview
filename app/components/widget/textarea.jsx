'use strict';

import React, { Component } from 'react';

/**
{% block textarea_widget -%}
    {% set attr = attr|merge({class: (attr.class|default('') ~ ' form-control')|trim}) %}
    {{- parent() -}}
{%- endblock textarea_widget %}
 */

import { Textarea as BaseTextarea, setAttr } from 'react-symfony-formview';

export default class Textarea extends Component {
    render() {
        return <BaseTextarea {...setAttr.call(this.props, { class: `${this.props.vars.attr.class || ''} form-control` })} />
    }
}