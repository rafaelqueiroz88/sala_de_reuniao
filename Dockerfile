FROM ruby:3.0.2

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install yarn -y
RUN apt install nano -y
RUN apt install nodejs -y
RUN apt install build-essential libpq-dev -y
RUN apt install postgresql-client -y
RUN apt install redis -y
RUN apt install imagemagick -y
RUN gem install rails
RUN gem install bundler
RUN gem install pg
# RUN gem install sidekiq
# RUN gem install redis

RUN mkdir /app
WORKDIR /app 

COPY docker-entrypoint.sh docker-entrypoint.sh
RUN chmod +x docker-entrypoint.sh

ENTRYPOINT [ "/app/docker-entrypoint.sh" ]