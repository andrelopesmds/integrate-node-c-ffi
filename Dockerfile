FROM node:10

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

WORKDIR /usr/src/app

COPY package*.json ./
COPY src/ ./src
RUN npm run build

COPY Cargo.toml ./
COPY Cargo.lock ./
RUN cargo build

EXPOSE 8080

CMD [ "node", "src/index.js" ]
