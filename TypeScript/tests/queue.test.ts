import { newArrayIntQueue } from '../src/arrayqueue'
import { newLinkedListIntQueue } from '../src/linkedlistqueue.js'

// pick one queue implementation, can run test easily for both, due to subtype polymorphism
const createQueue = newLinkedListIntQueue
// let createQueue = newArrayIntQueue

// TODOs:
// write more test cases to test dequeue and clear functions.

test('test isEmpty: newly created list should be empty', () => {
  expect(createQueue().isEmpty()).toBeTruthy()
})

test('test isEmpty: list with 1 element is not empty', () => {
  const queue = createQueue()
  queue.enqueue(2)
  expect(queue.isEmpty()).toBeFalsy()
})

test('test peek: newly created list should peek null', () => {
  expect(createQueue().peek()).toBeNull()
})

test('test peek: queue with 2 element should peek the one that was most recently added', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.enqueue(3)
  expect(queue.peek()).toEqual(3)
})

// TODO: write tests for clear and dequeue
test('test clear: queue with 2 element should be clear', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.enqueue(3)
  queue.clear()
  expect(queue.isEmpty()).toBeTruthy()
})

// have to test both size and return value
test('test dequeue: queue with 2 element should dequeue the one that was most recently added', () => {
  const queue = createQueue()
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  const elem = queue.dequeue()
  expect(queue.size()).toBe(2)
  expect(elem).toBe(1)
})

test('test dequeue: empty queue should return null', () => {
  const queue = createQueue()
  const elem = queue.dequeue()
  expect(queue.isEmpty()).toBeTruthy()
  expect(elem).toBe(null)
})

const param = [5, 10, 1000000]
// parameterized test, apply to each value of the parameter
test.each(param)('test enqueue: enqueued number %d is correct', (nr) => {
  const queue = createQueue()
  queue.enqueue(nr)
  expect(queue.peek()).toBe(nr)
})

// can nest tests with shared descriptions for better readability
describe('test size: ', () => {
  test('1 entry', () => {
    const queue = createQueue()
    queue.enqueue(5)
    expect(queue.size()).toBe(1)
  })

  test('11 entries', () => {
    const queue = createQueue()
    for (let i = 0; i < 11; i++) { queue.enqueue(i) }
    expect(queue.size()).toBe(11)
  })
})
