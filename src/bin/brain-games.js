#!/usr/bin/env node
import askName from '../games/greeting';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}`);
