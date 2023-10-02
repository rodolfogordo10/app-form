FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn yarn --frozen-lockfile

# ----------------------------------------------------------------------------------------------------------------------
FROM node:18-alpine AS builder
WORKDIR /app
# ENV NODE_OPTIONS --max_old_space_size=6000
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# ----------------------------------------------------------------------------------------------------------------------
FROM node:18-alpine AS runner
WORKDIR /app

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000
CMD ["yarn", "start"]
