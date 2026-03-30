# Travales (React + Vite + Firebase Auth)

This project now includes Firebase Authentication with:

- Email + password sign up/sign in
- Google sign in

## 1) Create your Firebase project (from zero)

1. Open https://console.firebase.google.com
2. Click **Create a project**
3. Enter a project name (for example: `traveles-app`)
4. Continue with default settings (Google Analytics is optional)
5. Wait for project creation and open the project dashboard

## 2) Register this web app in Firebase

1. In Firebase dashboard, click the **Web** icon `</>` (Add app)
2. App nickname: `traveles-web`
3. Click **Register app**
4. Firebase will show your web config values (`apiKey`, `authDomain`, etc.)

## 3) Enable Authentication providers

1. Go to **Build > Authentication > Get started**
2. Open **Sign-in method** tab
3. Enable **Email/Password**
4. Enable **Google**
5. In Google provider setup:
	- Choose a support email
	- Save

## 4) Add localhost authorized domain

1. In **Authentication > Settings > Authorized domains**
2. Ensure `localhost` exists (usually it is already there)
3. If missing, add `localhost`

## 5) Configure environment variables

1. Copy `.env.example` to `.env`
2. Fill values from Firebase web config:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## 6) Install and run

```bash
npm install
npm run dev
```

Open the local URL shown in terminal (usually http://localhost:5173).

## 7) What was added in this codebase

- Firebase auth setup: `src/lib/firebase.ts`
- Env template: `.env.example`
- Sign in wired to Firebase: `src/components/singin.tsx`
- Sign up wired to Firebase: `src/components/singup.tsx`

## 8) Optional backend next steps with Firebase

If you want a full backend beyond auth, next enable:

1. **Cloud Firestore** for trip data, bookings, and user profiles
2. **Storage** for property/trip images
3. **Security Rules** to allow only authenticated users to write data
4. **Cloud Functions** for server-side logic (payments, notifications, etc.)
