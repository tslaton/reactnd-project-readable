const modules = {
  navbar: require('./navbar'),
  actionBar: require('./action-bar'),
  voter: require('./voter'),
  post: require('./post'),
  comment: require('./comment'),
}

// Namespace the rules
const scopedRules = {}
Object.keys(modules).forEach((moduleName) => {
  const rules = {...modules[moduleName]}
  scopedRules[moduleName] = rules
})

// Remove the namespaces
let allRules = {}
Object.keys(scopedRules).forEach((scope) => {
  const rules = scopedRules[scope]
  allRules = {...allRules, ...rules}
})

export {
  scopedRules,
  allRules,
}