/**
 * Event loop.
 *
 * Read details here:
 * http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/#job
 *
 * by Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */


/*
 * When there is no running execution context and the execution context stack is empty, 
 * the ECMAScript implementation removes the first pending job from a job queue, 
 * creates an execution context and starts its execution.
 */

/**
 * Call-stack.
 */
const stack = [];

/**
 * Jobs queue.
 */
const jobs = [];

/**
 * Event loop spins, and checks whether something was enqueued.
 * If the execution stack is empty, it picks a job, and executes it.
 * A job can enqueue other jobs.
 * The main-loop
 */

// every 1000 seconds execute this eventLoop() function
setInterval(function eventLoop() {

  console.log(
    `\n    Analyzing jobs queue:`,
    `[${jobs.map(job => job.name).join(', ')}]\n`
  );

  // Something is on the stack, can't run jobs yet.
  if (stack.length) {
    return;
  }

  // Nothing to run.
  if (!jobs.length) {
    return;
  }

  // Pick up the next job, and put it onto the stack.
  const job = jobs.shift(); // removes the first item of an array

  run(job);

}, /* Spin! */ 1000);

/**
 * Executes the code.
 */
function run(activation) {
  // Emulate stack "push-pop".
  stack.push(activation);

  console.log(
    `Running "${activation.name}",stack:`,
    `[${stack.map(context => context.name).join(', ')}]`
  );

  // Run the code.
  activation();

  stack.pop(activation);

}

/**
 * The `postponeCall` waits for the ms, and then
 * enqueues the activation as a job.
 */
function postponeCall(runnable, ms) {
  setTimeout(() => jobs.push(runnable), ms);
}

// -----------------------------------------------------------------------------
// Tests.

function one() {
  run(two);
}

function two() {
  postponeCall(three, 10);
}

function three() {
  postponeCall(four, 10);
  postponeCall(five, 20);
  run(six);
}

function four() {
  return;
}

function five() {
  return;
}

function six() {
  return;
}

// Go!
(function start() {
  // wait 1s, in that interval, start!
  // Enqueue the first call, which will run other functions,
  // and enqueue other postponed calls.
  postponeCall(one, 100);
})();

// -----------------------------------------------------------------------------
// Results:

/*
    Analyzing jobs queue: [one]
Running "one", stack: [one]
Running "two", stack: [one, two]
    Analyzing jobs queue: [three]
Running "three", stack: [three]
Running "six", stack: [three, six]
    Analyzing jobs queue: [four, five]
Running "four", stack: [four]
    Analyzing jobs queue: [five]
Running "five", stack: [five]
    Analyzing jobs queue: []
    Analyzing jobs queue: []
    Analyzing jobs queue: []
    ...
*/ 
