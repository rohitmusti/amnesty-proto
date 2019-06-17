# Amnesty Prototype

## Set up
Use the command `$ docker-compose up` to set up the containers. 
The current configuration is that each service gets its own container.
For example, the client layer (front-end) gets its own container, the experience layer (middleware) gets is own container, etc.

### Database Set up

1. After the containers are running, enter the container that contains the mysql database.
    - `$ docker exec -it database bash`
1. Then enter mysql
    - `# mysql -uroot  -p'dev'`
    - the password "dev" only works in development environments
1. Create a non-root user
    - `mysql> create user 'dev' identified by 'dev';`
1. Create a database
    - `mysql> create database dev character set utf8;`
1. Grant permissions to the user
    - `mysql> grant all on dev.* to 'dev';`

## What has been done
Nothing too wild, I just spend some time getting the docker-compose up working and connected the client layer to the experience layer with a basic API test.

## Next Steps
1. The front-end team should start setting up their various views, using fixtures where needed.
1. The back-end team should create CRUD end points for the various models.
1. The middle-ware team should create the API end points required by the front-end teams and connect them cleanly to the back-end

## Notes