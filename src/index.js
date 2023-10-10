const Fastify = require("fastify");

const buildServer = () => {
  const server = Fastify();

  server.get("/", async () => {
    return { hello: "world" };
  });

  return server;
};

module.exports = buildServer;
