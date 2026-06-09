# PHOOGLE AI - MASTER PROJECT SPECIFICATION

PROJECT NAME:
Phoogle AI

TAGLINE:
Search Smarter with AI

PROJECT TYPE:
Progressive Web App (PWA)

GOAL:
Build a complete Google-like AI search and assistant platform that works on mobile, desktop, and can be converted into APK using PWABuilder.

==================================================
TECH STACK
==================================================

Frontend:
- Next.js 15+
- React
- TypeScript
- Tailwind CSS
- ShadCN UI

Backend:
- Next.js API Routes

Database:
- Supabase

Authentication:
- Supabase Auth

AI PROVIDER:
- Gemini API

PWA:
- Service Worker
- Offline Support
- Manifest.json

Deployment:
- Vercel

==================================================
ENVIRONMENT VARIABLES
==================================================

GEMINI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
JWT_SECRET=

==================================================
MAIN FEATURES
==================================================

1. HOME PAGE

Components:

- Phoogle AI Logo
- Search Bar
- Voice Search Button
- AI Chat Button
- Trending Topics
- Recent Searches

UI:
Modern Google-inspired layout.

==================================================
2. AI CHAT
==================================================

Features:

- Gemini AI Integration
- Multi-turn conversations
- Markdown support
- Code highlighting
- Copy button
- Regenerate response
- Typing indicator
- Chat history
- Auto scroll

Store all chats in database.

==================================================
3. SMART SEARCH
==================================================

Features:

- Search bar
- Search suggestions
- Search history
- Search results page

Search result card:

- Title
- URL
- Description
- Open website button

==================================================
4. VOICE SEARCH
==================================================

Use browser Speech Recognition API.

Support:

- English
- Hindi

Features:

- Start listening
- Stop listening
- Auto-fill search bar

==================================================
5. IMAGE GENERATOR
==================================================

Features:

- Prompt input
- Generate image
- Image gallery
- Download image
- Share image

Store generated image history.

==================================================
6. USER ACCOUNT
==================================================

Features:

- Register
- Login
- Logout
- Forgot Password
- User Profile

Profile includes:

- Name
- Avatar
- Search History
- Chat History

==================================================
7. SETTINGS
==================================================

Options:

- Dark Mode
- Light Mode
- System Theme
- Clear History
- About App
- Privacy Policy

==================================================
8. HISTORY SYSTEM
==================================================

Save:

- Searches
- Chats
- Generated Images

Allow:

- Delete single item
- Delete all history

==================================================
DATABASE SCHEMA
==================================================

TABLE: users

id
email
name
avatar
created_at

TABLE: chats

id
user_id
message
response
created_at

TABLE: searches

id
user_id
query
created_at

TABLE: generated_images

id
user_id
prompt
image_url
created_at

==================================================
API ROUTES
==================================================

POST /api/chat

Input:

{
 "message":"Hello"
}

Output:

{
 "reply":"AI response"
}

Use Gemini API.

--------------------------------------------------

POST /api/search

Input:

{
 "query":"What is AI"
}

Output:

{
 "results":[]
}

--------------------------------------------------

POST /api/image

Input:

{
 "prompt":"A futuristic city"
}

Output:

{
 "imageUrl":"..."
}

==================================================
FOLDER STRUCTURE
==================================================

src/

app/

page.tsx

chat/

search/

image-generator/

profile/

settings/

components/

ui/

chat/

search/

layout/

hooks/

lib/

services/

types/

utils/

public/

icons/

images/

manifest.json

==================================================
PWA REQUIREMENTS
==================================================

Must include:

- manifest.json
- service worker
- offline caching
- install prompt

Manifest:

Name:
Phoogle AI

Short Name:
Phoogle

Display:
standalone

Theme Color:
#000000

Background Color:
#ffffff

==================================================
UI DESIGN
==================================================

Style:

- Modern
- Premium
- Responsive
- Mobile First

Use:

- Smooth animations
- Rounded cards
- Beautiful typography
- Fast loading

==================================================
SECURITY
==================================================

- Never expose API keys
- Server-side API calls only
- Input validation
- Rate limiting
- Secure authentication

==================================================
PERFORMANCE
==================================================

Target:

- Lighthouse Score 90+
- Mobile optimized
- Lazy loading
- Image optimization

==================================================
SEO
==================================================

Include:

- Meta tags
- Open Graph tags
- Sitemap
- Robots.txt

==================================================
DEPLOYMENT
==================================================

Generate:

- Complete Next.js project
- Production-ready code
- No placeholder files
- No TODO comments
- No compilation errors

After build:

npm install
npm run build

Must build successfully.

==================================================
FINAL OUTPUT
==================================================

Generate every file required.

Generate all source code.

Generate all components.

Generate all pages.

Generate all API routes.

Generate all configuration files.

Generate complete project ready for deployment on Vercel.

The final project must be fully functional and compatible with PWABuilder for APK generation.

No missing files.

No placeholders.

No mock implementations.

Everything production-ready.
