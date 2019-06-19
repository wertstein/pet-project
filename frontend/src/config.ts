export function tokenGetter() {
  return localStorage.getItem('token');
}

export const config = {
  api: 'http://localhost:8000/api',
};

export const jwt = {
  tokenGetter,
  authScheme: 'Token ',
  skipWhenExpired: true,
  whitelistedDomains: ['localhost:8000'],
  blacklistedRoutes: ['http://localhost:8000/api/users/login'],
};
