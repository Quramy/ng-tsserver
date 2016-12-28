if (typeof ts === "undefined") {
  ts =  {};
}
var ts;
try {
  const NgLanguageServicePlugin = require("@angular/language-service")().default;
  var delegate;
  Object.defineProperty(ts, "createLanguageService", {
    get: function() {
      return function(host, documentRegistry) {
        const ls = delegate(host, documentRegistry);
        const nglsp = new NgLanguageServicePlugin({
          host: host,
          service: ls,
          registry: documentRegistry
        });
        const completionFn = ls.getCompletionsAtPosition;
        const samnticCheckFn = ls.getSemanticDiagnostics;
        ls.getCompletionsAtPosition = (filename, position) => {
          const ngResult = nglsp.getCompletionsAtPosition(filename, position);
          if (ngResult)
            return ngResult;
          return completionFn(filename, position);
        };
        ls.getSemanticDiagnostics = (fileName) => {
          return nglsp.getSemanticDiagnosticsFilter(fileName, samnticCheckFn(fileName));
        };
        return ls;
      }
    },
    set: function(v) {
      delegate = v;
    },
    configurable: true,
    enumerable: true
  });
} catch(e) { }
