Read `AGENTS.md` before starting.

we are adding the design system and UI primitive components.
install and configure `shadcn/ui`.
add these shadcn components:
- Button 
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

do not modify the generated `components/ui/*` files after installation.
also install `lucide-react`.
create `lib/utils.ts` with a reusable `cn()` helper for merging tailwind classes.
ensure all components match the existing dark theme in `globals.css`.

### check when done 

- all components import without errors 
- `cn()` works properly
- no default light styling appears