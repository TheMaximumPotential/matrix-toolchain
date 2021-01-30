docker build -t vite .
docker run -v $PWD/dist:/usr/src/app/dist vite
