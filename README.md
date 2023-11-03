# Frontend Interview Assessment

## Overview

This project is a technical assessment for a frontend developer position.
<br/>
It is a reproduction of the [https://www.askuni.com/search/](https://www.askuni.com/search/) page.

<br/>
The following features are implemented: 

- Filtering form, ordering, search bar and pagination
- in-URL state management
- Responsive design

Additional features:
- Filter by fees type (Yearly, Full tuition,...)
- Filter by price range


**Everyhing on the page is clickable and functional.**

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 19.7)
- [Yarn](https://yarnpkg.com/en/) (>= 1.22.19)

### Installing

1. Clone the repository if not done yet

```bash
git clone https://github.com/YacineSteeve/frontend-interview.git
```

2. Install Pocketbase for the database.

Go on [Pocketbase](https://pocketbase.io/) and download the archive depending on your OS.

3. Extract the archive in the following directory in the project:

```bash
/src/database/
```

> 
> **Note:** You should have the following content in this directory:
> 
> ```bash
> src/database/
> ├── pb_data
> ├── pb_migrations
> ├── pocketbase.exe (or `pocketbase` on Linux)
> ├── client.ts
> ├── CHANGELOG.md
> └── LICENSE.md
> ```
> 

3. Install the dependencies in the project's root directory:

```bash
yarn install
```

Everything is now set up to run the project.

### Running

To run the project, run the following command in the root directory:

```bash
yarn run-all
```

>
> **Note:** You should have the following output:
> ```bash
> yarn run v1.22.19
> $ npm-run-all --parallel db:start dev
> $ ./src/database/pocketbase serve
> $ next dev
> XXXX/XX/XX XX:XX:XX Server started at http://127.0.0.1:8090
> ├── REST API: http://127.0.0.1:8090/api/
> └── Admin UI: http://127.0.0.1:8090/_/
>    - Next.js 14.0.0
>    - Local:        http://localhost:3000
> 
> Ready in XX.XXs.
>  

<br/>
The project will be available at [http://localhost:3000](http://localhost:3000)

## Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pocketbase](https://pocketbase.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/YacineSteeve/frontend-interview/blob/main/LICENSE) file for details

## Author

[Yacine BOUKARI](https://github.com/YacineSteeve) <<a href="mailto:steeveboukari9@gmail.com">steeveboukari9@gmail.com</a>>
