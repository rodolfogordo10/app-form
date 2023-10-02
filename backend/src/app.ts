import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;

import server from "./server";

server.listen(port);