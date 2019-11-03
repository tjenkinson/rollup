---
title: Developer Guide
---

### Acorn

### Graph
- Builds the AST with Acorn.
- Loads the plugins.
- Instantiates a `ModuleLoader`.
- Parsing stage
  - Takes the entry module(s), finds the modules it imports, and then imports all those continuing until all necessary modules are imported.
- Analysing stage (linking)
  - Populate the dependency links and determine the topological execution order for the bundle
- Marking stage
  - include all statements that should be included
- generation stage
  - construct the chunks, working out the optimal chunking using entry point graph colouring, before generating the import and export facades

### Module Loader
This is responsible for loading the module code and creating instances of `Module`. It also looks in the shared module cache. It also loads in all dependency modules.

Calls `setSource()` on `Module` which generates the AST (or uses an existing AST if one was provided). 

Analyses the AST


### Module
 `setSource()` on `Module` generates the ast (esTreeAst) (or uses an existing AST if one was provided). Creates a `MagicString`. Creates `ModuleScope`. Creates `Program` which is a `Node` that has analysed AST.

### Node (NodeBase)

- `keys`: The property names that point to other `Node`'s that are part of the current `Node`.
- `parent`: Parent `Node` (or special case when `Node` is `Program`).
- `context`: context of parent
- `scope`: scope of parent
- `parseNode()` (called in constructor): Adds the other properties to the object such as `type`, `start`, `end` and constructs new instances of the correct `Node` classes for the other object properties. E.g. `IfStatement` node will have a `test` property of type `Expression`, `consequent` of type `Statement` and optional `alternate`.
- `bind()`: Called once all nodes have been initialised and the scopes have been populated.
- `declare()`: Declares a new variable.
- `hasEffects()`: Returns `true` if the `Node` has an effect on the bundle.
- `shouldBeIncluded()`: Determine if the `Node` has an effect on the bundle and should therefore be included.
- `include()`: Called to include the `Node` in the bundle.
- `includeWithAllDeclaredVariables()`: similar to `include()`.
- `render()`: output the code for the `Node`.

#### bind()
TODO example

#### declare()
Declare a new variable. This only applies to some nodes, such as `Identifier`.
TODO why does this exist for all nodes?

TODO example

#### hasEffects()
TODO example

#### shouldBeIncluded()
TODO example

#### include()
TODO example

### Program
The root `Node` for a `Module`.

### Chunk

### AST

### Finalisers

### PathTracker

