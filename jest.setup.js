// jest.setup.js

import '@testing-library/jest-dom'
import { TextDecoder, TextEncoder } from 'util';
const dotenv = require('dotenv');

// force test to use .env.test file
dotenv.config({ path: './.env.test' });

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;
