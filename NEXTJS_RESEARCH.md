# Next.js General Research

## What is Next.js?

Next.js is a framework built on React. It helps developers build web applications without having to set up everything from scratch.

It provides features like routing, rendering, data fetching and server-side functionality.

## Next.js and React

React is mainly used for building the user interface.

Next.js uses React, but adds more features around it. For example, Next.js provides routing and different ways of rendering pages.

So, React is the main UI library, while Next.js provides a complete framework around it.

## Main features I found

Some of the main features of Next.js are:

* File-based routing
* App Router
* Server and Client Components
* Different rendering methods
* Data fetching
* Route Handlers
* Image and font optimization
* Full-stack development

## Project structure

With the App Router, most of the application is inside the `app` folder.

A simple project can look like this:

```text
app/
├── page.tsx
├── layout.tsx
└── about/
    └── page.tsx

public/
package.json
next.config.ts
```

`page.tsx` is used to create a page and `layout.tsx` can be used to create a shared layout.

## App Router

The App Router is the newer routing system in Next.js.

The folders inside the `app` directory are used to organize routes.

For example:

```text
app/
├── page.tsx
└── about/
    └── page.tsx
```

This gives us:

```text
/
/about
```

The App Router also works with Server Components and supports features like layouts and loading states.

## Server and Client Components

One thing I found interesting is that components in the App Router are Server Components by default.

Server Components run on the server.

If a component needs browser interaction or client-side features, it can be made a Client Component by adding:

```tsx
'use client'
```

This allows us to choose which parts of the application should run on the server and which should run in the browser.

## Rendering

Next.js supports different ways of rendering a page.

For example, a page can be rendered ahead of time or rendered when a request is made.

I will look more deeply into Server-Side Rendering in the next task.

## Data Fetching

Next.js allows data to be fetched from Server Components.

This means that some data can be requested on the server instead of sending all the work to the browser.

Next.js also has Route Handlers which can be used when an application needs API endpoints.

I will explore this more when working on the SSR task.

## Full-stack development

Another interesting part of Next.js is that the frontend and some backend functionality can be inside the same project.

A Next.js application can contain:

* Pages and UI
* Server-side code
* Data fetching
* API endpoints
* Authentication
* Database interactions

## What I learned

From this research, I understand that Next.js is more than just React.

It gives a project a structure and provides features for routing, rendering, server-side code and data fetching.

The App Router and Server Components are also important parts of the current Next.js architecture.

I will explore some of these features in more detail in the next tasks, especially SSR and Google SSO.
