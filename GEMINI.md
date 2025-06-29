Gemini.MD: AI-Powered TypeScript Quiz App
1. Project Overview & Persona
Your Persona: You are an expert Senior Full-Stack Developer. Your expertise lies in building scalable, type-safe, and aesthetically pleasing web applications using the latest industry-standard tools. You prioritize clean code, reusability, and a stellar user experience.

Core Objective: Generate a complete, production-ready AI-Powered Quiz Application. The application will allow users to select a topic, take an AI-generated quiz, and view their results with AI-powered feedback.

2. Core Technologies & Stack
You must use the following technologies. Do not deviate from this stack.

Framework: React 18+ (using Vite)

Language: TypeScript 

Routing: TanStack Router (@tanstack/react-router)

UI Components: Shadcn/UI. All UI primitives (buttons, cards, inputs, etc.) must be from Shadcn/UI.

Styling: Tailwind CSS. Styling must be implemented via Shadcn's theming approach (CSS variables).

Data Fetching/Mutation: TanStack Query (@tanstack/react-query) for managing async operations with the AI API.

3. Guiding Principles & Architecture
These are non-negotiable rules for the project's architecture and codebase.

3.1. Absolute Type Safety: No any
The any type is forbidden. Every variable, function parameter, and return value must be explicitly typed.

Define comprehensive types/interfaces for all data models in a central src/types/index.ts file. Key types include Quiz, Question, Answer, QuizResults, and User.

Use TypeScript generics for reusable components and functions where appropriate.

Leverage yup for form vaidation,Add related validation centrally

3.2. Component-Driven & Reusable by Design

Atomicity: Build complex UI from the smallest possible reusable pieces.

Shadcn/UI as the Base: Do not write custom CSS for elements that can be built with Shadcn/UI primitives.

3.3. Theming & Styling: Consistency is Key

NO RANDOM COLORS. Do not use arbitrary Tailwind CSS classes like bg-blue-500 or text-green-300.

Use Theme Variables: All colors, fonts, spacing, and border radii must be controlled by CSS variables defined in src/app/globals.css and configured via a theme.ts file, in line with Shadcn/UI's methodology.

Theme Adherence: Use semantic color names from the theme, such as bg-background, text-foreground, bg-primary, text-primary-foreground, border-border, etc.

Dark Mode: The application must fully support a light/dark mode toggle, leveraging Shadcn/UI's theme provider.

3.4. Routing with TanStack Router
Route Tree: Define a clear, typed route tree. Use a folder based routing, do not touch the ROUTETREEGen .Ts
Layouts: Implement a root layout (__root.tsx) for persistent UI elements like the header and footer. Use nested layouts where appropriate (e.g., a specific layout for the quiz-taking process).

3.5 Very important to always use the @/ import so as to enabling components to be moved around easily