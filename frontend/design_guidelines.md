# Smart To-Do Planner Design Guidelines

## Design Approach
**Reference-Based Approach:** Drawing inspiration from productivity leaders like Notion, Linear, and Asana for clean, functional interfaces that prioritize task management and progress visualization.

## Color Palette
**Primary:** `#3C83F6` (vibrant blue) with white text  
**Sidebar Primary:** `#3C83F6` (blue) with white text  
**Text:** Deep blue-gray (`#1e293b` equivalent) on white backgrounds  
**Background:** Pure white (`#ffffff`)  
**Secondary:** Light gray (`#e2e8f0` equivalent) with dark blue-gray text  
**Muted elements:** Medium gray backgrounds with muted blue text  
**Destructive:** `#ef4343` (red) with white text  
**Charts:** Orange, green, purple, yellow, blue spectrum

## HSL Color System
Your theme uses HSL color definitions:

**Light Mode Primary:** `221 83% 60%` (blue)  
**Light Mode Sidebar:** `221 83% 60%` (blue)  
**Light Mode Ring:** `221 83% 60%` (blue)  
**Dark Mode Primary:** `217 91% 60%` (blue)  
**Dark Mode Background:** `222 84% 5%` (near-black navy)

## Typography
**Primary:** Inter (sans-serif) for UI elements and body text  
**Secondary:** Georgia (serif) for headings and emphasis  
**Code:** Menlo (monospace) for data displays  
**Hierarchy:** Bold headings, medium weights for labels, regular for body text

## Layout System
Tailwind spacing primitives: 2, 4, 6, 8, 12, 16, 24

Consistent padding/margins using p-4, m-6, gap-8  
Card spacing with p-6, section margins with my-12  
Component spacing with space-y-4 for lists

## Component Library

### Core Navigation
**Header:** Fixed top navigation with app logo, user menu, and quick actions  
**Sidebar:** Collapsible category filters with blue primary elements  
**Breadcrumbs:** Clear navigation path for goal hierarchies

### Data Display
**Goal Cards:** Progress bars, category badges, due date indicators  
**Task Lists:** Checkbox interactions, priority levels, completion status  
**Progress Charts:** Circle progress for goals, bar charts for analytics  
**Calendar View:** Month/week grid with task dots and completion states

### Forms & Inputs
**Input Fields:** Rounded borders (0.5rem), focus states with blue ring color  
**Buttons:** Primary (blue), secondary (gray), destructive (red)  
**Modals:** Centered overlays for goal/task creation and editing

### Visual Elements
**Status Indicators:** Color-coded dots for categories and progress  
**Progress Bars:** Animated fills with percentage labels  
**Loading States:** Skeleton screens for smooth data loading  
**Elevation System:** Hover and active states with opacity layers

## Key Screens

### Landing Page
Clean, minimal design focusing on productivity benefits. Single viewport with:

- Hero section emphasizing "intelligent task breakdown"
- Feature highlights with subtle animations  
- Clear call-to-action for sign-up

### Dashboard
Information-dense layout with:

- Top metrics bar (today's tasks, goal completion rate)
- Quick add buttons for goals/tasks
- Recent activity feed
- Progress overview charts

### Goal Management
Hierarchical view showing:

- Goal cards with breakdown indicators
- Task subtrees with indentation
- Progress visualization per goal
- Category filtering sidebar with blue accents

## Mobile Considerations
- Collapsible sidebar becomes bottom sheet
- Swipe gestures for task completion
- Optimized touch targets (minimum 44px)
- Horizontal scroll for calendar view

## Theme System
**Light Mode:**
- Clean white backgrounds with blue primary actions
- Blue sidebar accents
- Gray borders and muted elements

**Dark Mode:**
- Near-black navy backgrounds (`222 84% 5%`)
- Blue primary actions throughout
- Dark gray cards and sidebar elements

## Animations
Minimal, purposeful animations:

- Progress bar fills on data load
- Smooth transitions between views
- Task completion checkmarks
- Loading spinners for API calls
- Elevation hover states with CSS custom properties

