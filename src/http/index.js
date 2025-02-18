import { Http } from "./Http";

const BACKEND_API = process.env.REACT_APP_BACKEND_API || "http://localhost:8000";

const http = new Http(BACKEND_API);

export { http };
