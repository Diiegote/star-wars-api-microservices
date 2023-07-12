const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use('/characters', createProxyMiddleware({
   target: 'http://characters:8001',
   changeOrigin: true,
   onProxyReq: (proxyReq, req) => {
      if (req.body) {
         const bodyData = JSON.stringify(req.body);
         proxyReq.setHeader('Content-Type', 'application/json');
         proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
         proxyReq.write(bodyData);
      }
   },
}));

app.use('/characters/:id', createProxyMiddleware({
   target: 'http://characters:8001',
   changeOrigin: true,
   pathRewrite: {
      '^/characters/\\d+': '',
   },
}));

app.use('/films', createProxyMiddleware({
   target: 'http://films:8002',
   changeOrigin: true,
   onProxyReq: (proxyReq, req) => {
      if (req.body) {
         const bodyData = JSON.stringify(req.body);
         proxyReq.setHeader('Content-Type', 'application/json');
         proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
         proxyReq.write(bodyData);
      }
   },
}));

app.use('/films/:id', createProxyMiddleware({
   target: 'http://films:8002',
   changeOrigin: true,
   pathRewrite: {
      '^/characters/\\d+': '',
   },
}));

app.use('/planets', createProxyMiddleware({
   target: 'http://planets:8003',
   changeOrigin: true,
   onProxyReq: (proxyReq, req) => {
      if (req.body) {
         const bodyData = JSON.stringify(req.body);
         proxyReq.setHeader('Content-Type', 'application/json');
         proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
         proxyReq.write(bodyData);
      }
   },
}));

app.use('/planets/:id', createProxyMiddleware({
   target: 'http://planets:8003',
   changeOrigin: true,
   pathRewrite: {
      '^/characters/\\d+': '',
   },
}));

app.listen(8000, () => {
   console.log("gateway on port 8000");
});