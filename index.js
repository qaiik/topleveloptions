function tlo(o, op, d) {
  let out = {}
  op = {...d, ...op}
  for (const key of Object.keys(o)) {
    if (op[key]) {
      out[key] = o[key] 
    }
  }
  
  return out
}

if (module && module.exports) module.exports = tlo
