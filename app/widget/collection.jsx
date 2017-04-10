'use strict';

import React, { Component } from 'react';

/**
{%- block collection_widget -%}
    {% if prototype is defined %}
        {%- set attr = attr|merge({'data-prototype': form_row(prototype) }) -%}
    {% endif %}
    {{- block('form_widget') -}}
{%- endblock collection_widget -%}
 */

import { setAttr } from 'react-symfony-formview';
import Widget from './index';

export default class Collection extends Component {
    render() {
        return <Widget {...setAttr.call(this.props, {
            'data-prototype': this.props.vars.prototype
        })} />
    }
}