# Blog for notes

##1 - Install Docker, Docker Compose and Composer
```
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker $(whoami)
sudo apt-get -y install python-pip
sudo pip install docker-compose
sudo apt-get install composer
```

##2 - Clone project
```
git clone git@github.com:billizzard/react_api_platform_frontent.git
```

##3 - Add address to hosts
```bash
sudo -- sh -c "echo '127.0.1.1    blog.local'  >> /etc/hosts"
```

##4 - Run below command
```bash
docker-compose up --build
```

##5 - Run site in browser
blog.local/
