# Token & Secret Storage in Next.js

## Environment Variables

Next.js supports environment variables for storing configuration values and sensitive information.

Sensitive values can be stored in `.env.local`, for example:

```env
AUTH_SECRET=your-secret
GOOGLE_CLIENT_SECRET=your-client-secret
```

The `.env.local` file should not be committed to Git when it contains secrets.

## Server-Side vs Client-Side

Environment variables are available on the server by default.

Variables that need to be exposed to browser code must use the `NEXT_PUBLIC_` prefix.

```env
NEXT_PUBLIC_API_URL=https://example.com
```

Sensitive values such as database credentials, API keys, and OAuth client secrets should not use the `NEXT_PUBLIC_` prefix.

## Authentication Tokens

Authentication systems can use tokens or sessions to maintain a user's authenticated state.

Sensitive authentication information should be handled on the server whenever possible and should not be exposed to client-side JavaScript.

## Secure Storage

Secrets should not be hardcoded directly into application source code.

For local development, `.env.local` can be used to store secrets. For production, secrets should be managed using the hosting platform's environment variables or a dedicated secret-management solution.

## Best Practices

* Never commit passwords, API keys, or authentication secrets.
* Keep `.env.local` out of Git.
* Do not expose private secrets with `NEXT_PUBLIC_`.
* Keep sensitive authentication logic on the server.
* Use secure secret-management solutions in production.
* Rotate secrets if they are accidentally exposed.

## Conclusion

Next.js provides environment variables to manage configuration and sensitive values. Secrets should remain protected on the server and should never be exposed to the browser or committed to a public repository.
