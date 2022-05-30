export const isFollowed = (updatedUser, checkUser) =>
updatedUser?.following.find(user => user?.username === checkUser?.username)