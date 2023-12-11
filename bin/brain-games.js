#!/usr/bin/env node
import { whatYourName } from '../src/cli.js';

console.log("Welcome to the Brain Games!");
const playerName = whatYourName();
console.log(`Hello, ${playerName}!`);