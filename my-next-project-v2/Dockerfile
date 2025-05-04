# ベースイメージ
FROM node:20-alpine AS builder

# 作業ディレクトリ作成
WORKDIR /app

# パッケージをインストール
COPY package*.json ./
RUN npm install

# アプリケーションコードをコピーしてビルド
COPY . .
RUN npm run build

# 実行環境用の軽量イメージ
FROM node:20-alpine AS runner

WORKDIR /app

# プロダクションモジュールのみインストールするために再インストール
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

# .next や public ディレクトリなどをコピー
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/node_modules ./node_modules

# Next.js アプリケーションを起動
EXPOSE 3000
CMD ["npx", "next", "start"]
