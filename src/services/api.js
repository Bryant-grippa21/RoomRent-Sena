const API_BASE = 'http://localhost:8080';

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || err.message || res.statusText);
  }
  return res.status === 204 ? null : res.json();
}

export const authApi = {
  login: (username, password) =>
    apiFetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify({ username, password, rememberMe: false }),
    }),

  getAccount: () => apiFetch('/api/account'),

  register: (data) =>
    apiFetch('/api/register', { method: 'POST', body: JSON.stringify(data) }),

  resetPasswordInit: (email) =>
    apiFetch('/api/account/reset-password/init', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: email,
    }),
};

export const inmuebleApi = {
  getAll: (params = '') => apiFetch(`/api/publicacion-inmuebles?${params}`),
  getOne: (id) => apiFetch(`/api/publicacion-inmuebles/${id}`),
};
