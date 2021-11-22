# Yehez-Shipper

![[Mini Image]](https://socialify.git.ci/yehezkielgunawan/yehez-shipper-test/image?description=1&font=Inter&logo=https%3A%2F%2Fassets-cdn.shipper.id%2Fshipper-id-v5-web%2Frelease-5.4.2%2Fassets%2Fimages%2Flogo-shipper.svg&name=1&owner=1&pattern=Formal%20Invitation&theme=Dark)

[![forthebadge](https://res.cloudinary.com/yehez/image/upload/v1635325228/made-by-typescript_mz1tue.svg)](https://forthebadge.com)

Base requirement and mini-project scope: **[here](https://drive.google.com/file/d/1pUQ3U_YIaC9Cs0zzPMdFqTrRo1-mu_5a/view?usp=sharing)**

Live demo can be accessed at [shipper.yehezgun.com](https://shipper.yehezgun.com).

This project is scaffolded using my own starter template at [yehez-vitechakra-starter](https://github.com/yehezkielgunawan/yehez-vitechakra-starter).

## What I'm using here?

- [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) as build tool.
- [Chakra UI](https://chakra-ui.com/docs/getting-started) as UI Library.
- [React JS](https://reactjs.org/) as the main library code.
- [Axios](https://axios-http.com/) for HTTP Request.
- [React Router](https://reactrouter.com/) for routing process.
- [Random User API](https://randomuser.me/api/?results=30) as dummy user data list.

## ⚡ What's included here?

- Toolings for linting, formatting, and conventions configured. <br>
  eslint, prettier, husky & lint-staged
- ✨Basic responsive layout configuration using [Chakra UI Responsive Style](https://chakra-ui.com/docs/features/responsive-styles)

## How to use it?

- Open [shipper.yehezgun.com](https://shipper.yehezgun.com)
- There are 3 pages in this project: `Home`, `Driver Management`, and `Pickup`. For this case, I just focused on finishing the `Driver Management` feature based on the project scope **[here](https://drive.google.com/file/d/1pUQ3U_YIaC9Cs0zzPMdFqTrRo1-mu_5a/view?usp=sharing)**.
- You can access the `Driver Management` page through the navigation sidebar or the button at the `Home` page.
- Each page of the driver data list just shows **5 drivers**.
- You can go to the next or previous page by clicking the `Next or Previous Button` below the web page.
- When the first page loads, the `Previous Button` will be disabled.
  ![First Page](https://res.cloudinary.com/yehez/image/upload/v1637574843/Shipper/First_page_bsqpmg.png)
- When the page shows the last 5 users, the `Next Button` will be disabled.
  ![Last Page](https://res.cloudinary.com/yehez/image/upload/v1637574846/Shipper/Last_page_y9fia3.png)
- You can also search your driver using the `Search Input Column` above the driver list. It will find your driver **based on the driver's first name**.
  ![Search Feature](https://res.cloudinary.com/yehez/image/upload/v1637574843/Shipper/Search_feature_rgmsq2.png)
- Open the web through your mobile phone? Don't worry the UI will be responsive according to your device width.
  ![Mobile View](https://res.cloudinary.com/yehez/image/upload/v1637574843/Shipper/Mobile_view_zzkpl3.jpg)

## References

- [Vite Docs](https://vitejs.dev/) - Learn about Vite and its features
- [Chakra UI](https://chakra-ui.com/) - UI component
- [Typescript](https://www.typescriptlang.org/) - The programming language
- [Yehez-Markdown-Editor](https://markdown.yehezgun.com/) - My own markdown live preview to generate this README.md.

## Test Case Check List

- [x] Each page shows 5 drivers
- [x] By Clicking the “Next Page” button, show the next 5 users.
- [x] By Clicking the “Previous Page” button, show the previous 5 users.
- [x] Disable the pagination buttons according to the user count. For example, when
      the page first loads, the “Previous Page” button is disabled. When the page shows
      the last 5 users, the “Next Page” button is disabled.
- [x] Input text “Cari Driver” searches drivers by their first name.
- [x] Application was deployed to [shipper.yehezgun.com](https://shipper.yehezgun.com) using [Vercel](https://vercel.com/).

## Behind The Scene Story

### The Whys

In this project, I didn't use any state management library like Redux, because I had never used it before and needed more time to learn the fundamentals.

Why do I use [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) as a build tool?\
It's just a trial, I just want to try this tool through this project. By the way, this is the first technical test which I made using [my own Vite Starter Template](https://github.com/yehezkielgunawan/yehez-vitechakra-starter).

Why I didn't make unit testing?\
Actually, I ever made unit testing using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) when I made my own Link Shortener at [link.yehezgun.com](https://link.yehezgun.com/). But it was a [Next.js](https://nextjs.org/) project and it has a very different config style. So I felt very overwhelmed when tried to config the React Testing Library in this project.

### A Little About The Code

To avoid the data does not refresh when the page is reloaded, I save the driver list in the local storage. The logic detail can be seen at `src\components\driver\index.tsx`. So the page will check if there is the driver list data in the local storage, the state will use the data from the local storage (not re-fetch the data again from the API).
