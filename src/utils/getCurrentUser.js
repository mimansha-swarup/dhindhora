export const getCurrentUser = (users,username) =>
      users.filter((user) => user.username === username)[0];