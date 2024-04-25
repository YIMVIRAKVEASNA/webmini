export const registerService = async (userInfo) => {
  console.log("registerService",userInfo);
  const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log("registerauth",data);
    return data;
};