'use strict';

import Form, { set } from 'react-symfony-formview';

set({
    labels: {
        checkbox_radio: require('./components/label/checkbox_radio').default,
        checkbox: require('./components/label/checkbox').default,
        choice: require('./components/label/choice').default,
        default: require('./components/label').default,
        radio: require('./components/label/radio').default,
    },
    rows: {
        button: require('./components/row/button').default,
        checkbox: require('./components/row/checkbox').default,
        choice: require('./components/row/choice').default,
        date: require('./components/row/date').default,
        datetime: require('./components/row/datetime').default,
        default: require('./components/row').default,
        radio: require('./components/row/radio').default,
        time: require('./components/row/time').default,
    },
    widgets: {
        button: require('./components/widget/button').default,
        collapsed: require('./components/widget/choice/collapsed').default,
        expanded: require('./components/widget/choice/expanded').default,
        checkbox: require('./components/widget/input/checkbox').default,
        date: require('./components/widget/input/date').default,
        dateinterval: require('./components/widget/input/dateinterval').default,
        datetime: require('./components/widget/input/datetime').default,
        email: require('./components/widget/input/email').default,
        money: require('./components/widget/input/money').default,
        percent: require('./components/widget/input/percent').default,
        radio: require('./components/widget/input/radio').default,
        text: require('./components/widget/input').default,
        textarea: require('./components/widget/textarea').default,
        time: require('./components/widget/input/time').default,
        url: require('./components/widget/input/url').default,
    }
});

export default Form;
export * from 'react-symfony-formview';
export { default as Button } from './components/widget/button';
export { default as Collapsed } from './components/widget/choice/collapsed';
export { default as Expanded } from './components/widget/choice/expanded';
export { default as Checkbox } from './components/widget/input/checkbox';
export { default as Date } from './components/widget/input/date';
export { default as DateInterval } from './components/widget/input/dateinterval';
export { default as Datetime } from './components/widget/input/datetime';
export { default as Email } from './components/widget/input/email';
export { default as Money } from './components/widget/input/money';
export { default as Percent } from './components/widget/input/percent';
export { default as Radio } from './components/widget/input/radio';
export { default as Text } from './components/widget/input';
export { default as Textarea } from './components/widget/textarea';
export { default as Time } from './components/widget/input/time';
export { default as Url } from './components/widget/input/url';