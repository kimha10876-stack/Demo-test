# ==========================================
# Stage 1: Build ứng dụng React với Node.js
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy các file cấu hình package trước để tối ưu hóa Docker Cache
COPY package*.json ./

# Cài đặt toàn bộ dependencies (bao gồm devDependencies để build tsx/vite)
# Sử dụng 'npm ci' để đảm bảo tính nhất quán và tốc độ tối ưu hơn 'npm install'
RUN npm ci

# Copy toàn bộ mã nguồn vào container
COPY . .

# Tiến hành build ứng dụng ra thư mục /app/dist
RUN npm run build

# ==========================================
# Stage 2: Chạy production server siêu nhẹ với Nginx
# ==========================================
# Sử dụng phiên bản alpine-slim để giảm dung lượng file ảnh xuống tối thiểu (~20MB)
FROM nginx:stable-alpine-slim

# Copy cấu hình Nginx tối ưu cho SPA và Cache
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy toàn bộ file đã build từ Stage 1 sang thư mục root của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Mở cổng 80 cho container
EXPOSE 80

# Chạy Nginx ở chế độ background-off (foreground) để docker container hoạt động liên tục
CMD ["nginx", "-g", "daemon off;"]
