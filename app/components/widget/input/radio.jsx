'use strict';

import React, { Component } from 'react';

/**
{% block radio_widget -%}
    {%- set parent_label_class = parent_label_class|default(label_attr.class|default('')) -%}
    {% if 'radio-inline' in parent_label_class %}
        {{- form_label(form, null, { widget: parent() }) -}}
    {% else -%}
        <div class="radio">
            {{- form_label(form, null, { widget: parent() }) -}}
        </div>
    {%- endif %}
{%- endblock radio_widget %}
 */
import { Label, Radio as BaseRadio, setVars } from 'react-symfony-formview';

export default class Radio extends Component {
    render() {
        const parent_label_class = this.props.vars.parent_label_class || this.props.vars.label_attr.class || '';
        if ('radio-inline'.indexOf(parent_label_class) != -1) return <Label {...setVars.call(this.props, { widget: <BaseRadio {...this.props} /> })} />
        return <div className="radio">
            <Label {...setVars.call(this.props, { widget: <BaseRadio {...this.props} /> })} />
        </div>
    }
}