FROM node:12

WORKDIR /app

ENV NODE_PATH=/app/node_modules
ENV PATH=$PATH:/app/node_modules/.bin

COPY ./app/package.json ./app/yarn.lock /app/
RUN yarn install
COPY ./app /app

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]