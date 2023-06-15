# instrucoes para rodar os projetos
caso baixe esse projeto primeiro execute o build e no projeto back end tem um docker-compose.yml para subir os dois projetos via container docker

# BUILD
docker build -t luclimasilva23/playlist-front:0.1 -f devops/Dockerfile .

# RUN
docker run -p 8000:80 --rm luclimasilva23/playlist-front:0.1
