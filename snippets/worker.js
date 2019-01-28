// In the `index.html`:

// Shared data between this agent, and another worker.
let sharedHeap = new SharedArrayBuffer(16);

// Our view of the data.
let heapArray = new Int32Array(sharedHeap);

// Create a new agent (worker).
let agentSmith = new Worker("agent-smith.js");

agentSmith.onmessage = message => {
  // Agent sends the index of the data it modified.
  let modifiedIndex = message.data;

  // Check the data is modified:
  console.log(heapArray[modifiedIndex]); // 100
};

// Send the shared data to the agent.
agentSmith.postMessage(sharedHeap);

// agent-smith.js

/**
 * Receive shared array buffer in this worker.
 */
onmessage = message => {
  // Worker's view of the shared data.
  let heapArray = new Int32Array(message.data);

  let indexToModify = 1;
  heapArray[indexToModify] = 100;

  // Send the index as a message back.
  postMessage(indexToModify);
};
