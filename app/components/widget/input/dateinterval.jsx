'use strict';

import React, { Component } from 'react';

/**
{%- block dateinterval_widget -%}
    {%- if widget == 'single_text' -%}
        {{- block('form_widget_simple') -}}
    {%- else -%}
        {%- set attr = attr|merge({class: (attr.class|default('') ~ ' form-inline')|trim}) -%}
        <div {{ block('widget_container_attributes') }}>
            {{- form_errors(form) -}}
            {%- if with_years %}{{ form_widget(form.years) }}{% endif -%}
            {%- if with_months %}{{ form_widget(form.months) }}{% endif -%}
            {%- if with_weeks %}{{ form_widget(form.weeks) }}{% endif -%}
            {%- if with_days %}{{ form_widget(form.days) }}{% endif -%}
            {%- if with_hours %}{{ form_widget(form.hours) }}{% endif -%}
            {%- if with_minutes %}{{ form_widget(form.minutes) }}{% endif -%}
            {%- if with_seconds %}{{ form_widget(form.seconds) }}{% endif -%}
            {%- if with_invert %}{{ form_widget(form.invert) }}{% endif -%}
        </div>
    {%- endif -%}
{%- endblock dateinterval_widget -%}
 */

import { ContainerAttributes, Errors, Label, Widget, getWidget, setAttr } from 'react-symfony-formview';

export default class DateInterval extends Component {
    render() {
        if (this.props.vars.widget == 'single_text') {
            const Input = getWidget('text');
            return <Input {...this.props} />
        }

        const classname = `${this.props.vars.class || ''} form-inline`;
        return <article {...ContainerAttributes.call(this.props)}>
            <Errors {...this.props} />
            { this.props.vars.with_years && <Widget {...setAttr.call(this.props.children.years, {class: classname})}/> }
            { this.props.vars.with_months && <Widget {...setAttr.call(this.props.children.months, {class: classname})}/> }
            { this.props.vars.with_weeks && <Widget {...setAttr.call(this.props.children.weeks, {class: classname})}/> }
            { this.props.vars.with_days && <Widget {...setAttr.call(this.props.children.days, {class: classname})}/> }
            { this.props.vars.with_hours && <Widget {...setAttr.call(this.props.children.hours, {class: classname})}/> }
            { this.props.vars.with_minutes && <Widget {...setAttr.call(this.props.children.minutes, {class: classname})}/> }
            { this.props.vars.with_seconds && <Widget {...setAttr.call(this.props.children.seconds, {class: classname})}/> }
            { this.props.vars.with_inverts && <Widget {...setAttr.call(this.props.children.invert, {class: classname})}/> }
        </article>
    }
}