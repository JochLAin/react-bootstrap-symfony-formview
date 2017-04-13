'use strict';

import uuid from 'uuid';
import React, { Component } from 'react';

/**
{% block choice_widget_collapsed -%}
    {% set attr = attr|merge({class: (attr.class|default('') ~ ' form-control')|trim}) %}
    {{- parent() -}}
{%- endblock %}
 */

import { Collapsed as BaseCollapsed, setAttr } from 'react-symfony-formview';

export default class Collapsed extends Component {
    render() {
        return <BaseCollapsed {...setAttr.call(this.props, { class: `${this.props.vars.attr.class || ''} form-control` })} />
    }
}