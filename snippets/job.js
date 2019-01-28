// main.js entry point
// the global level source code already schedules
// ScriptJob to initialize functions and make the calls

function firstSyncCall() {
  console.log("I am a sync job");
}

function firstAsyncCall() {
  return Promise.resolve().then(function() {
    console.log("I am an async job");
  });
}

function secondSyncCall() {
  console.log("I am the second sync job");
}

firstSyncCall();
firstAsyncCall();
secondSyncCall();

// results
// I am a sync job
// I am the second sync job
// I am an async job
