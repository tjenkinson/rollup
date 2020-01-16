import { v as value2 } from './generated-dep2.js';
export { v as value2 } from './generated-dep2.js';

// doesn't import value1, so we can't have also loaded value1?
console.log('main2', value2);
import('./generated-dynamic.js');
