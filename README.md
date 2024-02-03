This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Make sure you have a local postgresql server and database and its up and running

eg. on mac
```bash
brew services start postgresql@14 
```

create a .env file and add the following 

DATABASE_URL="postgresql://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&...]"

AUTH_SECRET="ENTER_YOUR_SECRET_KEY_HERE" #You can generate it using openssl rand -base64 32

Then, run npm i

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
