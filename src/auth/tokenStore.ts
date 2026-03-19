
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

// global function
(window as any).getAuthToken = () => accessToken;