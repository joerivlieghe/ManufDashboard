// msalConfig.ts
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

const msalConfig: Configuration = {
  auth: {
    clientId: "63d8231e-705c-4fd9-9413-66ee6c8a3d87", // Replace with your client ID
    authority: "https://login.microsoftonline.com/f25493ae-1c98-41d7-8a33-0be75f5fe603", // Replace with your tenant ID
    redirectUri: "https://kind-hill-08a077d03.4.azurestaticapps.net/", // Replace with your redirect URI
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
const loginRequest = {
  scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance, msalConfig, loginRequest, graphConfig };