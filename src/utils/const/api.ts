
const SERVER_NAME = "http://localhost:7892";
export const BASE_URL = `${SERVER_NAME}/api`;

export function getTokenAuthorizationHeader() {
  // return {
  //   Authorization:
  //     "Bearer " +
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMTFhNjY3Ny1iNzY3LTRjOWMtYTc2Ny0yNjBhODhlN2NlNjEiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE1MzUyMDU1LCJleHAiOjE3MTc5NDQwNTUsImlzcyI6ImFwaS5qaiIsInN1YiI6ImFkbWluIn0.p6OSEYA0bY6KZHWWoH92X6qv8ZzoqgtN4L8gjLfulVU",
  //   "Content-Type": "application/json"
  // };

  const accessToken = localStorage?.getItem("accessToken");

  if (accessToken) {
    return {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
  } else {
    return {
      Authorization: ``,
      "Content-Type": "application/json"
    };
  }
}
