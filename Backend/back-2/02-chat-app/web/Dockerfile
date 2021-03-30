FROM python:3.7

RUN apt-get update
RUN apt-get install apt-utils -y

WORKDIR /code

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .