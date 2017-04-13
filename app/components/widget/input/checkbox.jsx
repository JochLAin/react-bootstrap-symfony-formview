'use strict';

import React, { Component } from 'react';

/**
{% block checkbox_widget -%}
    {%- set parent_label_class = parent_label_class|default(label_attr.class|default('')) -%}
    {% if 'checkbox-inline' in parent_label_class %}
        {{- form_label(form, null, { widget: parent() }) -}}
    {% else -%}
        <div class="checkbox">
            {{- form_label(form, null, { widget: parent() }) -}}
        </div>
    {%- endif %}
{%- endblock checkbox_widget %}
 */

import { Checkbox as BaseCheckbox, Label, setVars } from 'react-symfony-formview';

export default class Checkbox extends Component {
    render() {
        const parent_label_class = this.props.vars.parent_label_class || this.props.vars.label_attr.class || '';
        if ('checkbox-inline'.indexOf(parent_label_class) != -1) return <Label {...setVars.call(this.props, { widget: <BaseCheckbox {...this.props} /> })} />
        return <div className="checkbox">
            <Label {...setVars.call(this.props, { widget: <BaseCheckbox {...this.props} /> })} />
        </div>
    }
}