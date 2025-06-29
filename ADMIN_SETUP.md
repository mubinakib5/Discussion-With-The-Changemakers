# Admin Authentication Setup

## Environment Variables

To secure the admin dashboard, you need to set up environment variables. Create a `.env.local` file in the root directory of your project with the following content:

```env
# Admin Authentication
ADMIN_PASSWORD=your_secure_admin_password_here

# Add other environment variables below
# MONGODB_URI=your_mongodb_connection_string
# NEXT_PUBLIC_API_URL=your_api_url
```

## Security Notes

1. **Choose a strong password**: Use a combination of uppercase, lowercase, numbers, and special characters
2. **Keep it secret**: Never commit the `.env.local` file to version control
3. **Production deployment**: Set the environment variable in your hosting platform (Vercel, Netlify, etc.)

## How it works

- The admin dashboard at `/admin/registrations` is now protected with password authentication
- Users must enter the correct password to access the dashboard
- Authentication is stored in sessionStorage and persists until the browser tab is closed
- A logout button is available in the dashboard header

## Access

1. Navigate to `http://localhost:3000/admin/registrations`
2. Enter the password you set in the `ADMIN_PASSWORD` environment variable
3. Click "Access Dashboard" to view and manage team registrations

## Troubleshooting

- If you get "Server configuration error", make sure the `ADMIN_PASSWORD` environment variable is set
- If authentication fails, double-check the password in your `.env.local` file
- Restart your development server after adding the environment variable
