clerk is already installed and connected. wire it into the Next.js app: provider,auth pages, redirects, route protection,and user menu.

## Design

use Clerk's `dark` theme from `@clerk/ui/themes` as the base.
Override Clerk appearance variables using the app's existing css variables. do not hardcode colors.
 ## sign-in and sign-up pages:

 - large screens: simple two-panel layout 
 - left: compact logo, tagline, short text-only feature list
 - right: centered clerk form
 - small screens: form only
 - no gradients
 - no oversized hero sections
 - no feature cards
 - no scroll-heacy layouts

 keep the layout minimal and professional.

 ## Implementation
 wrap the root layout with `ClerkProvider` using Clerk's `dark` theme.
 create sign-in and sign-up pages using Clerk components.
 use `proxy.ts` at the project root, not `middleware.ts`.
 define public routes using the existing sign-in and sign-up env vars. protect everything else by default.

 update `/`:
 - authenticated users redirect to `/editor`
 - unauthenticated users redirect to `/sign-in`
 add Clerk's built-in `UserButton` to the editor navbar right section for profile settings and layout.
 keep Clerks default user menu and profile flows intact. do not rebuild or heavily customize clerk internals.
 use existing clerk env vars. do not rename or invent new ones.

 ### dependencies 
 install: @clerk/ui.

 ## check when done 

 - `proxy.ts` exists at the root 
 - all routes are protected except public auth paths
 - auth pages use CSS variables with no hardcoded colors 
 - `ClerkProvider` wraos the root layout
 - `npm run build` passes