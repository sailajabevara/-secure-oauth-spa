# 🔐 Secure OAuth SPA (PKCE + Security)

This project demonstrates a secure implementation of the OAuth 2.0 Authorization Code Flow with PKCE in a Single Page Application (SPA). It also includes security best practices such as Content Security Policy (CSP), XSS prevention, and secure token handling.

---

## 🚀 Features

- OAuth 2.0 Authorization Code Flow with PKCE
- Google OAuth integration
- Secure token handling (in-memory)
- Protected routes
- Logout functionality
- XSS vulnerability demo and mitigation
- Content Security Policy (CSP)
- Dockerized deployment

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone <your-repo-url>
cd secure-oauth-spa

---

### 2. Install Dependencies (for local dev)

npm install
npm run dev

App runs at:
http://localhost:5174

---

### 3. Run with Docker (Recommended)

docker-compose up --build

App runs at:
http://localhost:3000

---

## 🔑 Environment Variables

Create a `.env` file using `.env.example`:

VITE_OAUTH_CLIENT_ID=your-client-id-here
VITE_REDIRECT_URI=http://localhost:3000/oauth/callback
VITE_AUTH_URL=https://accounts.google.com/o/oauth2/v2/auth
VITE_SCOPE=openid email profile

---

## 🔄 OAuth Flow

1. User clicks login
2. App generates:
   - code_verifier
   - code_challenge
3. Redirect to OAuth provider
4. Provider redirects back with authorization code
5. App exchanges code for access token
6. Token stored securely in memory
7. User redirected to /profile

---

## 🔐 Protected Routes

- /profile is protected
- Requires valid access token
- If not authenticated → redirects to /login

---

## 🚪 Logout

- Clears access token from memory
- Redirects user to /login
- Protected routes become inaccessible

---

## 🧪 XSS Demonstration

Route:
/xss-demo

### Vulnerable Example:
<script>window.xssFired=true</script>

- Executes script → window.xssFired = true

### Safe Example:
- Renders as plain text
- No execution

This demonstrates that the vulnerable component executes script,
while the safe component prevents execution.

---

### Secure Token Storage Justification

We used in-memory storage to store the access token.

This approach is more secure compared to localStorage because:
- It is not accessible via persistent browser storage
- It reduces the risk of XSS attacks stealing tokens

Trade-offs:
- Tokens are lost on page refresh
- Users must re-authenticate after refresh

window.getAuthToken() is used to verify authentication state.

---

### Content Security Policy (CSP) Directives

We implemented CSP using the public/_headers file.

Content-Security-Policy:
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com;
object-src 'none';
frame-ancestors 'none';

This policy helps mitigate:
- Cross-Site Scripting (XSS)
- Clickjacking attacks
- Injection of malicious resources

---

## 🐳 Docker Setup

Files:

- Dockerfile
- docker-compose.yml

Run:

docker-compose up --build

Access:

http://localhost:3000

---

## 🧪 Testing Checklist

- Login redirects to OAuth provider
- Callback handled correctly
- Token stored in memory
- window.getAuthToken() returns token
- Protected route works
- Logout clears token
- XSS demo works (vulnerable & safe)
- CSP applied
- Docker runs successfully

---

## 📌 Notes

- This project is for educational purposes
- Token exchange is mocked for demonstration
- Focus is on understanding OAuth + security

---

## 🙌 Author

Built as part of a secure frontend authentication assignment.