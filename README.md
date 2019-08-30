Docker setup
------------
1. Create the .env
`mv .env.sample .env`
2. Add the environmental variables
3. Run 
```
docker-compose up
docker-compose up -d #run in background
docker-compose down # remove
docker-compose stop # stop
docker-compose start # start stopped services
docker-compose run [service name] # run a single serivce in docker-compose manifest
docker-compose run web-cli # to ssh into the container
docker-compose build # Build the docker image
docker logs -f [container id] # to view logs
```

### Deployment

Change the docker CMD to following
`CMD ["npm", "run" ,"start"]`

### Build the image

**You have to manually add the user before running the image**

```
docker build . -t [repo-name]/[image-name]:[version]
docker run -it -p [host-port]:[container-port] [image-name] [cmd]
```