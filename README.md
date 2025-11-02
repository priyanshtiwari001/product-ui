# Encrypted  App - Next.js Assignment

A secure Next.js application demonstrating **server-side encryption/decryption** with responsive card layouts using **Flexbox**, animations, and interactive filtering.


## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **React 18** with Framer Motion
- **Tailwind CSS v4**
- **Node.js crypto** (AES-256-GCM encryption)

## Setup Instructions

### 1. Clone the Repo
```
git clone https://github.com/priyanshtiwari001/product-ui.git
cd product-ui
```

### 2. Add Environment Variables

Go to the **Vars** section in the v0 sidebar and add:

```
PORT=3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
ENCRYPTION_KEY=myproduct
```

### 3. Install the dependencies and start the server
```
npm install
npm run dev
```
Visit `http://localhost:3000`


### Q: Client should never fetch plain encrypted content from a public endpoint directly and decrypt on client?

```
Flow:
Client ──(request)──> Server
                        ↓
                    Fetch from /api/products
                        ↓
                    Receive encrypted senstive info
                        ↓
                    Decrypt using ENCRYPTION_KEY (server-only)
                        ↓
                    Pass decrypted data to React components
                        ↓
                    Render HTML with data
                        ↓
Client ←(HTML only)─ Server
``` 
- Prevents data breaches if client-side code is compromised
- Encryption key stays in environment variables (not exposed)
- Client receives only rendered HTML, no secrets in network traffic


### Encryption Details - AES-256-GCM

**Why GCM Mode?**
- **Authenticated Encryption:** Prevents tampering
- **IV (Initialization Vector):** 12 random bytes for each encryption
- **Authentication Tag:** 16 bytes to verify data integrity
