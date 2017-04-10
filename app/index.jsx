'use strict';

import React, { Component } from 'react';

/**
{%- block form_start -%}
    {% set method = method|upper %}
    {%- if method in ["GET", "POST"] -%}
        {% set form_method = method %}
    {%- else -%}
        {% set form_method = "POST" %}
    {%- endif -%}
    <form name="{{ name }}" method="{{ form_method|lower }}"{% if action != '' %} action="{{ action }}"{% endif %}{% for attrname, attrvalue in attr %} {{ attrname }}="{{ attrvalue }}"{% endfor %}{% if multipart %} enctype="multipart/form-data"{% endif %}>
    {%- if form_method != method -%}
        <input type="hidden" name="_method" value="{{ method }}" />
    {%- endif -%}
{%- endblock form_start -%}

{%- block form_end -%}
    {%- if not render_rest is defined or render_rest -%}
        {{ form_rest(form) }}
    {%- endif -%}
    </form>
{%- endblock form_end -%}
 */

import { Attributes } from 'react-symfony-formview';
import Rest from './rest';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let method = this.props.vars.method.toUpperCase();
        let form_method = 'POST';
        if(['GET', 'POST'].indexOf(method) != -1) form_method = method;

        return <form method={method} action={this.props.vars.action} {...Attributes.call(this.props, { class: `${this.props.vars.attr.class || ''} form` })} encType={this.props.vars.multipart && 'multipart/form-data'}>
            { form_method != method && (
                <input type="hidden" name="_method" value={method} />
            )}
            <Rest {...this.props} rendered={this.state.rendered} />
        </form>
    }
}

export { Attributes, ButtonAttributes, ContainerAttributes, WidgetAttributes, setVars, setAttr, getAttr } from 'react-symfony-formview';

export { default as Label } from './label';
export { default as ButtonLabel } from './label/button';
export { default as CheckboxRadioLabel } from './label/checkbox_radio';
export { default as CheckboxLabel } from './label/checkbox';
export { default as ChoiceLabel } from './label/choice';
export { default as RadioLabel } from './label/radio';

export { default as Row } from './row';
export { default as ButtonRow } from './row/button';
export { default as CheckboxRow } from './row/checkbox';
export { default as ChoiceRow } from './row/choice';
export { default as DateRow } from './row/date';
export { default as DatetimeRow } from './row/datetime';
export { default as HiddenRow } from './row/hidden';
export { default as RadioRow } from './row/radio';
export { default as Repeated } from './row/repeated';
export { default as TimeRow } from './row/time';

export { default as Widget } from './widget';
export { default as Button } from './widget/button';
export { default as Reset } from './widget/button/reset';
export { default as Submit } from './widget/button/submit';
export { default as Collection } from './widget/collection';
export { default as Compound } from './widget/compound';
export { default as Checkbox } from './widget/checkbox';
export { default as Choice } from './widget/choice';
export { default as Date } from './widget/input/date';
export { default as DateTime } from './widget/input/datetime';
export { default as DateInterval } from './widget/input/dateinterval';
export { default as Email } from './widget/input/email';
export { default as File } from './widget/file';
export { default as Hidden } from './widget/input/hidden';
export { default as Input } from './widget/input';
export { default as Integer } from './widget/input/integer';
export { default as Money } from './widget/input/money';
export { default as Number } from './widget/input/number';
export { default as Password } from './widget/input/password';
export { default as Percent } from './widget/input/percent';
export { default as Radio } from './widget/radio';
export { default as Range } from './widget/input/range';
export { default as Search } from './widget/input/search';
export { default as Textarea } from './widget/textarea';
export { default as Time } from './widget/input/time';
export { default as Url } from './widget/input/url';

export { default as Rest } from './rest';
export { default as Errors } from './errors';
export { default as Rows } from './rows';
