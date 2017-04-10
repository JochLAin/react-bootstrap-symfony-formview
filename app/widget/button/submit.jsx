'use strict';

import React, { Component } from 'react';

/**
{%- block submit_widget -%}
    {%- set type = type|default('submit') -%}
    {{ block('button_widget') }}
{%- endblock submit_widget -%}
 */

import { setVars } from 'react-symfony-formview';
import Button from './index';

export default class Submit extends Component {
    render() {
        return <Button {...setVars.call(this.props, {
            type: this.props.vars.type || "submit"
         })} />
    }
}