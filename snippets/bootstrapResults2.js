// Stage1
const GlobalExecutionContext = {
  Realm: {
    "[[GlobalObject]]": GlobalObject,
    "[[GlobalEnvironment]]": {
      EnvironmentRecord: {
        "[[GlobalThisValue]]": GlobalObject
      },
      outer: null
    }
  }
};

const ExecutionStack = [GlobalExecutionContext];

// Stage2
const GlobalExecutionContext = {
  Realm: {
    "[[GlobalObject]]": GlobalObject,
    "[[GlobalEnvironment]]": {
      EnvironmentRecord: {
        "[[GlobalThisValue]]": GlobalObject
      },
      outer: null
    }
  }
};

const MainScriptContext = {
  LexicalEnvironment: Realm["[[GlobalEnvironment]]"],
  VariableEnvironment: Realm["[[GlobalEnvironment]]"]
};
// pseudocode, this is where our let x = 1, should be bound to global env
initializeDeclarations(MainScriptContext.LexicalEnvironment);

const ExecutionStack = [MainScriptContext, GlobalExecutionContext];

// Stage 3
const GlobalExecutionContext = {
  Realm: {
    "[[GlobalObject]]": GlobalObject,
    "[[GlobalEnvironment]]": {
      EnvironmentRecord: {
        "[[GlobalThisValue]]": GlobalObject,
        "[[DeclarativeRecord]]": {
          x: 1
        }
      },
      outer: null
    }
  }
};

const ExecutionStack = [GlobalExecutionContext];
