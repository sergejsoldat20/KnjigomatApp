const getAvatar = (gender) => {
  if (gender === "M") {
    return "https://cdn.vectorstock.com/i/1000x1000/10/70/young-male-profile-colorful-icon-vector-9651070.webp";
  } else {
    return "https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg?w=740";
  }
};
export default getAvatar;
