# 📓 Sajeon A Korean English Dictionary Application 
> A simple, responsive Korean & English dictionary.

![screen-gif](./sajeon.gif)

## Guide
- [📓 Sajeon A Korean English Dictionary Application](#-sajeon-a-korean-english-dictionary-application)
  - [Guide](#guide)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Local Setup](#local-setup)
  - [Useful Commands](#useful-commands)
  - [Contributing](#contributing)
  - [Technologies](#technologies)

## Getting Started 



### Prerequisites
This project uses node version 16.13.0 or greater.

Also, there are three required environment files. Please contact the admins to get a copy of the proper environment variables. 

```
.env.production
.env.development
.env.test
```

### Local Setup
1. Clone the respository.
```bash
$ git clone https://github.com/BryanAM/sajeon.git
#  for ssh
& git clone git@github.com:BryanAM/sajeon.git
```
2. Install the packages.
```bash
$ npm install
```
1. Start Sajeon
```bash
$ npm run dev
```

sajeon will default to port: 8080

To run with DB permissions you'll need to reach out to the owners to get access.

## Useful Commands

|Command | Description |
|--------|-------------|
| `npm run:all` |  Run all tests |
| `npm run test` | Run component tests in sajeon|
| `npm run test-e2e` | run all playwrite tests |

## Contributing 
Sajeon uses next lint and prettier for eslint adherence.


## Technologies
* [nextjs](https://nextjs.org)
* [shadcn/ui](https://ui.shadcn.com)
* [radix-ui](https://www.radix-ui.com)
* [tailwindcss](https://tailwindcss.com)
* [clsx](https://github.com/lukeed/clsx#readme)
* [mongoose & mongodb](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/)
* [Lucide Icons](https://lucide.dev) 
* [eslint](https://eslint.org)
