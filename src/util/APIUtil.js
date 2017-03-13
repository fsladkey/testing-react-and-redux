export function fetchUsers() {
  return fetch('https://api.github.com/users/fsladkey/following')
    .then(response => response.json());
}
