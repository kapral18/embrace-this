// This is more condensed view of what just happened
// after runJobs() started all the way up to
// establishing global context
// but before main script initialization

const Realm = CreateRealm();
const GlobalObject = ObjectCreate(
  Realm["[[intrinsics]]"]["[[% ObjectPrototype %]]"]
);

//pseudocode
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
