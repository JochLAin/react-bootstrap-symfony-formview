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

import { ContainerAttributes, setAttr } from 'react-symfony-formview';
import Errors from '../../errors';
import Input from './index';
import Widget from '../index';

export default class DateInterval extends Component {
    render() {
        if (widget == 'single_text') return <Input {...this.props} />
        
        const classname = `${this.props.vars.class || ''} form-inline`;
        return <article {...ContainerAttributes.call(this.props)}>
            <Errors {...this.props} />
            { this.props.vars.with_years && <Widget {...setAttr(this.props.children.year, {class: classname})}/> }
            { this.props.vars.with_months && <Widget {...setAttr(this.props.children.month, {class: classname})}/> }
            { this.props.vars.with_weeks && <Widget {...setAttr(this.props.children.week, {class: classname})}/> }
            { this.props.vars.with_days && <Widget {...setAttr(this.props.children.day, {class: classname})}/> }
            { this.props.vars.with_hours && <Widget {...setAttr(this.props.children.hour, {class: classname})}/> }
            { this.props.vars.with_minutes && <Widget {...setAttr(this.props.children.minute, {class: classname})}/> }
            { this.props.vars.with_seconds && <Widget {...setAttr(this.props.children.second, {class: classname})}/> }
            { this.props.vars.with_inverts && <Widget {...setAttr(this.props.children.invert, {class: classname})}/> }
        </article>
    }
}