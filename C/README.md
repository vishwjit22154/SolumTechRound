# C. Login Page - Frontend Test

A modern, responsive login page built with vanilla JavaScript using a clean separation of `index.html`, `styles.css`, and `script.js`.

## Demo Credentials

The following credentials are hardcoded for testing:
- `sylviaH@solum.com` / `@Adventurer25`
- `vish@solum.com` / `$GotJobAtSolum25`

## Features


###  Validation Rules

#### Email Validation:
- Must not be empty
- Must exist in the valid emails list
- Error shown if email doesn't exist

#### Password Validation:
- Must be between 8-16 characters
- Must contain at least one uppercase letter
- Must contain at least one lowercase letter
- Must contain at least one number
- Must contain at least one symbol
- Error shown if password is incorrect for the given email

### Successful Login
When credentials are valid:
- Login form is hidden
- Welcome message displays the user's email
- Logout button returns to login page



## Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **Vanilla JavaScript** - All functionality
- **No frameworks or build tools required!**

## How to Run

### Method 1: Direct Open
Simply open the `index.html` file in any modern web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

### Method 2: Local Server (Optional)
If you want to run it with a local server:
```bash
# Using Python
python -m http.server 8000
# Then open http://localhost:8000

# Using Node.js
npx serve
# Then open the provided URL
```



### Form Validation
All validation happens on the frontend with clear error messages:

```javascript
// Email validation
function validateEmail(email) {
  if (!email || email.trim() === '') {
    return 'Email is required';
  }
  const validEmails = VALID_CREDENTIALS.map(cred => cred.email);
  if (!validEmails.includes(email)) {
    return 'Email does not exist';
  }
  return '';
}
```

### Password Requirements
```javascript
// Password must meet all criteria:
- Length: 8-16 characters
- /[A-Z]/ - uppercase letter
- /[a-z]/ - lowercase letter
- /[0-9]/ - number
- /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ - symbol
```






