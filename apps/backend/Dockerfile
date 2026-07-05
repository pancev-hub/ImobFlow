# Build container for backend development (uses host workspace via volume)
FROM node:18

# Enable corepack to use Yarn 3
RUN corepack enable && corepack prepare yarn@stable --activate

WORKDIR /usr/src/app

# Copy only package files to allow cache install (optional)
# We will mount the full repo at runtime for development
COPY package.json yarn.lock* ./

# Install dependencies (will install workspace dependencies)
RUN yarn install --immutable || true

CMD ["/bin/sh", "-c", "corepack enable && corepack prepare yarn@stable --activate && yarn workspace @imobflow/backend dev"]
