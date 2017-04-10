'use strict';

import React, { Component } from 'react';

/**
{% block form_label -%}
    {%- set label_attr = label_attr|merge({class: (label_attr.class|default('') ~ ' control-label')|trim}) -%}
    {{- parent() -}}
{%- endblock form_label %}
 */

import { setVars } from 'react-symfony-formview';
import BaseLabel from './index';

export default class Label extends Component {
    render() {
        let label_attr = this.props.vars.label_attr;
        label_attr = Object.assign({}, label_attr, { class: `${label_attr && label_attr.class || ''} control-label` });
        // return <BaseLabel {...setVars.call(this.props, { label_attr })} />
        return <div></div>
    }
}