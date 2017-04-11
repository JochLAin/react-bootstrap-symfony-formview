'use strict';

import React, { Component } from 'react';

/**
{% block form_row -%}
    <div class="form-group{% if (not compound or force_error|default(false)) and not valid %} has-error{% endif %}">
        {{- form_label(form) -}}
        {{- form_widget(form) -}}
        {{- form_errors(form) -}}
    </div>
{%- endblock form_row %}
 */

import Errors from '../errors';
import Label from '../label';
import Widget from '../widget';

import ButtonRow from './button';
import CheckboxRow from './checkbox';
import ChoiceRow from './choice';
import DateRow from './date';
import DatetimeRow from './datetime';
import HiddenRow from './hidden';
import RadioRow from './radio';
import TimeRow from './time';

export default class Row extends Component {
    render() {
        const prefixes = this.props.vars.block_prefixes;
        switch (prefixes[1]) {
            case 'checkbox':
                switch (prefixes[2]) {
                    case 'radio': return <RadioRow {...this.props} />
                    default: return <CheckboxRow {...this.props} />
                }
            case 'choice': return <ChoiceRow {...this.props} />
            case 'date': return <DateRow {...this.props} />
            case 'datetime': return <DatetimeRow {...this.props} />
            case 'hidden': return <HiddenRow {...this.props} />
            case 'button':
            case 'reset':
            case 'submit': 
                return <ButtonRow {...this.props} />
            default: 
                return <div className={`form-group ${this.props.vars.compound || this.props.vars.force_error && !this.props.vars.valid && 'has-error' || ''}`}>
                    <Errors {...this.props}/>
                    <Label {...this.props}/>
                    <Widget {...this.props}/>
                </div>
        }
    }
}
