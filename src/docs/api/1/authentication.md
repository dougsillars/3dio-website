# Authentication

## Log in

API Key: **not required**

Start an authenticated user session:

```javascript
  IO3D.auth.logIn({
    name: 'demo@example.org',
    password: 'mypassword'
  }).then(console.log)
```

**Note**: All parameters are properties in a single object (see example above).

| Parameter | Required? | Description |
| --- | --- | --- |
| `name` | Yes | Either the email or username of the user to be logged in |
| `password` | Yes | The password of the user |

## Log out

API Key: **not required**

Invalidates and ends an authenticated user session. After logging out you can no longer access private user data.

```javascript
  IO3D.auth.logOut().then(console.log)
```

## Get session information

API Key: **not required**

Indicates if the user is logged in. Returns user information if the `isAuthenticated` property is true or an empty user object if it is false.

```javascript
  IO3D.auth.getSession().then(console.log)
```