let isRefreshing = false;
let queue: ((token: string) => void)[] = [];

export function refreshToken(): Promise<string> {
  if (isRefreshing) {
    return new Promise((resolve) => {
      queue.push(resolve);
    });
  }

  isRefreshing = true;

  return new Promise((resolve) => {
    console.log("Refreshing token...");

    setTimeout(() => {
      const newToken = "new_mock_access_token";

      isRefreshing = false;

      // resolve all queued requests
      queue.forEach((cb) => cb(newToken));
      queue = [];

      resolve(newToken);
    }, 1000);
  });
}