// 2.1
var a = 1;
var b = 2;

// 3.1
var item = new Object()

// 3.2
function getKey(k) {
  return `a key named ${k}`;
}

// 3.3
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// 3.4
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  lukeSkywalker: lukeSkywalker,
};

// 3.5
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// 3.6
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// 3.7
console.log(object.hasOwnProperty(key));

// 3.8
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 });

// 4.1
const items = new Array();

// 4.2
const someStack = [];

someStack[someStack.length] = 'abracadabra';

// 4.3
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// 4.7
[1, 2, 3].map((x) => {
  const y = x + 1;
});

inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// 5.1
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// 5.2
const arr = [1, 2, 3, 4];

const first = arr[0];
const second = arr[1];

// 5.3
function processInput(input) {
  return [left, right, top, bottom];
}

// 6.1



