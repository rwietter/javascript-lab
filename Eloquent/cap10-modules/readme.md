## JavaScript Modules

### CommonJS

```javascript
const variable = require(`module`);

module.exports = variable;
module.exports = { x, y, z };
```

---

### ModulesES

```javascript
import fun from 'module';
import fun, { foo } from 'module';
import fun, { foo as f } from 'module;

export fun;
export default fun;
export default ["Winter", "Spring", "Summer", "Autumn"];
```

---

### Module Design
