

let accessToken: string | null = null;

export const tokenStore = {
  setTokens: (at: string) => {
    accessToken = at;
  },

  getAccessToken: () => accessToken,

  clear: () => {
    accessToken = null;
  }
};

// REQUIRED FOR TESTING
(window as any).getAuthToken = () => accessToken;