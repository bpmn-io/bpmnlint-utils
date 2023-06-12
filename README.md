# bpmnlint-utils

[![CI](https://github.com/bpmn-io/bpmnlint-utils/workflows/CI/badge.svg)](https://github.com/bpmn-io/bpmnlint-utils/actions?query=workflow%3ACI)

Utilities for creating bpmnlint rules.


## Usage

```javascript
import {
  is,
  isAny
} from 'bpmnlint-utils';

is(moddleElement, 'bpmn:ServiceTask'); // true || false
isAny(moddleElement, [ 'bpmn:Task', 'bpmn:Event' ]); // true || false
```


## License

MIT
