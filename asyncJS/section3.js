/* PROMISES */

const getUserName = new Promise((resolve, reject) => {
  const userName = "";
  if (userName.length > 0) resolve(userName);
  else reject("Error invalid name length");
});

getUserName
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
