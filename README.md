# BUILD
docker build -t luclimasilva23/playlist-front:0.1 -f devops/Dockerfile .

# RUN
docker run -p 8000:80 --rm luclimasilva23/playlist-front:0.1
